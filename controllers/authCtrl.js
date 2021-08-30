const Users = require('./../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authCtrl = {
    register: async (req, res) => {
        try {
            // Transform USER01 to user01 and User 02 to user02
            const {fullname, username, email, password, gender} = req.body;
            let newUserName = username.toLowerCase().replace(/ /g, '');

            // Check newUserName have already database ?
            const user_name = await Users.findOne({username: newUserName});
            if(user_name) return res.status(400).json({msg: 'This user is already exist.'});

            const user_email = await Users.findOne({email});
            if(user_email) return res.status(400).json({msg: 'This email is already exist.'});

            if(password.length < 6)
                return res.status(400).json({msg: "Password have to >= 6 characters."});

            const passwordHash = await bcrypt.hash(password, 12);

            // Create new object to save into database
            const newUser = new Users({
                fullname,
                username: newUserName,
                email,
                password: passwordHash,
                gender
            });

            const access_token = createAccessToken({
                id: newUser._id
            });

            const refresh_token = createRefreshToken({
                id: newUser._id
            });

            res.cookie('refresh_token', refresh_token, {
               httpOnly: true,
               path: '/api/refresh_token',
                // Duration 30 days
                maxAge: 30*24*60*60*1000
            });

            // Save object
            await newUser.save();

            res.json({
                msg: 'Register success',
                access_token,
                user: {
                    ...newUser._doc,
                    password
                }
            });
        } catch (e) {
            return res.status(500).json({msg: e.message});
        }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email})
                .populate('followers following', 'avatar username fullname followers following');

            if(!user)
                return res.status(400).json({msg: 'The email does not exist.'});

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch)
                return res.status(400).json({msg: 'The password incorrect.'});

            const access_token = createAccessToken({
                id: user._id
            });

            const refresh_token = createRefreshToken({
                id: user._id
            });

            res.cookie('refresh_token', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                // Duration 30 days
                maxAge: 30*24*60*60*1000
            });

            res.json({
                msg: 'Login success',
                access_token,
                user: {
                    ...user._doc,
                    password
                }
            });

        } catch (e) {
            return res.status(500).json({msg: e.message});
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refresh_token', {path: '/api/refresh_token'});
            return res.json({msg: 'Logged out'});
        } catch (e) {
            return res.status(500).json({msg: e.message});
        }
    },
    generateAccessToken: async (req, res) => {
        try {
            const rf_token = req.cookies.refresh_token;
            if(!rf_token)
                return res.status(400).json({msg: 'Please log in now.'});

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, async (err, result) => {
                if(err)
                    return res.status(400).json({msg: 'Please log in now.'});

                const user = await Users.findById(result.id)
                    .select('-password')
                    .populate('followers following', 'avatar username fullname followers following');

                if(!user)
                    return res.status(400).json({msg: 'The does not exist.'});

                const access_token = createAccessToken({id: result.id});

                res.json({
                    access_token,
                    user
                });
            });

        } catch (e) {   
            return res.status(500).json({msg: e.message});
        }
    }
};

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        // Duration 1 day
        expiresIn: '1d'
    });
};

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        // Duration 30 day
        expiresIn: '30d'
    });
};

module.exports = authCtrl;