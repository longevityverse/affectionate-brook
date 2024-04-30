import { Component } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { VideoUploadService } from '../services/video-upload.service';

@Component({
  selector: 'app-video-upload',
  templateUrl: './app-video-upload.component.html',
  styleUrls: ['./app-video-upload.component.scss'],
})
export class AppVideoUploadComponent {
  videoFile: File | null = null;
  uploadProgress: number = 0;
  error: string = '';

  constructor(
    private uploadService: VideoUploadService,
    private http: HttpClient,
  ) {}

  onFileSelected(event: any): void {
    const element = event.target as HTMLInputElement;
    this.videoFile =
      element.files && element.files.length > 0 ? element.files[0] : null;
  }

  uploadVideo(): void {
    if (this.videoFile) {
      this.uploadService.uploadVideo(this.videoFile).subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress && event.total) {
            this.uploadProgress = Math.round(
              (100 * event.loaded) / event.total,
            );
          }
        },
        (error) => {
          this.error = 'Failed to upload video.';
          console.error(error);
        },
      );
    }
  }
}
