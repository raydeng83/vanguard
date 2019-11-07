import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from 'ngx-gallery';
import { ParticlesModule } from 'angular-particle';
import { ngfModule } from "angular-file"
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ImageUpdateComponent } from './components/image-update/image-update.component';
import { ImageService } from './services/image.service';
import { PersonalComponent } from './components/personal/personal.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { HelperService } from './services/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProfileComponent,
    ImageUpdateComponent,
    PersonalComponent,
    ParticlesComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    HttpClientModule,
    FormsModule,
    ngfModule,
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
