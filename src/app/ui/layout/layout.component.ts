import { Component, Input } from '@angular/core';

@Component({
  selector: 'KD-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
  @Input() title!: string;
}
