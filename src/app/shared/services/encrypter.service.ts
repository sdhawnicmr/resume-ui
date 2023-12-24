import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncrypterService {

  encrypted: any = "";
  decrypted:any = "";
  secretkey:any = '0123456789abcdef';

  constructor() { }


  aesEncrypt(data:any) { // encrypt api request parameter with aes
    var key = CryptoJS.enc.Utf8.parse(this.secretkey);
    var encrypted = CryptoJS.AES.encrypt((data), key,
        {
            keySize: 16,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,

        });

    this.encrypted= encrypted.toString();
    return this.encrypted;
  }

  //The get method is use for decrypt the value.
  aesDecrypt(data:any){
    var key = CryptoJS.enc.Utf8.parse(this.secretkey);
    var decrypted = CryptoJS.AES.decrypt((data), key, {
        keySize: 16,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    this.decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    return this.decrypted;
  }
}
