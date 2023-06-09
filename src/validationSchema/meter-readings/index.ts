import * as yup from 'yup';

export const meterReadingValidationSchema = yup.object().shape({
  reading: yup.number().integer().required(),
  reading_date: yup.date().required(),
  customer_id: yup.string().nullable().required(),
});
