import * as yup from 'yup';

export const waterBillValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  due_date: yup.date().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
});
