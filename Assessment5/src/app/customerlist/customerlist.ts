import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api-service';
@Component({
  selector: 'app-customerlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customerlist.html',
  styleUrl: './customerlist.css',
})
export class Customerlist {
  customers:any[]=[];
  constructor(private apiservice:ApiService,private cdr:ChangeDetectorRef){}
    ngOnInit(){
       this.apiservice.getcustomerlist().subscribe((data:any) => {
         this.customers=data;
         this.cdr.detectChanges()
       });
    }
  }


