// const crypto = require('crypto');

//testing
const tokenExists = true;

//helper to check if user is logged in
const privateHelpers = {

    isLoggedIn() {
        if (tokenExists) {
            return true;
        }

        else {
            console.log("no token")
        }
    }
    // ,

    // getSalt() {
    //     return crypto.randomBytes(16).toString('hex');
    // },

    // /**
    //  * 
    //  * @param {*} salt 
    //  * @param {*} password 
    //  */
    // getHash(salt, password) {
    //     return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
    // },
    // checkIfValidPass(user, password) {
    //     var unvalidatedHash = privateHelpers.getHash(user.salt, password);
    //     return unvalidatedHash === user.hash;
    // }


}





var authenticationHelpers = {
    getSalt() {
        return crypto.randomBytes(16).toString('hex');
    },
    getAccessCode() {
        return crypto.randomBytes(7).toString('hex');
    },
    /**
     * 
     * @param {*} salt 
     * @param {*} password 
     */
    getHash(salt, password) {
        return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
    },
    checkIfValidPass(user, password) {
        var unvalidatedHash = authenticationHelpers.getHash(user.salt, password);
        return unvalidatedHash === user.hash;
    }
}

module.exports = privateHelpers;