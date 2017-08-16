import { Component, OnInit } from '@angular/core';
import {NewRegisterService} from "./new-register.service";

declare var Materialize: any;

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css'],
  providers: [NewRegisterService]
})
export class NewRegisterComponent implements OnInit {

  user = [];
  name: string;
  email: string;
  pass: string;

  constructor( private _regService: NewRegisterService) {
  }

  register(name: string, email: string, pass: string) {

    this.user.push(
      {
        name: name,
        email: email,
        pass: pass,
      }
    );

    // console.log(this.user);

    this._regService.registerToDb(this.user)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );


    Materialize.updateTextFields();
  }

  ngOnInit() {
  }

}
