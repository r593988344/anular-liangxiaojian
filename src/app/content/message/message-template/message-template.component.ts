import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-template',
  templateUrl: './message-template.component.html',
  styleUrls: ['./message-template.component.scss']
})
export class MessageTemplateComponent implements OnInit {
  private messageTemplate: Array<MessageTemplate>;
  constructor() { }

  ngOnInit() {
    this.messageTemplate = [
      new MessageTemplate('签名1', '类型1', '112233', '2019-04-30 11:44:05'),
      new MessageTemplate('签名2', '类型2', '112233', '2019-04-30 11:44:05'),
      new MessageTemplate('签名3', '类型3', '112233', '2019-04-30 11:44:05'),
      new MessageTemplate('签名4', '类型4', '112233', '2019-04-30 11:44:05'),
      new MessageTemplate('签名5', '类型5', '112233', '2019-04-30 11:44:05'),
    ];
  }

}

export class MessageTemplate {
  constructor(
    public signature: string,
    public templateType: string,
    public templateContent: string,
    public createTime: string
  ) {
  }
}
