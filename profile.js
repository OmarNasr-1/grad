let users = [];
async function getUser() {
  let response = await fetch("https://car-rental-eg.herokuapp.com/getAllUser");
  let myData = await response.json();
  users = myData.data;
}

function displayusers() {
  let cols = '';

  for (let i = 0; i < users.length; i++) {
    cols +=
      `
    <div class="col-md-4 ">
      <div class="receipe">
          <img class="w-100 recipe-img rounded" src="${users[i]}" alt="">

          <div class="receipe-caption">
            <h3>${users[i].firstName}</h3>
            <h4 >${users[i].lastName}</h4>
            <h4 > ${users[i].email}</h4>
            <h4 >${users[i].phone} LE Per-Day</h4>
              </div>
          <div class="slider"></div>
      </div>
      
    </div>
  `
  }

  document.getElementById("reciptsRow").innerHTML = cols
};

async function controler() {
  await getUser();
  displayusers();
}

controler()