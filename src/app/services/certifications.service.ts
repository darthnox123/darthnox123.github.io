import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Octokit } from "octokit";

@Injectable()
export class CertificationsService {
  constructor(protected httpClient: HttpClient) {  }

  async getFiles(): Promise<any> {
    const octokit = new Octokit()

    const data = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'darthnox123',
      repo: 'darthnox123.github.io',
      path: 'pdf_files',
      ref: 'master'
    }) as any

    return data.data;
  }
}
