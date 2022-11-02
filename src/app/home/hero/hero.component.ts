import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public target!: string;
  public type!: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  start() {
    if (this.target !== undefined && this.type !== undefined) {
      void this.router.navigate(['/loading'],{queryParams:{target:this.target, type: this.type}});
    }
  }

  setTargetValue(value: string) {
    switch (value) {
      case 'v4': {
        if (this.type === 'ipv4') {
          this.type = undefined;
          break;
        }
        this.type = 'ipv4';
        break;
      }
      case 'v6': {
        if (this.type === 'ipv6') {
          this.type = undefined;
          break;
        }
        this.type = 'ipv6';
        break;
      }
      case 'hostname': {
        if (this.type === 'hostname') {
          this.type = undefined;
          break;
        }
        this.type = 'hostname';
        break;
      }
      case 'uri': {
        if (this.type === 'uri') {
          this.type = undefined;
          break;
        }
        this.type = 'uri';
        break;
      }
    }
  }

}
