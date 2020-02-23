import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"]
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  @Output() userSelected: EventEmitter<any> = new EventEmitter();

  constructor() {
    // console.log('constructor:', this.user);
  }

  ngOnInit(): void {
    // console.log("ngOnInit:", this.user);
  }

  selectUser() {
    this.userSelected.emit();
  }
}
