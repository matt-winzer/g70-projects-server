const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const queries = require('../db/student.queries')

router.get('/', async (req, res) => {
  const students = await queries.getAllStudents()
  const cohorts = await queries.getUniqueCohorts()
  const data = cohorts.map(cohort => {
    return {
      cohort: cohort.cohort,
      students: students.filter(student => student.cohort === cohort.cohort)
    }
  })
  res.render('students', { cohorts: data })
})

router.get('/:id', async (req, res) => {
  const student = await queries.getStudentById(req.params.id)
  const projects = await queries.getProjectsByStudentId(req.params.id)
  const studentWithProjects = student.map(student => ({ student, projects }))
  console.log(studentWithProjects)
  res.render('student', { student: studentWithProjects })
})

router.post('/', (req, res) => {
})

router.delete('/:id', (req, res) => {
})

router.put('/:id', (req, res) => {
})

module.exports = router
