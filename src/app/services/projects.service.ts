import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Octokit } from "octokit";
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class ProjectsService {
  constructor(protected httpClient: HttpClient) {  }
  public encryptSecretKey = "ola"

  async getProjects() :Promise<any> {

    const auth = this.decryptData(environment.github_token)

    const octokit = new Octokit({auth})

    const data = await octokit.request('GET /users/{username}/repos', {
      username: 'darthnox123'
    })

    return data.data;
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

  async getLanguages(url: any): Promise<any> {{
    const languageData = await this.httpClient
    .get(url)
    .toPromise()
    .catch(err => {
      console.log(err)
      return err;
    });

    return languageData;
  }}
}
