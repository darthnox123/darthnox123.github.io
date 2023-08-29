import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Octokit } from "octokit";
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CertificationsService {
  constructor(protected httpClient: HttpClient) {  }

  public encryptSecretKey = "ola"
  async getFiles(): Promise<any> {

    const auth = this.decryptData(environment.github_token)

    const octokit = new Octokit({auth})

    const data = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'darthnox123',
      repo: 'darthnox123.github.io',
      path: 'pdf_files',
      ref: 'master'
    }) as any

    return data.data;
  }

  encryptData(data :any) {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  decryptData(data: any) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);

      if (bytes.toString()) {
        return bytes.toString(CryptoJS.enc.Utf8);
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
