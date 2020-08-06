import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Breweries',
        routerLink: '/breweries'
      },
      {
        label: 'Pokemon Cards',
        routerLink: '/pokemon-cards'
      }
    ];
  }
}
