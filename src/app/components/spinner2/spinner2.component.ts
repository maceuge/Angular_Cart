import { Component, OnInit } from '@angular/core';
import { LoaderService } from './spinner2.service';

@Component({
  selector: 'spinner-roll',
  templateUrl: './spinner2.component.html',
  styleUrls: ['./spinner2.component.css']
})

export class MySpinnerComponent implements OnInit {

  showLoader: boolean;

  constructor(
    private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
}
