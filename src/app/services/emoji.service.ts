import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmojiService {
  constructor(protected httpClient: HttpClient) {  }

  public url : string  = 'https://api.emojisworld.fr/v1/random';

  async getEmojis() :Promise<any> {
    const data = await this.httpClient
    .get(this.url)
    .toPromise()
    .catch(err => {
      console.log(err)
      return err;
    });

    return data.results.map((res:any) => res.emoji)
  }
}
