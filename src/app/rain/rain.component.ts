import { Component } from '@angular/core';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.css'],
})
export class RainComponent {
  public myFavEmojis = [
    '👟',
    '😀',
    '😀',
    '🐶',
    '⌚',
    '🍓',
    '🏀',
    '🔥',
    '⚡',
    '📱',
    '🍉',
    '🌋',
  ];

  public rain = Array.from({ length: 20 }, (v, k) => k + 1);
  public rainSpeed = [3,4,5];


  getRainSpeed(){
    console.log(this.rainSpeed)
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
