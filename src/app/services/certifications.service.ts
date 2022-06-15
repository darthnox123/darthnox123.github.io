import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Octokit } from "octokit";
import { environment } from '../../environments/environment';

@Injectable()
export class CertificationsService {
  constructor(protected httpClient: HttpClient) {  }

  public url : string  = 'https://api.emojisworld.fr/v1/random';

  async getFiles(): Promise<any> {
    const octokit = new Octokit({
      auth: environment.github_token
    })

    const data = await octokit.request('GET /users/{username}/repos', {
      username: 'darthnox123'
    })

    return data.data;
  }
}
