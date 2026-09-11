import { Router } from 'express'
import type { Model } from 'mongoose'
import database from '../config/database.js'

export function createResourceRouter<T>(model: Model<T>) {
  const router = Router()

  router.use((_request, response, next) => {
    if (database.readyState !== 1) {
      response.status(503).json({ error: 'Database unavailable' })
      return
    }
    next()
  })

  router.get('/', async (_request, response) => {
    response.json(await model.find().lean())
  })

  router.get('/:id', async (request, response) => {
    const resource = await model.findById(request.params.id).lean()
    if (!resource) {
      response.status(404).json({ error: 'Resource not found' })
      return
    }
    response.json(resource)
  })

  router.post('/', async (request, response) => {
    const resource = await model.create(request.body)
    response.status(201).json(resource)
  })

  return router
}