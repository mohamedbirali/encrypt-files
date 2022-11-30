import fs from 'fs';
import { key_enc } from './config';
import { AES, enc } from 'crypto-js';

// fs.readFile( file_name, encoding, callback_function )
const originFileText = './origin-text/passwords.txt';
const newFileEncrypted = './encrypted-AES/passwords-aes.txt';
const newFileDecrypted = './encrypted-AES/decrypted.txt';

// encrypt
fs.readFile(originFileText, (err: any, data) =>{
    if(err) console.error(err);
    console.log(data.toString());

    // write file
    const dataEncrypted = AES.encrypt(data.toString(), key_enc).toString();

    console.log(`\n\ncheck if encrypted : \n ${dataEncrypted}`);    

    fs.writeFile(newFileEncrypted, dataEncrypted, (err)=> {
        if(err) console.error(err);    
    });

    console.log(`\n\ncheck if decrypted : \n ${AES.decrypt(dataEncrypted, key_enc).toString(enc.Utf8)}`);    
});

// decrypt
fs.readFile(newFileEncrypted, (err: any, data) =>{
    if(err) console.error(err);
    console.log(data.toString());

    // write file
    const datDecrypted = AES.decrypt(data.toString(), key_enc).toString(enc.Utf8);

    console.log(`\n\ncheck if decrypted : \n ${datDecrypted}`);    

    fs.writeFile(newFileDecrypted, datDecrypted, (err)=> {
        if(err) console.error(err);    
    });

    console.log(`\n\ncheck if encrypted : \n ${AES.encrypt(datDecrypted, key_enc).toString()}`);    
});

