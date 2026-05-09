import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  public categories: SkillCategory[] = [
    {
      label: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'angularjs-plain' },
        { name: 'Vue.js', icon: 'vuejs-plain' },
        { name: 'TypeScript', icon: 'typescript-plain' },
        { name: 'JavaScript', icon: 'javascript-plain' },
        { name: 'HTML5', icon: 'html5-plain' },
        { name: 'CSS3', icon: 'css3-plain' },
        { name: 'Ionic', icon: 'ionic-original' },
        { name: 'Bootstrap', icon: 'bootstrap-plain' },
      ]
    },
    {
      label: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'nodejs-plain' },
        { name: 'NestJS', icon: 'nestjs-plain' },
        { name: 'Laravel', icon: 'laravel-plain' },
        { name: 'Python', icon: 'python-plain' },
      ]
    },
    {
      label: 'Database & DevOps',
      skills: [
        { name: 'MySQL', icon: 'mysql-plain' },
        { name: 'Docker', icon: 'docker-plain' },
        { name: 'Git', icon: 'git-plain' },
        { name: 'Jupyter', icon: 'jupyter-plain' },
      ]
    },
    {
      label: 'Testing & AI',
      skills: [
        { name: 'Playwright' },
        { name: 'Selenium' },
        { name: 'Scikit-learn' },
        { name: 'LLM APIs' },
        { name: 'Tailwind CSS' },
        { name: 'PWA' },
      ]
    },
  ];
}
