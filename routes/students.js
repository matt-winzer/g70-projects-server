const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const queries = require('../db/queries')

router.get('/', (req, res) => {
  queries.getAllStudents().then(students => {
    const g70 = students.filter(student => student.cohort.toLowerCase() === 'g70')
    const g75 = students.filter(student => student.cohort.toLowerCase() === 'g75')
    res.render('submit', { cohorts: g70, g75} })
  })
})

router.get('/:id', (req, res) => {
})

router.post('/', (req, res) => {
})

router.delete('/:id', (req, res) => {
})

router.put('/:id', (req, res) => {
})

module.exports = router
