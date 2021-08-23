import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interpolation';

  // Created an object for Interpolating the values by accesing key e.g detail.name // detail.city
  detail = [{name: "sajid",city: "satara" },
            {name: "abhijit",city: "pune" },
            {name: "suraj",city: "chandrapur" }]

            //assigned a and b its values to perform arithmatic operations on these two numbers 
            //assigned to variables
            a= 89;
            b=45;
}
