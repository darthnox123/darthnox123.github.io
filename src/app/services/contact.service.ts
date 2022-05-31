import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
  private mailApi = 'https://mailthis.to/francisco__trindade@hotmail.com'

  constructor(protected httpClient: HttpClient) {  }

  sendMessage(input: any) {
    console.log(input)
    return this.httpClient.post(this.mailApi, input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }
}
