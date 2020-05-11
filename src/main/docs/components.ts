import { apiKeySchema } from './schemas/'
import {
  badRequest,
  unauthorized,
  serverError,
  notFound,
  forbidden
} from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeySchema
  },
  badRequest: badRequest,
  unauthorized: unauthorized,
  serverError: serverError,
  notFound: notFound,
  forbidden: forbidden
}
