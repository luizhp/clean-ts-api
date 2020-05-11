import { loginPath, signUpPath, surveyPath } from './paths'
import { badRequest, unauthorized, serverError, notFound, forbidden } from './components'
import { errorSchema, accountSchema, loginParamsSchema, signUpParamsSchema, surveySchema, surveyAnswerSchema, surveysSchema, addSurveyParamsSchema, apiKeySchema } from './schemas'

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
  }, {
    name: 'Survey'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath
  },
  schemas: {
    error: errorSchema,
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema,
    surveys: surveysSchema,
    addSurveyParams: addSurveyParamsSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeySchema
    },
    badRequest: badRequest,
    unauthorized: unauthorized,
    serverError: serverError,
    notFound: notFound,
    forbidden: forbidden
  }
}
