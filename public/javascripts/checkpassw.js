
console.log("lkklppp");
var crypto = require('crypto');
const util = require('util');
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

  const generatePasswordHash = async (password) => {
    const saltLength = 16; // Translates to a length of 32 when hex encoded
    const salt = crypto.randomBytes(saltLength).toString('hex');
    const iterations = 50000;
    const keylen = 32; // Translates to a length of 64 when hex encoded
    const digest = 'sha256'
    const hash = await pbkdf2(password, salt, iterations, keylen, digest);
    const encodedHash = hash.toString('hex');
    return `pbkdf2:${digest}:${iterations}$${salt}$${encodedHash}`
  }

  const main = async () => {
    const hash = await generatePasswordHash('mypassword')
    console.log({ hash });
  
    const matches1 = await checkPasswordHash(hash, 'mypassword')
    console.log({ matches1 })
  
    const matches2 = await checkPasswordHash(EXAMPLE_PYTHON_PASSWORD, 20000)
    console.log({ matches2 })
  }

  const chpass = async () => {
  
  

  
    const matches2 = await checkPasswordHash(EXAMPLE_PYTHON_PASSWORD, '20000')
    console.log({ matches2 })
  }

  
  chpass();

