const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const queries = require('../db/queries')
let title = 'WAhtup!!'

router.get('/', (req, res) => {
  queries.getAllProjects().then(projects => res.render('projects', { title: title, projects: projects, data: { name: 'Matt', pets: ['Tiger', 'Jack']} }))
})

router.get('/:id', (req, res) => {
  queries.getOneProject(req.params.id).then(project => res.json(project))
})

router.post('/', (req, res) => {
  queries.postProject(req.body).then(project => res.json(project[0]))
})

router.delete('/:id', (req, res) => {
  queries.deleteProject(req.params.id).then(project => res.json({ deleted: project[0] }))
})

router.put('/:id', (req, res) => {
  queries.editProject(req.params.id, req.body).then(project => res.json({ edited: project[0] }))
})

module.exports = router
