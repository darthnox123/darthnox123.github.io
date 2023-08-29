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
      icon: 'fas fa-user',
      description: 'Born 10th December 1997',
    },
    {
      year: '2018',
      title: 'UAL',
      icon: 'fas fa-university',
      description: 'Finished College at Universidade Autónoma de Lisboa with 13',
    },
    {
      year: '2019-2020',
      title: 'Bee Engineering',
      icon: 'fas fa-plus',
      description: 'Finished College at Universidade Autónoma de Lisboa with 13',
    },
    {
      year: '2020.',
      title: 'KnowledgeWorks',
      icon: 'fas fa-plus',
      description: "Fullstack developer in a Human Resources management app (Frontend: Angular; Backend: Nodejs "+
      "and some modules of the project have a NestJS Framework; Database: MySQL; Git: Bitbucket); As a developer " +
      " I'm responsible for the development of features in major releases and also for bugfixing  I recently started " +
      "to work also as a mobile developer (Ionic) and I am responsible for the development, build and deploy of releases for android and IOS.",
    },
  ];

}
