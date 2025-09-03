import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-bredcrum',
  templateUrl: './bredcrum.component.html',
  styleUrls: ['./bredcrum.component.scss']
})
export class BredcrumComponent implements OnInit{

   segments: string[] = [];

  constructor (private activatedRoute:ActivatedRoute, private route:Router){

  }



  ngOnInit(): void {
   
 this.activatedRoute.pathFromRoot.forEach(paths =>{
  paths.url.subscribe((urls:UrlSegment[])=>{
 urls.forEach(rouePath=>{
  if(rouePath.path){
    this.segments.push(rouePath.path)
  }
 })
  })

 })

  }

 navigateTo(index: number) {
    // Create path up to that index
     console.log('index', index)
    const path = this.segments.slice(0, index + 1).join('/');
    console.log('path', path)
    this.route.navigate(['/' + path]);
  }


}
