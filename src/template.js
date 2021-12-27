const index = require('../index');
const Engineer = require('../lib/Engineer');

function createCard(teamData) {
  let html = [];
  teamData.forEach(person => {
    if (person.getRole() === "Engineer") {
       html.push(`
       <div class="card m-4 shadow p-3 bg-white rounded" style="width: auto;">
               <div class="card-body">
                 <h5 class="card-title mb-4 font-weight-bold">${person.getName()}</h5>
                 <p class="card-text">Role: ${person.getRole()}</p>
                 <p class="card-text">ID: ${person.getId()}</p>
                 <p class="card-text">Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></p>
                 <p class="card-text">Github: <a href="https://github.com/${person.getGithub()}">${person.getGithub()}</a></p>
               </div>
           </div>`)
    } else if (person.getRole() === "Manager") {
      html.push(`
      <div class="card m-4 shadow p-3 bg-white rounded" style="width: auto;">
              <div class="card-body">
                <h5 class="card-title mb-4 font-weight-bold">${person.getName()}</h5>
                <p class="card-text">Role: ${person.getRole()}</p>
                <p class="card-text">ID: ${person.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></p>
                <p class="card-text">Office #: ${person.getOffice()}</p>
              </div>
          </div>`)
    } else {
      html.push(`
      <div class="card m-4 shadow p-3 bg-white rounded" style="width: auto;">
              <div class="card-body">
                <h5 class="card-title mb-4 font-weight-bold">${person.getName()}</h5>
                <p class="card-text">Role: ${person.getRole()}</p>
                <p class="card-text">ID: ${person.getId()}</p>
                <p class="card-text">Email: <a href="mailto${person.getEmail()}">${person.getEmail()}</a></p>
                <p class="card-text">College/University: ${person.getSchool()}</p>
              </div>
          </div>`)
    }
  })
  return html.join('');
  
};

function generateHtml(teamData) {
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Our Employees</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

    <header>
        <h1 class="bg-primary text-light text-md-center p-md-2">Our Team</h1>
    </header>
    
    <container>
        <div class="card-group m-5 justify-content-around align-items-center">
            ${createCard(teamData)}
        </div>
       
    </container>
`

}

module.exports = generateHtml;