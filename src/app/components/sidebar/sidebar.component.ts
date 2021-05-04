import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/bydistricts', title: 'By Districts',  icon: 'place', class: '' },
    
   // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
   // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
   // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
   //{ path: '/upgrade', title: '',  icon:'./assets/img/TamilNadu_Logo.svg', class: '' },
  // { path: '/listhospitals', title: 'List Hospitals',  icon:'bed', class: '' },
   { path: '/listhospitals', title: 'By Hospitals',  icon:'local_hospital', class: '' },
   { path: '/category', title: 'Defaulters Hospitals',  icon:'bed', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
