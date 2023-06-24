// Common
import * as yup from 'yup'

// TODO: Add regex for validation
export const exampleSchema = yup.object().shape({
  test: yup.string().required('String value is required'),
})
