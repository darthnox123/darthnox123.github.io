import { Component, OnInit } from '@angular/core';
import { EmojiService } from '@app/services';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.css'],
})
export class RainComponent implements OnInit {

  constructor(private emojiService: EmojiService) { }

  public myFavEmojis = [ ];

  public rain = Array.from({ length: 80 }, (v, k) => k + 1);
  public rainSpeed = [1,2,3];

  async ngOnInit(): Promise<void> {
    const data = await this.emojiService.getEmojis();

    if(!data) return;

    this.myFavEmojis = data;
   }

  getRainSpeed(){
    return this.rainSpeed[
      Math.floor(Math.random() * this.rainSpeed.length)
    ];
  }

  getThatRandomEmoji() {
    return this.myFavEmojis[
      Math.floor(Math.random() * this.myFavEmojis.length)
    ];
  }
}
