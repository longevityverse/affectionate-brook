import { Component, OnInit } from '@angular/core';
import { TranscriptDisplayService } from '../services/transcript-display.service';

@Component({
  selector: 'app-transcript-display',
  templateUrl: './app-transcript-display.component.html',
  styleUrls: ['./app-transcript-display.component.scss'],
})
export class AppTranscriptDisplayComponent implements OnInit {
  videoId: string = '';
  transcript: string = '';
  error: string = '';

  constructor(private transcriptService: TranscriptDisplayService) {}

  ngOnInit(): void {
    this.videoId = '12345'; // Example video ID
    this.loadTranscript();
  }

  loadTranscript(): void {
    this.transcriptService.getTranscript(this.videoId).subscribe(
      (transcript) => (this.transcript = transcript),
      (error) => (this.error = 'Failed to load transcript.'),
    );
  }
}
