import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() mode: string;
  background_class: string;

  constructor() { }

  ngOnInit() {
    this.background_class = 'nav-background-' + this.mode;
  }

  showSwitchToHome(): boolean {
    return this.mode === 'admin'
  }
  
  showSwitchToAdmin(): boolean {
    return this.mode === 'home'
  }

}
