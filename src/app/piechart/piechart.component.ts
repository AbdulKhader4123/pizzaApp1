import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  doughnutChartData:MultiDataSet=[]
  doughnutChartLabels:Label[]=[]
  doughnutChartType:ChartType='doughnut'
  doughtnutChartOption:any={}
  doughnutChartColors:Array<any>=[{
    backgroundColor:['#ff0000','#ffbf00','#1ab31a']
  }]
  doughnutChartOption:any={
      responsive: true,
      maintainAspectRatio: false,
  }

  @Output() chartClick: EventEmitter<any>= new EventEmitter<any>();

  private Received :number=0;
  private Preparing :number=0;
  private Ready :number=0;

  private orderObs$ :Subscription

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.doughnutChartLabels =['Received', 'Preparing', 'Ready'];
    //to get total orders for each status
    this.calculateOrders()
    //when user updates the status from action dropdown, the event is captured here and again total count is calculated and chart is updated.
    this.dataService.updateOrderObs.subscribe(res=> this.calculateOrders())
  }

  calculateOrders(){
    this.Received=0; this.Preparing=0; this.Ready=0;
    for(let order of this.dataService.gridData){
      switch (order.status) {
        case "Received":
          this.Received++;
          break;
        case "Preparing":
          this.Preparing++;
          break;
        case "Ready":
          this.Ready++;
          break;
      }
    }
    this.doughnutChartData = [
      [this.Received, this.Preparing, this.Ready]
    ];
  }

  chartClicked(e){
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if ( activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        // console.log(clickedElementIndex, label, value)
        this.chartClick.emit(label)

      }
    }
  }

  ngOnDestroy(){
    this.orderObs$.unsubscribe()
  }
}
