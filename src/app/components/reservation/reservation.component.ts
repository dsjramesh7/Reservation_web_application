import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  /* 
  currentVal : any = "";
  

 myEvent(evt : any)
 {
   console.log(evt);
   this.currentVal = evt ;
 }
*/
 
 form : any;

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { 

    this.form = new FormGroup(
      {
        email:new FormControl("",Validators.required),
        name:new FormControl("",Validators.required),
        phone:new FormControl("",Validators.required),
        address:new FormControl("",Validators.required),
        city:new FormControl("",Validators.required),
        state:new FormControl("",Validators.required),
        zip:new FormControl("",Validators.required),
        date:new FormControl("",Validators.required),
        time:new FormControl("",Validators.required),
        reservat:new FormControl("",Validators.required),
      }
    )
  }

  //from services
  //message="ramesh";

  ngOnInit(): void {
    
    //this.userss.setMessage(this.message);
  }

  saveCall()
  {
    alert("Reservation has been done !!")
    let data:any=this.form.value;
    this.router.navigate(['../result'],{
      queryParams:{data:btoa(JSON.stringify(data))}
    })
  }

}
