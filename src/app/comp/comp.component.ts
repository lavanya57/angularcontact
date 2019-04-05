import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  public name: string;
  public phone: number;
  public data: any;
  public  count: null;
  constructor( ) {

  }

  ngOnInit() {
  }
  get() {

    this.data = '\n' + this.name + '\n' + this.phone + '\n';
    console.log(this.count);
    this.count = this.count + this.data;
  }

}
