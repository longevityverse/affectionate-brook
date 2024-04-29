import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Chapter {
  title: string;
  startTime: number;
  endTime?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ChapterCustomizationService {
  private apiUrl = '/api/chapters';

  constructor(private http: HttpClient) {}

  getChapters(videoId: string): Observable<Chapter[]> {
    const url = `${this.apiUrl}/${videoId}`;
    return this.http.get<Chapter[]>(url).pipe(catchError(this.handleError));
  }

  saveChapters(videoId: string, chapters: Chapter[]): Observable<void> {
    const url = `${this.apiUrl}/${videoId}`;
    return this.http
      .post<void>(url, chapters)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error,
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
