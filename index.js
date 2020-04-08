"use strict";


//event listener

function subListener(){
$('form').submit((event)=> {
    console.log('I see you want to submit info');
    event.preventDefault();
    getParam();
})

}


//get function gets url
function getParam(){
    let handle = $('input').val();
    console.log(handle);
    getRepos(handle);

}

//url string



function getRepos(handle){
    const urlHandle = `https://api.github.com/users/${handle}/repos`
    console.log(urlHandle);
    fetch(urlHandle)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((response) => response.json())
    .then ( (responseJson) =>renderResults(responseJson) );

}


//renderResults function to show the results


$(function(){

subListener()



})