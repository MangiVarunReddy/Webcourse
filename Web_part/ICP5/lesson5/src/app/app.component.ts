import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson5';
  constructor() { }
  ngOnInit() {}
//initializing countDownDate with event date
  countDownDate = new Date("March 04, 2022 00:00:00").getTime();
  demo:any;
//logic for count down time displaying months, days, hours, minutes, seconds
    x = setInterval(() => {
      var now = new Date().getTime();
      var distance = this.countDownDate - now;
      var months= Math.floor(distance / (1000 * 60 * 60 * 24*30));
      var days= Math.floor(distance % (1000 * 60 * 60 * 24 *30)/(1000 * 60 * 60 *24));
      var hours= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds= Math.floor((distance % (1000 * 60)) / (1000));
      this.demo = months + "m | " + days + "d | " + hours + "h | " + minutes + "m | " + seconds + "s";
//if date is earlier than todays date, below code will run and displays expired
      if(distance<0){
        clearInterval(this.x);
        this.demo = "Expired";
      }
    })
}
