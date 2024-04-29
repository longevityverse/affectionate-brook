import { Component, OnInit } from '@angular/core';
import { ChapterCustomizationService } from '../services/chapter-customization.service';

interface Chapter {
  title: string;
  startTime: number;
}

@Component({
  selector: 'app-chapter-customization',
  templateUrl: './app-chapter-customization.component.html',
  styleUrls: ['./app-chapter-customization.component.scss'],
})
export class AppChapterCustomizationComponent implements OnInit {
  videoId: string = '';
  chapters: Chapter[] = [];
  error: string = '';

  constructor(private chapterService: ChapterCustomizationService) {}

  ngOnInit(): void {
    // Assume videoId is retrieved from a source like route params
    this.videoId = '12345'; // Placeholder for actual video ID retrieval logic

    if (this.videoId) {
      this.loadChapters();
    }
  }

  loadChapters(): void {
    this.chapterService.getChapters(this.videoId).subscribe(
      (chapters) => {
        this.chapters = chapters;
        this.error = '';
      },
      (error) => {
        this.error = 'Failed to load chapters. Please try again.';
        console.error(error);
      },
    );
  }

  saveChapters(): void {
    this.chapterService.saveChapters(this.videoId, this.chapters).subscribe(
      () => {
        this.error = '';
        alert('Chapters saved successfully.');
      },
      (error) => {
        this.error = 'Failed to save chapters. Please try again.';
        console.error(error);
      },
    );
  }
}
