import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

import { HomeHeaderComponent } from '../components/home/header/home-header.component';
import { HomeWorkComponent } from '../components/home/work/home-work.component';
import { HomeSkillComponent } from '../components/home/skills/home-skills.component.tss/home-skills.component';
import { HomeExtraComponent } from '../components/home/extras/home-extra.component';
import { HomeEducationComponent } from '../components/home/education/home-education.component';

import { AppRoutes } from './app.routes';

import { AboutMission } from '../components/about/mission/about-mission.component';
import { AboutStory } from '../components/about/story/about-story.component';
import { AboutHobbies } from '../components/about/hobbies/hobbies.component';
import {CommonService} from '../services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    //Home Section
    HomeComponent,
    HomeHeaderComponent,
    HomeWorkComponent,
    HomeSkillComponent,
    HomeExtraComponent,
    HomeEducationComponent,

    //About Section 
    AboutComponent,
    AboutMission,
    AboutStory,
    AboutHobbies,

  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
