import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations:[
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)
  ]
})
export class MenuComponent {

  sectionArr : string[] = ["Angular", "C#", "SQL", "IOS", "Vietnam", "Odense", "Familie", "Games","Random"];

  constructor(private router : Router, @Inject(DOCUMENT) document) {}

  @HostListener('window:scroll', ['$event'])
  
  public onWindowScroll(event){
    let menuElement = document.getElementById('navbar');
    let logoElement = document.getElementById('piglet');

    if (window.pageYOffset >= 400){
      menuElement.classList.add('main-container-shrink')
      menuElement.classList.remove('main-container')

      logoElement.classList.add('logo-shrink')
      logoElement.classList.remove('logo')
    }
    else{
      menuElement.classList.remove('main-container-shrink')
      menuElement.classList.add('main-container')

      
      logoElement.classList.remove('logo-shrink')
      logoElement.classList.add('logo')
    }
  }
}
