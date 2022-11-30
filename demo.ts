import { AES, enc } from 'crypto-js';

const key = 'myKey' // should be hidden

// encrypt
const encrypted = AES.encrypt('H_l_l_O', key).toString();

// dycrypt
const bytes = AES.decrypt(encrypted, key);
const originalText = bytes.toString(enc.Utf8);

// test
console.log(`after encrytion: ${encrypted}`);
console.log(`before encrytion: ${originalText}`);