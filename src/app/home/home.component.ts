import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  searchText :string="";

  ngOnInit() {
  }

  UpdateOrders(event:any){
    
  }

  chartClicked(searchText:string){
    //whenever use clicks on any section in chart, the grid is filtered based on the selected status.
    this.searchText=searchText

  }
}
