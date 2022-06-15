import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Octokit } from "octokit";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectsService {
  constructor(protected httpClient: HttpClient) {  }

  async getProjects() :Promise<any> {
    const octokit = new Octokit({
      auth: environment.github_token
    })

    const data = await octokit.request('GET /users/{username}/repos', {
      username: 'darthnox123'
    })

    return data.data;
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
