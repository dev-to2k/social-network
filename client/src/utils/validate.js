/* eslint-disable no-useless-escape */
/* eslint-disable object-curly-newline */
function validateEmail(email) {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// eslint-disable-next-line import/prefer-default-export
const validate = ({ fullname, username, email, password, confirmPassword }) => {
  const error = {};

  if (!fullname) {
    error.fullname = 'Please enter full name.';
  } else if (fullname.length > 25) {
    error.fullName = 'Full name have to <= 25 character.';
  }

  if (!username) {
    error.userName = 'Please enter username.';
  } else if (username.replace(/ /g, '').length > 25) {
    error.userName = 'Username have to <= 25 character.';
  }

  if (!email) {
    error.email = 'Please enter email.';
  } else if (!validateEmail(email)) {
    error.email = 'Email incorrect.';
  }

  if (!password) {
    error.password = 'Please enter password.';
  } else if (password.length < 6) {
    error.password = 'Password have to >= 6 character.';
  }

  if (password !== confirmPassword) {
    error.confirmPassword = 'Password have to match';
  }

  return {
    errorMsg: error,
    errorLength: Object.keys(error).length,
  };
};

export default validate;
