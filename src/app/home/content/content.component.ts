import { Component, OnInit } from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ActivatedRoute, Router} from '@angular/router';
import {ScannerService} from '../../common/requests/scanner.service';

@UntilDestroy()

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public id!: string;
  result = '';

  constructor(private router: Router, private route: ActivatedRoute,private http: ScannerService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      console.log( `${params.id}`);
      this.id=params.id;
    });

    this.http.fetchScanResult(this.id)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (response)=>{
          console.log(`${response.body}`);
          this.result = JSON.stringify(response.body,null,4);
        },
        error: (response)=>{
          console.log(`${response.status}`);
        }
      });
  }

}
