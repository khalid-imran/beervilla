import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  toggleMenu(): void {
    $('.menu').toggleClass('active');
  }
  ngOnInit(): void {
  }

}
