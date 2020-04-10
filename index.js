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
    
    
    fetch(urlHandle)
    .then(response => response.json())
    .then(responseJson => renderResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
    

}


//renderResults function to show the results
function renderResults(responseJson){
console.log(responseJson)
$('#repositories').empty();


for (let i=0; i <responseJson.length; i++){
    $('#repositories').append(
     <li>${responseJson.name[i]</li>

    )

}








}

$(function(){

subListener()



})