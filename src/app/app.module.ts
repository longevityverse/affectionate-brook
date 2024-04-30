import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

import { AppComponent } from './app.component';
import { AppVideoUploadComponent } from './components/app-video-upload.component';
import { VideoUploadService } from './services/video-upload.service';

@NgModule({
  declarations: [AppComponent, AppVideoUploadComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Include FormsModule in your AppModule imports
  ],
  providers: [VideoUploadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
