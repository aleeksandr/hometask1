import { Injectable } from '@angular/core';
import {User} from '../../user';
import {log} from 'util';

@Injectable()
export class UserService {

  constructor() { }
  addUser(user): void {
    const userObj: User = {
      name: user.name,
      login: user.login,
      email: user.email,
      password: user.passwordGroup.password
    };
    localStorage.setItem(user.login, JSON.stringify(userObj));
    console.log('User ' + user.login + ' added');
  }
  removeUser(login): void {
    localStorage.removeItem(login);
    console.log('User ' + login +  ' removed');
  }
  clearAll(): void {
    localStorage.clear();
    console.log('Storage was cleared');
  }
}
