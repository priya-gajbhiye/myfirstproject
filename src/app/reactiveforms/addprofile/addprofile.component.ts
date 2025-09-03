import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.scss']
})
export class AddprofileComponent implements OnInit{

   myProfileForm!:FormGroup 

   message = 'Hello I am Parent'
   msgReceived:string='';

  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    
    this.myProfileForm = this.fb.group({
      firstName:['', Validators.required],
      email:['', Validators.required],
      age:[null, Validators.required],
      contactNumber:['', Validators.required],
      gender:['', Validators.required],
      city:['', Validators.required],
      skills: this.fb.array([this.fb.control('', Validators.required)])
     
    })

    

  }

  get skills() : FormArray{
    return this.myProfileForm.get('skills') as FormArray
   } 


addSkill(){

}
  


  onSubmit(){
    console.log('formvaulue',this.myProfileForm.value)
  }


  getMessage(item:string){
 this.msgReceived = item
  }

}
