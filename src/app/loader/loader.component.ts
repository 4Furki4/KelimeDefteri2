import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'KD-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent {
  constructor(public loader: LoaderService) { }
}
