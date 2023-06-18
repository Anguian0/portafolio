import { Component, ElementRef } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-proyecto7',
  templateUrl: './proyecto7.component.html',
  styleUrls: ['./proyecto7.component.css']
})
export class Proyecto7Component {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const tiltElements = this.elRef.nativeElement.querySelectorAll('.movimiento');
    VanillaTilt.init(tiltElements, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
      reverse: true,
    });
  }
}
