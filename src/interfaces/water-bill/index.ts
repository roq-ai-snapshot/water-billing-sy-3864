import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface WaterBillInterface {
  id?: string;
  amount: number;
  due_date: Date | string;
  status: string;
  customer_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  customer?: CustomerInterface;
  _count?: {};
}

export interface WaterBillGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_id?: string;
}
