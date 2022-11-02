import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {DatePipe} from "@angular/common";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    DatePipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CommonModule { }
