import { HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomHttpService } from 'src/app/services/common/custom-http.service';
const GITHUB_ICON = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="96px" height="96px"><path fill="#673AB7" d="M346.4,231.4c-3.2-7.2-6.5-14.5-6.5-22.6c0-6.8,3.1-12.4,3.8-18.9c0.3-2.6,0.2-4.3-2.6-5c-2.8-0.6-5.4-0.5-8.1,0.4c-5.3,1.7-11.4,5.1-15,9.7c-0.2,3.5-4.1,6.8-7.7,4c-12.7-9.8-31.6-10.1-46.9-9.5c-14.4,0.6-29.8,2.3-43.5,7c-0.8,0.3-1.7,0.4-2.4,0.3c-1.2,0-2.5-0.5-3.6-1.5c-3.8-3.7-7.7-7.3-11.9-10.5c-4.4-3.3-10.1-7.8-15.8-8.1c-11.2-0.6-4.1,19.8-1.5,28.9c2.1,1.4,3.2,4.2,1.5,6.9c-4.8,7.2-13.5,12.8-16.5,21.2c-2.9,8.2-2.6,16.7-0.6,25.1c1.7,7.6,4.7,14.4,9.5,20.6c3.7,4.8,9.9,12.6,16.9,11.3c1.5-0.3,2.8,0.1,3.8,0.8c12.8,1.9,23.3,12,26.3,24.6c3.4,14.6-4.9,27.3-18.8,32.1c-14.6,5.1-28.1,0.4-35-13.4c-2.3-4.5-3.6-9.8-6.5-14c-1.9-2.7-4.3-3.8-7.1-4c2.2,10.8,1,22.9,9.4,31.1c9.5,9.2,22.5,7,34.5,8c9,0.8,15.6,5.7,13.8,15.5c-1.1,6.2-3.6,12.3-5.7,18.3c-2.1,6.1-2.5,11.3-2.6,17.5c1.5,0.2,3.1,0.5,4.6,0.7c29.4,3.7,59.2-1.1,86.4-12.5c-0.6-1.5-0.6-3.3,0.7-5c1.8-2.4,1.7-6.5,1.6-9.3c-0.2-4.8-0.9-9.7-2.1-14.4c-1.9-7.8-4.1-16.4-8.6-23.1c-5.3-8-12.9-15.6-14.2-25.5c-1.1-8.4,3.4-21.5,13.1-22.4c1.2-0.1,2.3,0.2,3.1,0.7c9.4-1.2,19-2.8,27.9-6.1c8.5-3.2,15.4-7.6,21.7-14.1c5.4-5.6,9.9-12.6,10.4-20.5C352.7,246.9,349.9,239.1,346.4,231.4z"/><path fill="#D6E5E5" d="M405.9,222.7c-11-49-51-88.4-98.4-103.1c-22.4-6.9-46.3-9.3-69.4-5.1c-20.5,3.7-39.1,12.9-56.4,24.3c-18.5,12.3-36.1,27-49.3,45.1c-9.3,12.8-16.7,28.3-16.2,44.2c0,0.1-0.1,0.3-0.1,0.4c-0.3,5.6-0.9,11.1-1.4,16.7c-0.5,0.2-0.9,0.3-1.4,0.4c-0.6,6.6-1.6,13.3-1.8,20c-0.2,7-0.2,14,0.2,21.1c0.7,13.8,2.5,27.6,6.2,40.9c5.6,19.8,15,38.9,30.3,53c13.9,12.8,31.1,20.6,49.2,24.7v-0.7c0-0.2,0-0.5,0-0.7c0.1-4.9,0.5-9.5,2.2-14.5c2-6.2,4.8-12.5,6-18.9c0.6-3.4,0.6-3.9-2.8-4.4c-5.1-0.7-10.4-0.3-15.6-0.6c-6.1-0.4-12.4-1.3-17.9-4c-5.6-2.8-9.3-6.6-13.1-11.5c-8-10.4-5-24-9.6-35.6c-0.9-2.3,0.5-5.8,3.1-6.4c10.1-2.3,19.6-0.4,24.7,9.4c3.9,7.3,6,18.8,14.6,22.2c11,4.3,27.8-4.4,27-17.2c-0.7-11.3-9.4-20.2-20.6-21.3c-0.5,0-0.9-0.1-1.3-0.3c-8.4,0.2-15.8-5.7-21.1-12c-6-7.1-10.6-15.1-13-24.1c-2.8-10.6-3.7-21.3-0.7-31.9c2.7-9.5,10.3-15.4,16.1-22.7c-1.4-9.1-5.8-17.7-5.5-27.1c0.2-7.2,5.3-15.5,13.1-16.2c13.8-1.2,26.4,10.2,36,19.6c14.9-4.6,30.9-6.5,46.4-6.9c14.9-0.4,32.3,0.4,45.7,8c4.8-5.5,12.1-9.5,18.8-11.7c7-2.3,16.7-2.1,21.5,4.3c4.6,6,1.7,14.3-0.3,20.7c-2.9,9.4,0.4,17.7,4.3,26.2c4.1,9.1,7.7,19.1,6.7,29.3c-1,9.3-5,17.4-11.1,24.4c-6.9,7.9-15.1,14.2-25,17.9c-11.2,4.2-22.8,6.5-34.6,7.9c-0.9,0.1-1.7,0-2.4-0.2c-1,1.2-2.4,3.9-2.7,4.9c-0.7,2-0.8,4.1-0.4,6.2c0.9,4.6,3.9,8.8,6.6,12.5c4.8,6.6,9,12.9,11.8,20.7c3,8.4,5.4,17.4,6.2,26.3c0.4,4.4,0.5,9-0.6,13.3c15.7-7.8,30.2-17.9,43-29.8C390.2,325.7,417.6,274.8,405.9,222.7z"/><path fill="#D6E5E5" d="M477.2,172.1c-21.3-43.4-61.6-77.5-104.2-99C330.3,51.4,280.8,40,232.9,47.6C154,60,77.6,117.9,55,195.5c0,0.9-0.2,1.7-0.7,2.6c-0.4,1.4-0.8,2.9-1.1,4.3c-0.5,1-1,2-1.4,3.1c-0.1,0.9-0.3,1.9-0.4,2.7c-0.9,4.1-2,8.2-2.7,12.3c-1.4,7.7-1.1,15.7-3.8,23c-0.2,2.1-0.5,4.2-0.8,6.3c0,0.3,0,0.5,0,0.7c-0.5,4.4-0.9,8.8-1.3,13.2c-0.8,9.2-1.2,18.4-1.1,27.6c0.3,18.1,2.4,36.2,6.9,53.7c8.7,33.3,25.5,64.8,52,87.3c18.2,15.5,39.5,25.7,62.4,32.3c25,7.3,51,11.4,77.1,11.5c51.5,0.1,103.2-13.9,145.6-43.7C464.1,377.2,523.2,265.6,477.2,172.1z M248.3,418.3c-46.2,4.2-96.9-9.2-123.2-50.1c-11.4-17.7-18-38.1-21.1-58.8c-1.6-10.8-2.5-21.7-2.5-32.6c0-5.7,0.1-11.4,0.4-17.1c0.4-6.3,1.6-12.5,1.8-18.7c0.1-2.4,1.6-4.1,3.5-4.8c-3.5-21.2,5.1-41.9,17.8-59c15-20.3,35.2-37,56.6-50.2c17.7-10.9,36.5-19.5,57.2-22.8c23-3.7,47.1-1.8,69.4,5.1c46.6,14.5,88.1,49.6,103.6,96.9C445.4,308.6,346.2,409.4,248.3,418.3z"/><path d="M228,38.3c-8.6,1.5-17.1,3.5-25.5,5.9h124.2C294.6,35.3,260.8,32.6,228,38.3z"/><path d="M476.9,151.2c-25.2-40.4-65.9-71.6-108.7-91.6c-13.4-6.2-27.3-11.4-41.6-15.4H202.5C130.4,65.3,65.6,121.4,45.1,193.9c-3.3,5.5-3.8,13.1-5.2,19.2c-1,4.3-1.7,8.7-2.3,13.1c-0.1,0.4-0.1,0.9-0.2,1.3c-0.1,0.3-0.2,0.5-0.2,0.8c-0.8,4.2-1.5,8.4-2.1,12.6c0,0.1-0.1,0.1-0.1,0.2c-0.5,1.2-0.6,2.3-0.4,3.2c-1,8.1-1.7,16.2-2.3,24.3c-0.8,11.4-0.9,22.9-0.3,34.3c1.3,22.3,5.6,44.5,13.3,65.5c15.3,41.8,45.5,76.5,86.1,95.3c23.1,10.6,48.8,16.7,73.9,20c25.5,3.3,51.5,3.1,77-0.6c50.9-7.4,98.5-29.7,136.1-64.8c36.4-33.9,65-77.6,78.1-125.8C509.7,244.6,503.4,193.6,476.9,151.2z M385.6,432.5c-42.4,29.8-94.1,43.8-145.6,43.7C214,476.1,188,472,163,464.7c-22.9-6.7-44.2-16.8-62.4-32.3c-26.5-22.5-43.3-54-52-87.3c-4.6-17.5-6.6-35.6-6.9-53.7c-0.2-9.2,0.2-18.4,1.1-27.6c0.4-4.4,0.8-8.8,1.3-13.2c0-0.2,0-0.5,0-0.7c0.3-2.1,0.6-4.2,0.8-6.3c2.7-7.3,2.4-15.4,3.8-23c0.8-4.1,1.8-8.2,2.7-12.3c0.2-0.8,0.3-1.7,0.4-2.7c0.4-1,0.9-2.1,1.4-3.1c0.4-1.4,0.7-2.9,1.1-4.3c0.5-0.9,0.8-1.8,0.7-2.6C77.6,117.9,154,60,232.9,47.6c47.9-7.6,97.3,3.8,140.1,25.5c42.6,21.5,82.8,55.7,104.2,99C523.2,265.6,464.1,377.2,385.6,432.5z"/><path fill="#010101" d="M411.7,206.3c-15.6-47.3-57-82.4-103.6-96.9c-22.3-6.9-46.3-8.8-69.4-5.1c-20.7,3.3-39.5,11.8-57.2,22.8c-21.4,13.2-41.5,30-56.6,50.2c-12.7,17.1-21.3,37.8-17.8,59c-1.8,0.7-3.4,2.3-3.5,4.8c-0.2,6.2-1.5,12.5-1.8,18.7c-0.3,5.7-0.4,11.4-0.4,17.1c0.1,10.9,0.9,21.8,2.5,32.6c3.1,20.7,9.7,41.1,21.1,58.8c26.3,40.8,77,54.2,123.2,50.1C346.2,409.4,445.4,308.6,411.7,206.3z M299.2,390.3c-1.3,1.7-1.3,3.5-0.7,5c-27.2,11.4-57,16.2-86.4,12.5c-1.5-0.2-3.1-0.4-4.6-0.7c0.1-6.2,0.5-11.4,2.6-17.5c2-6,4.5-12.1,5.7-18.3c1.8-9.8-4.9-14.7-13.8-15.5c-12.1-1-25,1.1-34.5-8c-8.5-8.1-7.2-20.3-9.4-31.1c2.8,0.1,5.2,1.2,7.1,4c2.9,4.2,4.3,9.4,6.5,14c6.9,13.9,20.4,18.5,35,13.4c13.8-4.8,22.2-17.5,18.8-32.1c-3-12.6-13.5-22.7-26.3-24.6c-1-0.7-2.2-1.1-3.8-0.8c-7,1.3-13.1-6.5-16.9-11.3c-4.8-6.2-7.7-13-9.5-20.6c-1.9-8.4-2.3-16.9,0.6-25.1c3-8.4,11.7-13.9,16.5-21.2c1.8-2.7,0.6-5.5-1.5-6.9c-2.6-9.2-9.7-29.5,1.5-28.9c5.8,0.3,11.5,4.8,15.8,8.1c4.2,3.2,8.2,6.8,11.9,10.5c1.1,1.1,2.3,1.5,3.6,1.5c0.8,0.1,1.6,0,2.4-0.3c13.7-4.7,29.1-6.5,43.5-7c15.3-0.6,34.2-0.3,46.9,9.5c3.6,2.8,7.5-0.5,7.7-4c3.6-4.6,9.6-8,15-9.7c2.8-0.9,5.3-1,8.1-0.4c2.9,0.6,2.9,2.4,2.6,5c-0.7,6.5-3.8,12.1-3.8,18.9c0,8,3.2,15.4,6.5,22.6c3.5,7.7,6.3,15.6,5.7,24.1c-0.5,8-5,14.9-10.4,20.5c-6.3,6.5-13.2,11-21.7,14.1c-8.9,3.3-18.5,5-27.9,6.1c-0.8-0.5-1.8-0.8-3.1-0.7c-9.7,0.9-14.2,14-13.1,22.4c1.3,9.9,8.9,17.5,14.2,25.5c4.5,6.7,6.7,15.3,8.6,23.1c1.1,4.7,1.8,9.5,2.1,14.4C301,383.8,301.1,387.9,299.2,390.3z M353,360.3c-12.8,11.9-27.4,22-43,29.8c1.1-4.3,1-8.9,0.6-13.3c-0.8-8.9-3.2-17.9-6.2-26.3c-2.8-7.8-7-14-11.8-20.7c-2.7-3.8-5.7-7.9-6.6-12.5c-0.4-2.1-0.3-4.2,0.4-6.2c0.3-1,1.7-3.7,2.7-4.9c0.7,0.2,1.5,0.4,2.4,0.2c11.8-1.4,23.4-3.7,34.6-7.9c9.9-3.7,18-10,25-17.9c6.1-7,10.2-15.1,11.1-24.4c1-10.2-2.6-20.2-6.7-29.3c-3.8-8.6-7.2-16.8-4.3-26.2c2-6.4,4.9-14.7,0.3-20.7c-4.8-6.4-14.5-6.6-21.5-4.3c-6.7,2.2-14,6.2-18.8,11.7c-13.4-7.7-30.8-8.4-45.7-8c-15.5,0.4-31.5,2.2-46.4,6.9c-9.6-9.4-22.2-20.8-36-19.6c-7.8,0.7-12.9,9.1-13.1,16.2c-0.3,9.3,4.1,18,5.5,27.1c-5.8,7.3-13.4,13.3-16.1,22.7c-3,10.6-2.1,21.3,0.7,31.9c2.4,9,7,17,13,24.1c5.3,6.3,12.7,12.2,21.1,12c0.4,0.1,0.8,0.2,1.3,0.3c11.2,1.1,19.9,9.9,20.6,21.3c0.8,12.7-16.1,21.4-27,17.2c-8.6-3.4-10.8-14.8-14.6-22.2c-5.1-9.8-14.6-11.7-24.7-9.4c-2.6,0.6-4,4-3.1,6.4c4.6,11.6,1.5,25.2,9.6,35.6c3.8,4.9,7.5,8.7,13.1,11.5c5.5,2.7,11.8,3.6,17.9,4c5.2,0.3,10.4-0.1,15.6,0.6c3.4,0.5,3.4,1,2.8,4.4c-1.2,6.4-4,12.7-6,18.9c-1.6,5-2.1,9.6-2.2,14.5c0,0.2,0,0.5,0,0.7v0.7c-18.2-4.1-35.3-11.9-49.2-24.7c-15.3-14.1-24.8-33.2-30.3-53c-3.7-13.3-5.5-27.1-6.2-40.9c-0.4-7-0.4-14-0.2-21.1c0.2-6.7,1.2-13.3,1.8-20c0.5-0.1,1-0.2,1.4-0.4c0.5-5.6,1.1-11.1,1.4-16.7c0-0.1,0-0.3,0.1-0.4c-0.5-15.9,6.9-31.3,16.2-44.2c13.1-18.1,30.7-32.8,49.3-45.1c17.2-11.4,35.9-20.6,56.4-24.3c23.2-4.2,47-1.8,69.4,5.1c47.4,14.7,87.4,54.1,98.4,103.1C417.6,274.8,390.2,325.7,353,360.3z"/></svg>`;

@Component({
  selector: 'KD-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @Input() title$!: string | undefined | null;
  record !: any;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private client: CustomHttpService) {
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(GITHUB_ICON));
  }
  ngOnInit(): void {
    // this.client.get({
    //   controller: 'wordbook',
    //   header: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // })
  }
}
