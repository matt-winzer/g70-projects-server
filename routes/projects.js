const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const queries = require('../db/queries')

router.get('/', (req, res) => {
  queries.getAllProjects().then(projects => res.render('projects', { title: 'All Projects', projects }))  
})

router.get('/submit', (req, res) => {
  queries.getAllStudents().then(students => {
    const g70 = students.filter(student => student.cohort.toLowerCase() === 'g70')
    const g75 = students.filter(student => student.cohort.toLowerCase() === 'g75')
    res.render('submit', { g70, g75 })
  })
})

router.get('/:id', (req, res) => {
  queries.getOneProject(req.params.id).then(project => res.json(project))
})

router.post('/', (req, res) => {
  queries.postProject(req.body).then(project => res.redirect('/projects/'))
})

router.delete('/:id', (req, res) => {
  queries.deleteProject(req.params.id).then(project => res.json({ deleted: project[0] }))
})

router.put('/:id', (req, res) => {
  queries.editProject(req.params.id, req.body).then(project => res.json({ edited: project[0] }))
})

module.exports = router
