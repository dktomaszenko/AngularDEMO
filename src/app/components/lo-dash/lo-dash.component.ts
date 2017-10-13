import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lo-dash',
  templateUrl: './lo-dash.component.html',
  styleUrls: ['./lo-dash.component.css']
})
export class LoDashComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('lodash version:', _.VERSION);
  }

}
