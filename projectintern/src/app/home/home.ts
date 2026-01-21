import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  constructor() {}

  // Called when "View Jobs" button is clicked
  showJobsList() {
    alert('View Jobs clicked!'); 
    // Later you can connect this to Navbar to actually show jobs
  }

  // Called when "About Us" button is clicked
  showAbout() {
    alert('JobPortal helps you find remote jobs quickly and easily!');
  }
}
