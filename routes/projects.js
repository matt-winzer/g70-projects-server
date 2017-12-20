const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const queries = require('../db/queries')
const studentQueries = require('../db/student.queries')

router.get('/', (req, res) => {
  queries.getAllProjects().then(projects => res.render('projects', { projects }))
})

router.get('/submit', (req, res) => {
  studentQueries.getAllStudents().then(students => {
    const g70 = students.filter(student => student.cohort.toLowerCase() === 'g70')
    const g75 = students.filter(student => student.cohort.toLowerCase() === 'g75')
    res.render('submit', { g70, g75 })
  })
})

router.get('/:id', (req, res) => {
  queries.getOneProject(req.params.id).then(project => res.json(project))
})

router.get('/:id/edit', async (req, res) => {
  const project = await queries.getOneProject(req.params.id)
  const student = await studentQueries.getStudentById(project.studentId)
  res.render('edit', { project, student })
})

router.post('/', (req, res) => {
  queries.postProject(req.body).then(project => res.redirect('/projects/'))
})

router.delete('/:id', (req, res) => {
  queries.deleteProject(req.params.id).then(project => res.redirect(`/students/${req.query.student}`))
})

router.put('/:id/edit', (req, res) => {
  queries.editProject(req.params.id, req.body).then(project => res.redirect(`/students/${req.query.student}`))
})

module.exports = router


  