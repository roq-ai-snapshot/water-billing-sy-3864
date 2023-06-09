import { MeterReadingInterface } from 'interfaces/meter-reading';
import { WaterBillInterface } from 'interfaces/water-bill';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  contact_info: string;
  company_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  meter_reading?: MeterReadingInterface[];
  water_bill?: WaterBillInterface[];
  company?: CompanyInterface;
  _count?: {
    meter_reading?: number;
    water_bill?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  contact_info?: string;
  company_id?: string;
}
