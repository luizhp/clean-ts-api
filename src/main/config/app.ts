import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import setupStatic from './static-files'
import setupSwagger from './config-swagger'
import express from 'express'

const app = express()
setupSwagger(app)
setupStatic(app)
setupMiddlewares(app)
setupRoutes(app)
export default app
