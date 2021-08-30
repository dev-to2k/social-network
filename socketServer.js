let users = [];

const EditData = (data, id, call) => {
    const newData = data.map(item =>
        item.id === id ? {...item, call} : item
    );
    return newData;
}

const SocketServer = (socket) => {
    // Connect - Disconnect
    socket.on('joinUser', user => {
        users.push({id: user._id, socketId: socket.id, followers: user.followers});
    });

    socket.on('disconnect', () => {
        const data = users.find(user => user.socketId === socket.id);
        if (data) {
            const clients = users.filter(user =>
                data.followers.find(item => item._id === user.id)
            )

            if (clients.length > 0) {
                clients.forEach(client => {
                    socket.to(`${client.socketId}`).emit('CheckUserOffline', data.id);
                })
            }

            if(data.call) {
                const callUser = users.f(user => user.id === data.call);
                if(callUser) {
                    users = EditData(users, callUser.id, null);
                    socket.to(`${callUser.socketId}`).emit('callerDisconnect');
                }
            }
        }

        users = users.filter(user => user.socketId !== socket.id);
    });

    // Like
    socket.on('likePost', newPost => {
        const ids = [...newPost.user.followers, newPost.user._id];
        const clients = users.filter(user => ids.includes(user.id));

        if(clients.length > 0) {
            clients.forEach(client => {
                socket.to(`${client.socketId}`).emit('likePostToClient', newPost);
            });
        }
    });

    // UnLike
    socket.on('unLikePost', newPost => {
        const ids = [...newPost.user.followers, newPost.user._id];
        const clients = users.filter(user => ids.includes(user.id));

        if(clients.length > 0){
            clients.forEach(client => {
                socket.to(`${client.socketId}`).emit('unLikeToClient', newPost);
            });
        }
    });

    // Create comment
    socket.on('createComment', (newPost) => {
        const ids = [...newPost.user.followers, newPost.user._id];
        const clients = users.filter(user => ids.includes(user.id));
        if (clients.length > 0) {
            clients.forEach(client => {
                socket.to(`${client.socketId}`).emit('createCommentToClient', newPost);
            });
        }
    });

    // Delete comment
    socket.on('deleteComment', (newPost) => {
        const ids = [...newPost.user.followers, newPost.user._id];
        const clients = users.filter(user => ids.includes(user.id));
        if (clients.length > 0) {
            clients.forEach(client => {
                socket.to(`${client.socketId}`).emit('deleteCommentToClient', newPost);
            });
        }
    });

    // Like comment
    socket.on('likeComment', (newPost) => {
        const ids = [...newPost.user.followers, newPost.user._id];
        const clients = users.filter(user => ids.includes(user.id));
        if (clients.length > 0) {
            clients.forEach(client => {
                socket.to(`${client.socketId}`).emit('likeCommentToClient', newPost);
            });
        }
    });

    // UnLike comment
    socket.on('unLikeComment', (newPost) => {
        const ids = [...newPost.user.followers, newPost.user._id];
        const clients = users.filter(user => ids.includes(user.id));
        if (clients.length > 0) {
            clients.forEach(client => {
                socket.to(`${client.socketId}`).emit('unLikeCommentToClient', newPost);
            });
        }
    });

    // Follow
    socket.on('follow', (newUser) => {
        const user = users.find(user => user.id === newUser._id);
        user && socket.to(`${user.socketId}`).emit('followToClient', newUser);
    });

    // Unfollow
    socket.on('unFollow', (newUser) => {
        const user = users.find(user => user.id === newUser._id);
        user && socket.to(`${user.socketId}`).emit('unFollowToClient', newUser);
    });

    // Create notify
    socket.on('createNotify', msg => {
        const client = users.find(user => msg.recipients.includes(user.id));
        client && socket.to(`${client.socketId}`).emit('createNotifyToClient', msg);
    });

    // Remove notify
    socket.on('removeNotify', msg => {
        const client = users.find(user => msg.recipients.includes(user.id));
        client && socket.to(`${client.socketId}`).emit('removeNotifyToClient', msg);

    });

    // Message
    socket.on('addMessage', msg => {
        const user = users.find(user => user.id === msg.recipient);
        user && socket.to(`${user.socketId}`).emit('addMessageToClient', msg);
    });

    // Check User Online / Offline
    socket.on('checkUserOnline', data => {
        const following = users.filter(user =>
            data.following.find(item => item._id === user.id)
        );
        socket.emit('checkUserOnlineToMe', following);

        const clients = users.filter(user =>
            data.followers.find(item => item._id === user.id)
        );

        if (clients.length > 0) {
            clients.forEach(client => {
                socket.to(`${client.socketId}`).emit('checkUserOnlineToClient', data._id);
            });
        }
    });

    // Call
    socket.on('callUser', data => {
        users = EditData(users, data.sender, data.recipient);

        const client = users.find(user => user.id === data.recipient);
        if (client) {
            if (client.call) {
                users = EditData(users, data.sender, null);
                socket.emit('userBusy', data);
            } else {
                users = EditData(users, data.sender, data.sender);
                socket.to(`${client.socketId}`).emit('callUserToClient', data);
            }
        }
    });

    // End call
    socket.on('endCall', data => {
        const client = users.find(user => user.id === data.sender);
        if (client) {
            socket.to(`${client.socketId}`).emit('endCallToClient', data);
            users = EditData(users, client.id, null);

            if(client.call) {
                const clientCall = users.find(user => user.id === client.call);
                clientCall && socket.to(`${clientCall.socketId}`).emit('endCallToClient', data);

                users = EditData(users, client.call, null);
            }
        }

        users = EditData(users, data.sender, null);
        users = EditData(users, data.recipient, null);
    });
};

module.exports = SocketServer;