import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranscriptDisplayService } from '../services/transcript-display.service';

@Component({
  selector: 'app-transcript-display',
  templateUrl: './app-transcript-display.component.html',
  styleUrls: ['./app-transcript-display.component.scss'],
})
export class AppTranscriptDisplayComponent implements OnInit {
  transcript = '';
  videoId: string = '';
  error: string = '';

  constructor(
    private transcriptDisplayService: TranscriptDisplayService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Check if the video ID is available in the route parameters
    this.route.params.subscribe((params: Params) => {
      this.videoId = params['videoId'];
      if (this.videoId) {
        // If the video ID is present, automatically fetch the transcript
        this.displayTranscript();
      }
    });
  }

  displayTranscript(): void {
    if (!this.videoId) {
      this.error = 'Video ID is required';
      return;
    }

    this.transcriptDisplayService.getTranscript(this.videoId).subscribe(
      (res) => {
        this.transcript = res;
        this.error = '';
      },
      (error) => {
        this.error = error.message;
      },
    );
  }
}
