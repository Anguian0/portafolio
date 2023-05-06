import { Component, ElementRef } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrls: ['./proyecto1.component.css']
})
export class Proyecto1Component {
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
