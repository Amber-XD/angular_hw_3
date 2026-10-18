import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { WordList } from './word-list/word-list';
import { MessageBox } from './message-box/message-box';

@Component({
  selector: 'app-root',
  imports: [NgClass, WordList, MessageBox],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selected = 'B';

  fontSize = 20;

  orders = [
    { id: 1, name: 'Ноутбук', status: 'Виконано' },
    { id: 2, name: 'Навушники', status: 'В обробці' },
    { id: 3, name: 'Мишка', status: 'Скасовано' },
  ];

  words = ['Green Day', 'Dookie', 'Linkin Park', 'Meteora'];

  message = '';
  buttonColor = 'blue';

  receiveData(data: { text: string; color: string }) {
    this.message = data.text;
    this.buttonColor = data.color;
  }
}
