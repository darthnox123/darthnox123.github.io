import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '@app/services';

@Component({
  selector: 'app-ideias',
  templateUrl: './ideias.component.html',
  styleUrls: ['./ideias.component.css']
})
export class IdeiasComponent implements OnInit {

  public projects: any[];

  constructor(private projectService: ProjectsService) { }

  async ngOnInit(): Promise<void> {
   const data = await this.projectService.getProjects();

   if(!data) return;

   this.projects = data;

   const promises = []
   for(let project of this.projects){
    promises.push(this.projectService.getLanguages(project.languages_url));
   }

   const langData = await Promise.all(promises);
   if(!langData) return;

   for (let index = 0; index < langData.length; index++) {
    this.projects[index].languages_array = Object.getOwnPropertyNames(langData[index])
   }
  }

  formatIcon(langs: string){
    if(langs == 'HTML') langs='html5'
    return langs.toLowerCase()+'-plain'
  }
}
