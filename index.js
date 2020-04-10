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
    $("#input").val("");
}

//url string



function getRepos(handle){
    const urlHandle = `https://api.github.com/users/${handle}/repos`


    fetch(urlHandle)

    .then(response => response.json())
    .then(responseJson => renderResults(responseJson))
    .catch(Error => alert('Something went wrong. Try again later.'));


}


//renderResults function to show the results
function renderResults(responseJson){
console.log(responseJson)
$('#repositories').empty();


for (let i=1; i <responseJson.length; i++){
    $('#repositories').append(
     `<li><h2>${[i]}-  Repository name: ${responseJson[i].name}</h2></li>
     <li>URL: <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a></li>
     <br><br>`

    )

}
// $('input').reset();
if(responseJson.length === 0){
    alert('please input a valid GitHub handle')
}
$('.hidden').removeClass('hidden');


}

$(function(){

subListener()



})