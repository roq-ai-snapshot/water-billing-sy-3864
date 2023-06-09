import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface MeterReadingInterface {
  id?: string;
  reading: number;
  reading_date: Date | string;
  customer_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  customer?: CustomerInterface;
  _count?: {};
}

export interface MeterReadingGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
}
