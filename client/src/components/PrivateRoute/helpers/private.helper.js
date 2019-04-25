// const crypto = require('crypto');

//helper to check if user is logged in
const privateHelpers = {
    splitToken(token) {
        return (JSON.parse(window.atob(token.split('.')[1])));
    },
    getToken() {
        return localStorage.getItem('token');

    },
    getUserData(token) {
        return privateHelpers.splitToken(token);

    },

    isLoggedIn() {
        // get the token

        let token = localStorage.getItem('token');
        console.log(token)

        if (token != null) {
            const userData = privateHelpers.splitToken(token);

            if (userData.exp > Date.now() / 1000) {
                return true
            }
            else {
                localStorage.removeItem('token');
                return false
                // remove token from local storage

            }
        }
    }

}



module.exports = privateHelpers;