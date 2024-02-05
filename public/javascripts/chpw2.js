
        var crypto = require('crypto');
        const util = require('util');

exports.checklic=async(req,res,next) =>{
    try {
        console.log("loading checklic");
        
        
        const a1f20000passw="pbkdf2:sha256:260000$VDzddJNX7PeWPkpY$91bd426a799580bb9ea5175f039b96ee75e6f076c8d12b871623fbb7726f857b"
        var EXAMPLE_PYTHON_PASSWORD = 'pbkdf2:sha256:50000$GPJFgPGqrbYqxiM1DITq919diw3sRb5k$970485eef0aa61bf39dba3468b913ada19937eec00fec74b3077a7aec905f9c9'
        const pbkdf2 = util.promisify(crypto.pbkdf2)

        

        EXAMPLE_PYTHON_PASSWORD=a1f20000passw;

        const checkPasswordHash = async (hashedPassword, clearTextPassword) => {
            const pieces = hashedPassword.split(/:|\$/);
            const digest = pieces[1];
            const iterations = parseInt(pieces[2]);
            const salt = pieces[3];
            const hash = pieces[4];
            const decodedHash = Buffer.from(hash, 'hex');
            const keylen = decodedHash.length;
            const hashedClearTextPassword = await pbkdf2(clearTextPassword, salt, iterations, keylen, digest);
            const encodedClearTextPassword = hashedClearTextPassword.toString('hex');
            return encodedClearTextPassword === hash;
        }
        return matches2 = await checkPasswordHash(EXAMPLE_PYTHON_PASSWORD, '20000x')
            console.log({ matches2 })
        }

      
       
        
        
     catch (error){console.log(error)}
};