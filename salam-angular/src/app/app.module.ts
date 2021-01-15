import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubComponent } from './github-api/github-api.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path: "posts", 
    component: PostsComponent
  },
  {
    path: "followers", 
    component: GithubComponent
  },
  {
    path: "followers/:username", 
    component: ProfileFollowerComponent
  },
  {
    path: "", 
    component: HomeComponent
  },
  {
    path: "**", 
    component: PageNotFoundComponent
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    ReactiveFormComponent,
    PostsComponent,
    GithubComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
