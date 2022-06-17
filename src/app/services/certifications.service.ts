import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Octokit } from "octokit";

@Injectable()
export class CertificationsService {
  constructor(protected httpClient: HttpClient) {  }

  async getFiles(): Promise<any> {
    const octokit = new Octokit({
      auth: environment.github_token
    })

    const data = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'darthnox123',
      repo: 'darthnox123.github.io',
      path: 'pdf_files',
      ref:'master'
    })

    return data.data;
  }
}
