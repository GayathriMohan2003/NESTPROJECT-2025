import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-singleview-list',
  imports: [],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css',
})
export class SingleviewList {
  singleproduct:any;//declare an array
  constructor(private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef){}//create constructor and initialise  apiservice
  ngOnInit()//create ngoninit()function(parameter mapping)
  {
    const productid=this.route.snapshot.paramMap.get('titleid');
    if(productid)
    {
      this.apiservice.getsingleProducts(productid).subscribe(data=>{
        this.singleproduct=data;
        this.cdr.detectChanges()
      });
    }
}
}
