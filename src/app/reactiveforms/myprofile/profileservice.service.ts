import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  myprofile = [
    {id: 1, name: 'Meenakshi', age: 21, email: 'meenakh@gmail.com', contactNumber: 12345, city: 'mumbai', gender:'Female' },
    {id: 2, name: 'Rakshi', age: 21, email: 'meenakh@gmail.com', contactNumber: 12345, city: 'mumbai' , gender:'Female' },
    {id: 3, name: 'Deepali', age: 21, email: 'meenak4@gmail.com', contactNumber: 12345, city: 'mumbai', gender:'Female'} , 
    {id: 4, name: 'Ananya', age: 21, email: 'meenak78@gmail.com', contactNumber: 12345, city: 'mumbai' , gender:'Female'} ,
    {id: 5, name: 'Samiksha', age: 21, email: 'meenak44@gmail.com', contactNumber: 12345, city: 'mumbai' , gender:'Female'} ,
    {id: 6, name: 'Radhika', age: 21, email: 'meenak98@gmail.com', contactNumber: 12345, city: 'mumbai' , gender:'Female' },
    {id: 7, name: 'Supriya', age: 21, email: 'meenak11@gmail.com', contactNumber: 12345, city: 'mumbai' , gender:'Female'} ,
    {id: 8, name: 'Manoj', age: 21, email: 'meenakyu@gmail.com', contactNumber: 12345, city: 'mumbai' , gender:'male'} ,
    {id: 9, name: 'Ashish', age: 21, email: 'meenakh86@gmail.com', contactNumber: 12345, city: 'mumbai' , gender:'male'} ,
    {id: 10, name: 'Sumeet', age: 21, email: 'meenakh00@gmail.com', contactNumber: 12345, city: 'mumbai' , gender:'male'} ,
  

  ]

  constructor(private http: HttpClient) { }
    getProfile(){
    return  of (this.myprofile)

    }


}
