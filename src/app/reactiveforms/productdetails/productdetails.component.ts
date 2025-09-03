import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit{

   profileId:any;

  constructor(private activatedRoute:ActivatedRoute ){

  }
  ngOnInit(): void {
    
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')
    // console.log('profileId', this.profileId)

    this.activatedRoute.params.subscribe((params) =>{
    this.profileId = params['id']
    // console.log('profileId', this.profileId)

     this.activatedRoute.url.subscribe((segments) => {
     this.profileId = segments.map(s => s.path)
    // console.log("URL segments:", segments.map(s => s.path));
    console.log('profileId', this.profileId.length)
  });
    })


  }

  cart: any[]=[]

  onAdd(product:any){
console.log(product)
  this.cart.push(product)
  }

}
