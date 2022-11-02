import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ScannerService} from '../../common/requests/scanner.service';

@UntilDestroy()

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public type!: string;
  public target!: string;
  public id!: string;

  constructor(private router: Router, private route: ActivatedRoute,private http: ScannerService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      console.log( `${params.target}, ${params.type}`);
      this.target=params.target;
      this.type=params.type;
    });

    this.http.startScanning(this.target, this.type)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (response)=>{
          console.log(`${response.body.id}`);
          this.id = response.body.id.toString();
          void this.router.navigate(['/content'],{queryParams:{id:this.id}});
          return;
        },
        error: (response)=>{
          console.log(`${response.status}`);
        }
      });
  }

}
