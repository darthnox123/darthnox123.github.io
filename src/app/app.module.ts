import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { TimelineComponent } from './timeline/timeline.component';
import { IdeiasComponent } from './ideias/ideias.component';
import { FeaturedComponent } from './featured/featured';
import { ProjectsService } from '@services';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SkillsComponent, TimelineComponent, IdeiasComponent, FeaturedComponent],
  imports: [BrowserModule],
  providers: [ProjectsService, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
