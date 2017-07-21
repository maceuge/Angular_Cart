import {Component, OnInit} from '@angular/core';
import {DribbleService} from './adribble.service';

@Component({
  selector: 'dribble-shots',
  templateUrl: './adribble.component.html',
  styleUrls: ['./adribble.component.css'],
  providers: [DribbleService],
})

export class DribbleComponent implements OnInit{

  shots = [];

  constructor (
    private _dribbleService: DribbleService,
  ) {}

  getShots () {
    this._dribbleService.getDribbleJson()
      .subscribe(shots => this.shots = shots);
  }


  ngOnInit () {
    this.getShots();
  }


}
