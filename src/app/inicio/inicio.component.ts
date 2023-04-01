import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {
    title = 'Inicio';
  
    ngAfterViewInit() {
      const sections = gsap.utils.toArray('.panel');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.containerr',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: '+=3500'
        }
      });
    }
  
  constructor() {
      gsap.registerPlugin(ScrollTrigger);
    }
  }
