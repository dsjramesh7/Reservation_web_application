import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  data:any;

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) {

   }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data=JSON.parse(atob(params.data));
    })

  }

}
