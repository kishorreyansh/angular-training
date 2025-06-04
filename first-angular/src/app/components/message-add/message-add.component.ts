import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-add',
  imports: [],
  templateUrl: './message-add.component.html',
  styleUrl: './message-add.component.css'
})
export class MessageAddComponent {

  constructor(private messageService: MessageService) { }
  sendMessage(message: string) {
    this.messageService.sendMessage(message)
  }

  clearMessage() {
    this.messageService.clearMessages();
  }
}
