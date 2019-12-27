import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface User {
  email: string,
  password: string
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}

