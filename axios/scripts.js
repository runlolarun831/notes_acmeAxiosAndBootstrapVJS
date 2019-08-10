///fetch and axios
/* -fetch api  is already installed in our browsers,
   -we don't have to install anything or grab another script file
   -learn about some third party libraries
*/
/*// vvv "happy path" example vvv
fetch('https://acme-users-api-rev.herokuapp.com/api/users')
  .then( response => response.json())
  .then( result => console.log(result));
*/ // ^^^console result: get count and first 50 users^^^
/*--------------------------------------------------------------- */

//what if there was an error? such as a bad request (adding /x) to the end ofthe fetch library thinks that this is successful

// fetch('https://acme-users-api-rev.herokuapp.com/api/users/x')
//   .then( response => response.json())
//   .then( result => console.log(result));
 /* console: EXCEPTIONresult scripts.js:13 GET https://acme-users-api-rev.herokuapp.com/api/users/x 500 (Internal Server Error)
(anonymous) @ scripts.js:13
scripts.js:15 {message: "column "nan" does not exist"}
*/

// fetch('https://acme-users-api-rev.herokuapp.com/api/users/x')
//   .then( response => response.json())
//   .then( result => console.log(result.users));
/*console: scripts.js:21 GET https://acme-users-api-rev.herokuapp.com/api/users/x
 500 (Internal Server Error)(anonymous) @ scripts.js:21scripts.js:23 undefined */

/*
fetch('https://acme-users-api-rev.herokuapp.com/api/users/x')
  .then( response => {
    if(!response.ok) {
      throw response;
    }
    return response.json()
  })
  .then( result => console.log(result.users))
  .catch(async(ex) => {
    const result = await ex.json();
    console.log(result);
});
*/
/* console: scripts.js:30 GET https://acme-users-api-rev.herokuapp.com/api/users/x
 500 (Internal Server Error) (anonymous) @ scripts.js:30 scripts.js:40 {message: "column "nan" does not exist"} */

/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
//axios is a library ability to make these AJAX request calls, get axios cdn on google get library and put in html file (look at index.html)

// // vvv "happy path" example vvv
// axios.get('https://acme-users-api-rev.herokuapp.com/api/users')
//   .then(response => console.log(response.data))//we don't have do any .awaits for jsondata
// //console: {count: 1202, users: Array(50)}

/*--------------------------------------------------------------- */
//dealing with errors--put a catch in     fyi "(ex)" is the EXCEPTION
// axios.get('https://acme-users-api-rev.herokuapp.com/api/users/x')
//   .then(response => console.log(response.data))
//   .catch( ex => console.log(ex));
// /* console: xhr.js:173 GET https://acme-users-api-rev.herokuapp.com/api/users/x 500 (Internal Server Error)
// d and more info.....*/

//dealing w/errors and want more detailed info
axios.get('https://acme-users-api-rev.herokuapp.com/api/users/x')
  .then(response => console.log(response.data))
  .catch( ex => console.log(ex.response.data));//you get exception & you look @ response
/*xhr.js:173 GET https://acme-users-api-rev.herokuapp.com/api/users/x 500 (Internal Server Error)
and more info.....*/

/*axios api makes it a bit easier with error handling w/ short code,
 a bit more convenient, you have to get it from somewhere, host it in htmlcan put it you can download
 advantage of cdn is the user can download
 proxy servers closer to the user
 */
