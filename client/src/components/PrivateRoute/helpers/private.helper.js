// const crypto = require('crypto');

//testing
// const tokenExists = true;

//helper to check if user is logged in
const privateHelpers = {
    
    splitToken(token) {
        return(JSON.parse(window.atob(token.split('.')[1])));
    },
    isLoggedIn() {
        // get the token
        // let token = window.localStorage.getItem(this.TOKEN_STORAGE_LOCATION);
        let token = localStorage.getItem('token');
        console.log(token)
        if(token != null) {
            const userData = privateHelpers.splitToken(token);
            // console.log("is valid?");
            // console.log(userData.exp > Date.now() / 1000);
            if(userData.exp > Date.now() / 1000) {
                return true
            }
            else {
                localStorage.removeItem('token');
                return false
                // remove token from local storage
              
            }
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





// var authenticationHelpers = {
//     getSalt() {
//         return crypto.randomBytes(16).toString('hex');
//     },
//     getAccessCode() {
//         return crypto.randomBytes(7).toString('hex');
//     },
//     /**
//      * 
//      * @param {*} salt 
//      * @param {*} password 
//      */
//     getHash(salt, password) {
//         return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
//     },
//     checkIfValidPass(user, password) {
//         var unvalidatedHash = authenticationHelpers.getHash(user.salt, password);
//         return unvalidatedHash === user.hash;
//     }
// }

module.exports = privateHelpers;