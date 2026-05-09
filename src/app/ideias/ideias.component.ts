import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '@app/services';

@Component({
  selector: 'app-ideias',
  standalone: false,
  templateUrl: './ideias.component.html',
  styleUrls: ['./ideias.component.css']
})
export class IdeiasComponent implements OnInit {

  public projects: any[] = [];

  constructor(private projectService: ProjectsService) { }

  async ngOnInit(): Promise<void> {
    const data = await this.projectService.getProjects();

    if (!data) return;

    this.projects = data.filter((p: any) => !p.fork && !p.archived);

    const promises = this.projects.map((p: any) =>
      this.projectService.getLanguages(p.languages_url)
    );

    const langData = await Promise.all(promises);
    if (!langData) return;

    for (let i = 0; i < langData.length; i++) {
      this.projects[i].languages_array = Object.getOwnPropertyNames(langData[i]);
    }
  }

  formatIcon(lang: string): string {
    if (lang === 'HTML') lang = 'html5';
    return lang.toLowerCase() + '-plain';
  }
}
