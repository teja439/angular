import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calci';
  res=0;

  calculatorForm =new FormGroup({
     num1 : new FormControl(),
     num2 : new FormControl(),
  });

  add()
  {
    const val=this.calculatorForm.value;
   // console.log(val.num1);
    this.res=val.num1+val.num2;

  }
}
