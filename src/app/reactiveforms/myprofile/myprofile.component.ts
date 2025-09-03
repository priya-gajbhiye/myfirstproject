import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileserviceService } from './profileservice.service';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  itemsPerPage:number=4; 
  currentPage:number=1;
  myprofiledata:any
  isGoto:any

  @Input() userData!:{

    firstName:string, 
    lastName:string,
    email:string

  } 
 
  @Input() accessMessage!: string  

 @Output() sendmsg:EventEmitter<string> = new EventEmitter <string>()

 @Output() addToCart: EventEmitter <any> = new EventEmitter<any>()

  productData =[
    {id:1, productName:'mobile', price:300, quantity:2},
    {  id:2, productName:'Freeze', price:300, quantity:2},
    {  id:3, productName:'Laptop', price:300, quantity:2},


  ]

  constructor (private profileservice:ProfileserviceService, 
    private router:Router, private activatedRoute:ActivatedRoute){

  }
ngOnInit(): void {

  this.activatedRoute.fragment.subscribe((frag:any)=>{
    console.log('frgament', frag)
   document.getElementById(frag)?.scrollIntoView({ behavior: 'smooth' });
     
  })

  
this.getProfileData()


}

getProfileData(){
this.profileservice.getProfile().subscribe((res:any)=>{
this.myprofiledata = res
// console.log('myprofiledata', this.myprofiledata)
})

 }

get PaginatedData(){
  const start = (this.currentPage-1) * (this.itemsPerPage)
  // console.log('start', start)
  const end = start + this.itemsPerPage
    // console.log('end', end)
  return  this.myprofiledata.slice(start, end)
}

pageClick(page:any){
this.currentPage = page
// console.log('this.currentPage ', this.currentPage )
}

onAddtoCart(item:any){
  // console.log('item addded')
  this.addToCart.emit(item)
   this.isGoto = item.id

}

addProfile(){
  this.router.navigate(['/addProfile'])
}

sendMessgae(){
this.sendmsg.emit('Data transfer from Child to Parent')

}
editProfile(id:number, view:any){
 console.log('ids', id)
this.router.navigate(['/profileDetails', id, view])
}



}
