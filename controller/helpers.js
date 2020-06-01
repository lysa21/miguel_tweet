const bcrypt = require ('bcryptjs');

const helpers = {}

helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const finalpassword = await bcrypt.hash(password, salt);
    return finalpassword;
};

helpers.loginPassword = async (password, savePassword) => {
    try {
        await bcrypt.compare(password, savePassword);
    }catch(e) {
        console.log(e);
    }
    
};

module.exports = helpers;