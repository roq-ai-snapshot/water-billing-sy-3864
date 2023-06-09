import * as yup from 'yup';
import { meterReadingValidationSchema } from 'validationSchema/meter-readings';
import { waterBillValidationSchema } from 'validationSchema/water-bills';

export const customerValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  contact_info: yup.string().required(),
  company_id: yup.string().nullable().required(),
  meter_reading: yup.array().of(meterReadingValidationSchema),
  water_bill: yup.array().of(waterBillValidationSchema),
});
