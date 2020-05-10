import { loginPath } from './paths'
import { badRequest, unauthorized, serverError, notFound } from './components'
import { errorSchema, accountSchema, loginParamsSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description:
      'API do curso do Mango para realizar enquetes entre programadores',
    version: '1.0.0',
    contact: {
      name: 'Rodrigo Manguinho',
      email: 'rodrigo.manguinho@gmail.com'
    }
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api',
    description: 'Main Api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    error: errorSchema,
    account: accountSchema,
    loginParams: loginParamsSchema
  },
  components: {
    badRequest: badRequest,
    unauthorized: unauthorized,
    serverError: serverError,
    notFound: notFound
  }
}
