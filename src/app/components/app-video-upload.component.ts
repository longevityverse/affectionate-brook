import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable, fromEvent, Subject } from 'rxjs';
import { debounceTime, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-video-upload',
  templateUrl: './app-video-upload.component.html',
  styleUrls: ['./app-video-upload.component.scss'],
})
export class AppVideoUploadComponent implements OnInit {
  @ViewChild('videoInput') videoInput: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;
  uploadProgress: number = 0;
  error: string = '';
  videoId: string = '';

  constructor(
    private http: HttpClient,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    // Implement any initialization logic here
  }

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('video', file);

      this.http
        .post('/api/videos', formData, {
          observe: 'events',
          reportProgress: true,
        })
        .subscribe(
          (event) => {
            if (event.type === HttpEventType.UploadProgress) {
              const progress = Math.round((event.loaded / event.total) * 100);
              this.uploadProgress = progress;
              this.changeDetectorRef.detectChanges();
            } else if (event.type === HttpEventType.Response) {
              this.videoId = event.body.videoId;
              this.error = '';
              this.changeDetectorRef.detectChanges();
            }
          },
          (error) => {
            this.uploadProgress = 0;
            this.error = error.message;
            this.changeDetectorRef.detectChanges();
          },
        );
    }
  }

  generateChapters() {
    this.http.post(`/api/videos/${this.videoId}/chapters`, {}).subscribe(
      (response: any) => {
        // Handle the response containing the generated chapters
        console.log('Generated Chapters:', response.chapters);
      },
      (error) => {
        this.error = error.message;
        this.changeDetectorRef.detectChanges();
      },
    );
  }
}
