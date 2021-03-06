import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule} from '@angular/forms';


import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';
import { SujetService} from './../app/services/sujet.service';

import {ToastrModule} from 'ngx-toastr';
import { NouveauSujetComponent } from './nouveau-sujet/nouveau-sujet.component';
import { ListeSujetsComponent } from './liste-sujets/liste-sujets.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackService } from './services/feedback.service';
import { CommentsComponent } from './comments/comments.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AnnonceService } from './services/annonce.service';
import { TestuploadComponent } from './testupload/testupload.component';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    NouveauSujetComponent,
    ListeSujetsComponent,
    FeedbackListComponent,
    CommentsComponent,
    ResetPassComponent,
    AnnoncesComponent,
    TestuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    AngularFireStorageModule
  ],
  providers: [AuthService , SujetService , FeedbackService , AnnonceService],
  bootstrap: [AppComponent]
})
export class AppModule { }