import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ImageUpdateComponent } from './components/image-update/image-update.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {ImageService} from './services/image.service';
import {HelperService} from './services/helper.service';
import {NgxGalleryModule} from 'ngx-gallery-9';
import {FileUploadModule} from 'ng2-file-upload';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import {ParticlesModule} from 'ngx-particle';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageUpdateComponent,
    NavBarComponent,
    ParticlesComponent,
    PersonalComponent,
    ProfileComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule,
    AngularFileUploaderModule,
    ParticlesModule
  ],
  providers: [
    UserService,
    ImageService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
