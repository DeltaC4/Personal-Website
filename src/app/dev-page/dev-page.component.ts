import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dev-page',
  standalone: false,
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.css']
})
export class DevPageComponent implements OnInit {

  @Output() onChildEvent: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.onChildEvent.emit('child component initialized');
  }

}
