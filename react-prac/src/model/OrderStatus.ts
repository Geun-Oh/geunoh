import { ClassEnum } from 'class-enum';

export default class OrderStatus extends ClassEnum<OrderStatus> {
    public static readonly APPROVE = new OrderStatus("APPROVE");
    
}