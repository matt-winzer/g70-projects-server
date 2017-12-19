const submit = document.querySelector('#submit-project')
const postUrl = '/projects'

submit.addEventListener('click', submitProject)

function submitProject(e) {
  e.preventDefault()
  console.log('clicked');
  const studentId = $('select.student-name').val()
  const name = document.querySelector('#project-name').value
  const description = document.querySelector('#project-description').value
  const deployedUrl = document.querySelector('#deployed-url').value
  const gitUrl = document.querySelector('#github-url').value

  console.log(studentId);

  studentId && name && deployedUrl ? postProject({
    name,
    description,
    deployedUrl,
    gitUrl,
    name,
    studentId
  }) : rejectPost()
}

function postProject(project, res) {
  console.log('posting');
  fetch(postUrl, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(project)
  })
    .then(res => {
      window.location.href = res.url
    })
    .catch(console.error)
}

function rejectPost() {
  console.error('rejected')
}