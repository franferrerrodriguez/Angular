import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() type:string;
  @Input() title:string;
  @Input() messages:string[];

  constructor() { }

  ngOnInit() {
    console.log(this.type);
  }

}
