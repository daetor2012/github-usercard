/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/daetor2012')
  .then((response) => {
    console.log(response);
    const newUser = new component1(response);
    cards.appendChild(newUser);
    
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
followersArray.forEach(item => {
  axios
    .get(`https://api.github.com/users/${item}`)
    .then((response) => {
      const newUsers = new component1(response);
      cards.appendChild(newUsers);
    });
});


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const cards = document.querySelector(".cards");
function component1(object) {
  const div1 = document.createElement("div");
  const image1 = document.createElement("img");
  const div2 = document.createElement("div");
  const h3 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const a1 = document.createElement("a");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const p6 = document.createElement("p");
  div1.classList.add("card");
  div2.classList.add("card-info");
  h3.classList.add("name");
  p1.classList.add("username");
  div1.appendChild(image1);
  div1.appendChild(div2);
  div2.appendChild(h3);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  p3.appendChild(a1);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);
  image1.src = object.data.avatar_url;
  if(object.data.name === null) {
    h3.textContent = "N/A";
  } else {
    h3.textContent = object.data.name;
  };
  p1.textContent = "Github: " + object.data.login;
  if(object.data.location === null) {
    p2.textContent = "Location: Unspecified";
  } else {
    p2.textContent = "Location: " + object.data.location;
  };
  a1.href = object.data.html_url;
  a1.textContent = object.data.html_url;
  p4.textContent = "Followers: " + object.data.followers;
  p5.textContent = "Following: " + object.data.following;
  if(object.data.bio === null) {
    p6.textContent = "Biography: Unspecified";
  } else {
    p6.textContent = "Biography: " + object.data.bio;
  };

  return div1;

};
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
