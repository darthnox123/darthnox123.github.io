import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {


  publicTimeline = [
    {
      year: '1997',
      title: 'Born',
      icon: 'fas fa-plus',
      stack: null,
    },
    {
      year: '2015-2018',
      title: 'UAL',
      icon: 'fas fa-plus',
      stack: null,
    },
    {
      year: '2019-2020',
      title: 'Bee Engineering',
      icon: 'fas fa-plus',
      stack: null,
    },
    {
      year: '2020-....',
      title: 'KnowledgeWorks',
      icon: 'fas fa-plus',
      stack: null,
    },
  ];

}
