export default {
  mongoUrl: (process.env.MONGO_URL ? `${process.env.MONGO_URL}clean-node-api` : 'mongodb://localhost:27017/clean-node-api'),
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5H'
}
