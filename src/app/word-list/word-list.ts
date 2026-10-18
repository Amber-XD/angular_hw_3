import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-list',
  imports: [],
  templateUrl: './word-list.html',
  styleUrl: './word-list.css',
})
export class WordList {
  @Input() words: string[] = [];
}
