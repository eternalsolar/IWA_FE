import { Component } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  faArrowAltCircleUp = faArrowAltCircleUp;
  collapsed = false;
  goToTop(){
    window.scrollTo(0,0);
  }
  toggleCollapsed(){
    this.collapsed = !this.collapsed;
  }
}
