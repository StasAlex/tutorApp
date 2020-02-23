import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, pluck } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  public users;
  constructor(private http: HttpClient) {
  }

  public getUsers() {
   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  public remove(name: string) {
    return (this.users = this.getUsers()
      .subscribe(users => console.log(users)));
  }

  public add(name) {
    return this.users.push(name);
  }
}
