import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'event-button',
  templateUrl: './event-button.component.html',
  styleUrls: ['./event-button.component.less']
})
export class EventButtonComponent implements OnInit {

  @Output() eventSender = new EventEmitter<string>();
  @Input() buttonText : string;

  constructor() { }

  ngOnInit() {

  }

  sendEvent = () => this.eventSender.emit(this.buttonText);

}
