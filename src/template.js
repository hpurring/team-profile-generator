

function generateHtml(data) {
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
    
    <container class="d-flex justify-content-center justify-content-center">
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.position}</p>
              <p class="card-text">${data.id}</p>
              <p class="card-text">${data.email}</p>
            </div>
        </div>
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.position}</p>
              <p class="card-text">${data.id}</p>
              <p class="card-text">${data.email}</p>
            </div>
        </div>
    </container>
`

}