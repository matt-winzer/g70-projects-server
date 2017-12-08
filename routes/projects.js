const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const queries = require('../db/queries')

router.get('/', (req, res) => {
  queries.getAllProjects().then(projects => res.json(projects))
})

router.get('/:id', (req, res) => {
  queries.getOneProject(req.params.id).then(project => res.json(project))
})

router.post('/', (req, res) => {
  queries.postProject(req.body).then(project => res.json(project))
})

router.delete('/:id', (req, res) => {
  queries.deleteProject(req.params.id).then(project => res.json(project))
})

module.exports = router
