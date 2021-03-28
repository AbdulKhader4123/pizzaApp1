import Product from "./Product";

export default interface OrderDetails {
  orderId: number;
  custName: string;
  itemQty:number;
  totalAmt:number;
  status:string;
  ProductDetails:Product[];
  Address:string;
  phone:number;
}