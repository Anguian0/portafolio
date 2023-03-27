import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'portafolio';

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
