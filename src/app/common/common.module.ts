import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {DatePipe, NgIf} from "@angular/common";
import {RouterLink, RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    DatePipe,
    NgIf,
    RouterLinkWithHref,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CommonModule { }
