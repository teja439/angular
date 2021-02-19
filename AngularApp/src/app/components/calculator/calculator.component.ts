import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
   public res='';
  constructor() {
     
   }

  ngOnInit(): void {
  }
  
   add()
  {
      console.log(this.res);
     
  }
  
}
