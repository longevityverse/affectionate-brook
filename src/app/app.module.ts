import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Correct the paths according to your actual folder structure
import { AppComponent } from './app.component';
import { AppVideoUploadComponent } from './components/app-video-upload.component';
import { AppTranscriptDisplayComponent } from './components/app-transcript-display.component';
import { AppChapterCustomizationComponent } from './components/app-chapter-customization.component';

import { VideoUploadService } from './services/video-upload.service';
import { TranscriptDisplayService } from './services/transcript-display.service';
import { ChapterCustomizationService } from './services/chapter-customization.service';

@NgModule({
  declarations: [
    AppComponent,
    AppVideoUploadComponent,
    AppTranscriptDisplayComponent,
    AppChapterCustomizationComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    VideoUploadService,
    TranscriptDisplayService,
    ChapterCustomizationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
