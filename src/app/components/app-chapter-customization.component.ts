import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chapter-customization',
  templateUrl: './app-chapter-customization.component.html',
  styleUrls: ['./app-chapter-customization.component.css'],
})
export class AppChapterCustomizationComponent implements OnInit {
  chapterForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      this.validateChapterTitle,
    ]),
    start_time: new FormControl('', [
      Validators.required,
      Validators.pattern(/^([0-9]{2}):([0-9]{2}):([0-9]{2})$/),
    ]),
    end_time: new FormControl('', [
      Validators.required,
      Validators.pattern(/^([0-9]{2}):([0-9]{2}):([0-9]{2})$/),
      this.validateStartEndTime.bind(this),
    ]),
    video_id: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_-]+$/),
    ]),
  });

  ngOnInit(): void {}

  submitForm(): void {
    if (this.chapterForm.valid) {
      console.log('Form is valid:', this.chapterForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  validateChapterTitle(control: FormControl): { [key: string]: any } | null {
    const allowedCharacters = /^[a-zA-Z0-9_ ]+$/;
    if (control.value && !allowedCharacters.test(control.value)) {
      return { validateChapterTitle: true };
    }
    return null;
  }

  validateStartEndTime(control: FormControl): { [key: string]: any } | null {
    const startTime = this.chapterForm.get('start_time')?.value;
    const endTime = control.value;
    if (startTime && endTime && endTime <= startTime) {
      return { invalidEndTime: true };
    }
    return null;
  }
}
