import { Component } from '@angular/core';
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

  constructor(private uploadService: VideoUploadService) {}

  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.videoFile = files[0];
    }
  }

  uploadVideo(): void {
    if (this.videoFile) {
      this.uploadService.uploadVideo(this.videoFile).subscribe(
        (progress) => (this.uploadProgress = progress),
        (error) => (this.error = 'Failed to upload video.'),
      );
    }
  }
}
