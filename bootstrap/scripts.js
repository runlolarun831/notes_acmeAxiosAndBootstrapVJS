// axios.get('https://acme-users-api-rev.herokuapp.com/api/users')
//   .then(response => {
//     const users = response.data.users;
//     console.log(users);
//   } )
//   .catch( ex => console.log(ex.response.data));
// //console: Array(50)


/* going to use some destructuring
The {}'s say "give me the users property & assign it to the variable users
  from the response.data  "
*/
// axios.get('https://acme-users-api-rev.herokuapp.com/api/users')
//   .then(response => {
//     const {users} = response.data; /// destructuring
//     console.log(users);
//   } )
//   .catch( ex => console.log(ex.response.data));
// //console: (50) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},etc


axios.get('https://acme-users-api-rev.herokuapp.com/api/users')
  .then(response => {
    const {users} = response.data; /// destructuring
    render(users);
  } )
  .catch( ex => console.log(ex.response.data));

const render = (users)=> {
  const html = users.map( user => `<li class='list-group-item'>${ user.fullName}</li>`).join('');
  document.querySelector('#list').innerHTML = html;
};

/*Let's use another 3rd party library^^^ changed script^^^!
Google bootstrap cdn and copy/paste to html file w/a href
bootstrap api has: based on the UI, got a styles sheet, javascript widgets,
pop ups, forms , alerts, look at documentation, check it out! hosted on another server, lots of classes
class='list-group-item' give list indentation
vvvv you could use these colors for active/inactive users vvv
class='list-group-item-success' makes everything green
class='list-group-item-danger' makes everything red
*/
