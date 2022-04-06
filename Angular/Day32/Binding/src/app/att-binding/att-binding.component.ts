import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-att-binding',
  templateUrl: './att-binding.component.html',
  styleUrls: ['./att-binding.component.css']
})
export class AttBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colspanValue = 2;
  rowspanValue = 2;
}
