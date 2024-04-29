import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppVideoUploadComponent } from './components/app-video-upload/app-video-upload.component';
import { AppTranscriptDisplayComponent } from './components/app-transcript-display/app-transcript-display.component';
import { AppChapterCustomizationComponent } from './components/app-chapter-customization/app-chapter-customization.component';

import { VideoUploadService } from './services/video-upload.service';
import { TranscriptDisplayService } from './services/transcript-display.service';
import { ChapterCustomizationService } from './services/chapter-customization.service';

@NgModule({
  declarations: [
    AppComponent,
    AppVideoUploadComponent,
    AppTranscriptDisplayComponent,
    AppChapterCustomizationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    VideoUploadService,
    TranscriptDisplayService,
    ChapterCustomizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

