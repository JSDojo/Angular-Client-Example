module.exports = {
    db: {
        url: "mongodb://127.0.0.1:27017/contactsDB"
    },
    serv: {
        port: process.env.PORT || 3001,
        host: 'localhost'
    }
};
