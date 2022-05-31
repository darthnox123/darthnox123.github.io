import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { RainComponent } from './rain/rain.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '@services';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToggleModeComponent } from './toggle-mode/toggle-mode.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { TimelineComponent } from './timeline/timeline.component';
import { IdeiasComponent } from './ideias/ideias.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SkillsComponent, RainComponent, ContactFormComponent, ToggleModeComponent, CertificationsComponent, TimelineComponent, IdeiasComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, FormsModule ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
