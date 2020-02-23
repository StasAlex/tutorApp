import {
  UserService
} from "./services/user.service";
import {
  Component,
  OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { interval } from 'rxjs';


@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  public color: string;
  public user = {
    name: "Stas",
    age: 40
  };
  public users;
  public toggleUserCard = true;

  public selectedUser;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  changeColor(backColor: string) {
    this.color = backColor;
  }

  showUserCard() {
    this.toggleUserCard = !this.toggleUserCard;
  }

  removeUser(name: string) {
    console.log(this.users);
    this.userService.remove(name);
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

  // Create an Observable that will publish a value on an interval

  addUser(name: string) {
    if (!name) {
      return;
    } else {
      this.userService.add({ name });
      this.users = this.userService.getUsers();
    }
  }
}

