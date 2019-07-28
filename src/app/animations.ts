import { trigger, style, animate, transition, state } from '@angular/animations';

export let fadeIn = trigger('fadeIn', [
    transition('void => *',[
      style({opacity:0, transform:'translateY(-30px)'}),
      animate(1500, style({transform: 'translateY(0px)', opacity: 1}))
      ])  
    ])

export let fadeUp = trigger('fadeUp', [
        state('intial', style({opacity:1, transform:'translateY(0px)'})),
        state('final', style({opacity:0, transform:'translateY(-30px)'})),
        transition('initial => final', animate('1200ms')),
    ])

    export let liked = trigger('liked', [
      transition('* => *', [
        style({opacity: 1, transform:'translateY(-30px)'}),
        animate(3500, style({opacity:0, transform:'translateY(-100px)'}))
      ])
  ])