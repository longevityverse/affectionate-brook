import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranscriptDisplayService {
  private apiUrl = '/api/transcripts';

  constructor(private http: HttpClient) {}

  getTranscript(videoId: string): Observable<string> {
    const url = `${this.apiUrl}/${videoId}`;
    return this.http
      .get<string>(url, { responseType: 'text' as 'json' })
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
