import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carName: string;
  carPrice: number;
  parameters: CH;

  constructor() { }
  ngOnInit(): void {
    this.carName = '';
    this.carPrice = 0;
    this.parameters = {
      mass: 0,
      length: 0,
      width: 0,
      height: 0,
      body: '-',
      clearance: 0,
    }
  }
  carSelect(carName) {
    if (carName == 'prado') {
      this.carName = 'LC PRADO';
      this.carPrice = 1869865;
      this.parameters = {
        mass: 2115,
        length: 4840,
        width: 1885,
        height: 1895,
        body: 'рамна',
        clearance: 215,
      }
    } if (carName == 'cruiser') {
      this.carName = 'LAND CRUISER';
      this.carPrice = 2983710;
      this.parameters = {
        mass: 2635,
        length: 4965,
        width: 1980,
        height: 1950,
        body: 'рамна',
        clearance: 220,
      }
    } if (carName == 'rav') {
      this.carName = 'RAV4';
      this.carPrice = 2983710;
      this.parameters = {
        mass: 1540,
        length: 4600,
        width: 1855,
        height: 1685,
        body: 'несуча',
        clearance: 195,
      }
    } if (carName == 'high') {
      this.carName = 'HIGHLANDER';
      this.carPrice = 2033180;
      this.parameters = {
        mass: 2090,
        length: 4966,
        width: 1930,
        height: 1755,
        body: 'несуча',
        clearance: 202,
      }
    }
  }
}

interface CH {
  mass: number,
  length: number,
  width: number,
  height: number,
  body: string,
  clearance: number,
}