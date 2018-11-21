import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstName: String = 'John';
  lastName: String = 'Travolta';
  clicked: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  click () {
    if (this.clicked === false) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }
}
