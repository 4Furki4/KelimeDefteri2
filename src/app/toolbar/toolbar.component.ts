import { AfterContentInit, Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'KD-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {
  @Input() title$!: string | undefined | null;
  constructor(private router: ActivatedRoute) {
    console.log(this.title$)
  }
  ngOnInit(): void {
  }
}

