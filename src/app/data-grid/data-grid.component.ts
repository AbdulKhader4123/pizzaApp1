import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import OrderDetails from '../models/OrderDetails';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
   gridApi;
   gridColumnApi;
   columnDefs;
   defaultColDef;
   rowData : OrderDetails[];
   selectedOrder:OrderDetails;
   @Input() searchText:string;
   @ViewChild('content',{static: false}) contentInputRef :ElementRef;

  constructor(private dataService:DataService,private modalService: NgbModal) {
    window['DataGridComponent']=this;
   }

  ngOnInit() {
    this.columnDefs = [
      {
        headerName: 'Order Id',
        field: 'orderId',
        width:150,
        filter:'agNumberColumnFilter',
        cellRenderer: params => {
          return `<a onclick="window.DataGridComponent.displayOrderDtls(${params.data.orderId})" class="link">`+params.value+`</a>
          `;
        }
      },
      {
        headerName: 'Customer',
        field: 'custName',
      },
      {
        headerName: 'No of Items',
        field: 'itemQty',
        width:150,
        filter:'agNumberColumnFilter'
      },
      {
        headerName: 'Total',
        field: 'totalAmt',
        width:120,
        filter:'agNumberColumnFilter'
      },
      {
        headerName: 'Status',
        field: 'status',
        width:150,
        cellRenderer: params => {
          if(params.value=="Received")
            return `<a class="statusClass" style="color:#ff0000;font-weight: 500;">`+params.value+`</a>`;
          else if(params.value=="Preparing")
            return `<a class="statusClass" style="color:#ffbf00;font-weight: 500;">`+params.value+`</a>`;
          else if(params.value=="Ready")
            return `<a class="statusClass" style="color:#1ab31a;font-weight: 500;">`+params.value+`</a>`;
        },
      },
      {
        headerName: 'Manage Order',
        field: 'action',
        cellClass:'actions-button-cell',
        width:150,
        sortable :false,
        suppressMenu: true,
        cellRenderer: params => {
          return `
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              style="font-size: 13px;line-height: 12px;" >Action</button>
            <div  class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a onclick="window.DataGridComponent.updateOrderStatus('prepStarted',${params.data.orderId})" class="dropdown-item">Started Preparing</a>
              <a onclick="window.DataGridComponent.updateOrderStatus('ready',${params.data.orderId})" class="dropdown-item">Ready to serve</a>
            </div>
          </div>`;
      }
      },
    ];

    this.defaultColDef = {
      filter: true,
      filterParams:{
        buttons:['reset','apply']
      },
      resizable: true,
      sortable:true,
      flex:1,
      editable:false,
      cellStyle:{textAlign:'center'},
    };

    this.rowData=this.dataService.gridData
  }

  displayOrderDtls(orderId:Number){
    this.selectedOrder= this.getOrderDetails(orderId)
    this.modalService.open(this.contentInputRef,{ centered: true, size:'lg' })
  }
   
  updateOrderStatus(status:String,orderId:Number){
    const order : OrderDetails= this.getOrderDetails(orderId)

    if(status==="prepStarted"){
      order.status="Preparing"
    }
    else if(status==="ready"){
      order.status="Ready"
    }
    this.rowData=this.dataService.gridData.slice()

    this.dataService.updateOrder(orderId)

  }

  getOrderDetails(orderId : Number):OrderDetails{
    return this.dataService.gridData.find(order => order.orderId===orderId)
  }

  onGridReady(event){
  }
}
