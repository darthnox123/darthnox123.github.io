import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class ContactService {
  private mailApi = 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send'

  constructor(protected httpClient: HttpClient) {  }

  async sendMessage(body?: any) :Promise<any> {
    return this.httpClient
    .post(this.mailApi, {
        "personalizations": [
            {
                "to": [
                    {
                        "email": environment.email
                    }
                ],
                "subject": body.subject
            }
        ],
        "from": {
            "email": body.email
        },
        "content": [
            {
                "type": "text/plain",
                "value": body.message
            }
        ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '0add6d5d09msh50759a72dae9376p10398djsn3f6f54881f75',
        'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
      }
    })
    .toPromise()
    .catch(err => {
      console.log(err)
      return err;
    });

  }
}
