import { Injectable } from '@angular/core';
import OrderDetails from './models/OrderDetails';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  gridData:OrderDetails[]=[
    {orderId:1,custName:"Jack",itemQty:2,totalAmt:180,status:'Received',
    ProductDetails:[{
      name:"Margherita",
      price:100,
      discount:10,
      quantity:2
    }],
    Address:"A block, 3rd floor chennai",
    phone:9952064577
    },
    {orderId:2,custName:"Jim",itemQty:2,totalAmt:265,status:'Preparing',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:3,custName:"Joe",itemQty:1,totalAmt:265,status:'Ready',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:4,custName:"Bran",itemQty:3,totalAmt:265,status:'Preparing',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:5,custName:"Skyler",itemQty:1,totalAmt:265,status:'Received',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:6,custName:"Randy",itemQty:4,totalAmt:265,status:'Preparing',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:7,custName:"Kohl",itemQty:5,totalAmt:265,status:'Ready',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:8,custName:"Finch",itemQty:3,totalAmt:265,status:'Received',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:9,custName:"Jack",itemQty:4,totalAmt:265,status:'Received',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:10,custName:"Jim",itemQty:2,totalAmt:265,status:'Preparing',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:12,custName:"Joe",itemQty:1,totalAmt:265,status:'Ready',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:13,custName:"Bran",itemQty:3,totalAmt:265,status:'Preparing',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:14,custName:"Skyler",itemQty:1,totalAmt:265,status:'Received',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:15,custName:"Randy",itemQty:4,totalAmt:265,status:'Preparing',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:16,custName:"Kohl",itemQty:5,totalAmt:265,status:'Ready',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:17,custName:"Finch",itemQty:3,totalAmt:265,status:'Received',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:18,custName:"Jack",itemQty:4,totalAmt:265,status:'Received',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:19,custName:"Jim",itemQty:2,totalAmt:265,status:'Preparing',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:20,custName:"Joe",itemQty:1,totalAmt:265,status:'Ready',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:21,custName:"Bran",itemQty:3,totalAmt:265,status:'Preparing',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:22,custName:"Skyler",itemQty:1,totalAmt:265,status:'Received',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:23,custName:"Randy",itemQty:4,totalAmt:265,status:'Preparing',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:24,custName:"Kohl",itemQty:5,totalAmt:265,status:'Ready',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:25,custName:"Finch",itemQty:3,totalAmt:265,status:'Received',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577},
    {orderId:26,custName:"Jim",itemQty:4,totalAmt:265,status:'Received',
    ProductDetails:[{
        name:"Margherita",
        price:100,
        discount:15,
        quantity:1
      },
      {
        name:"Double cheese",
        price:100,
        discount:10,
        quantity:2
      }
    ],
    Address:"A block, 3rd floor chennai",
    phone:9952064577
    },
  ]

  private updateOrderSub= new Subject<Number>();
  updateOrderObs=this.updateOrderSub.asObservable();

  updateOrder(orderId:Number){
    this.updateOrderSub.next(orderId);
  }

  }

