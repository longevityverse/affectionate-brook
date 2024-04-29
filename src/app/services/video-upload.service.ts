import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoUploadService {
  private apiUrl = 'http://localhost:3000'; // Your API URL

  constructor(private http: HttpClient) {}

  uploadVideo(videoFile: File) {
    const formData = new FormData();
    formData.append('video', videoFile);
    return this.http.post(`${this.apiUrl}/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
