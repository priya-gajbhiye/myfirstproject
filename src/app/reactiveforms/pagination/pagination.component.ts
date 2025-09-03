import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit{

  @Input () totalItems:any;
  @Input () currentPage:any;
  @Input () itemsPerPage:any;
  @Output() onClick :EventEmitter<number> = new EventEmitter();
  totalPages =0;
  pages:number[] =[];
constructor(){

}

ngOnInit(): void {
  if(this.totalItems){
    console.log('this.totalItems', this.totalItems)
    console.log('itemsPerPage', this.itemsPerPage)
    this.totalPages = Math.ceil(this.totalItems/this.itemsPerPage)
     console.log('this.totalPages ', this.totalPages)
    for (let p = 1; p <= this.totalPages; p++) {
  this.pages.push(p);
}
  this.pages = this.pages;
    console.log('this.pages ', this.pages)
  }

}

pageClicked(page:any){
console.log('page',page)
this.onClick.emit(page)
}


}
