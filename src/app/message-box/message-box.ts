import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-box',
  imports: [FormsModule],
  templateUrl: './message-box.html',
  styleUrl: './message-box.css',
})
export class MessageBox {
  message = '';
  color = 'blue';

  @Output() sendData = new EventEmitter<{ text: string; color: string }>();

  send() {
    this.sendData.emit({
      text: this.message,
      color: this.color,
    });
  }
}
