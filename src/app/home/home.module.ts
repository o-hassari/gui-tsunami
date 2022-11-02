import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { ContentComponent } from './content/content.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, ContentComponent, LoadingComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  exports: [
    HeroComponent,
    ContentComponent,
    LoadingComponent
  ]
})
export class HomeModule {}
