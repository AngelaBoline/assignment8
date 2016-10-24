function getAuthorAndYearString (author, year){
	//return 'This speech was written by ' + (author) + ' in ' + (year) + '.' + '<br>' + '<br>'; 
	document.getElementById('ConsoleDisplay').innerHTML += 'This speech was written by ' + (author) + ' in ' + (year) + '.' + '<br>' + '<br>';
};


function displayBCEString (BCE) {
	if(BCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.<br>' + '<br>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br>' + '<br>';
  }

};


function getOldestOrYoungestString () {

};

//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  //document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '<br>';
  getAuthorAndYearString(speechesArray[0].author, speechesArray[0].year);

  //if(speechesArray[0].yearIsBCE === true){
  //  document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.<br>';
  //}else{
  //  document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br>';
  //}
  displayBCEString(speechesArray[0].yearIsBCE);


  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[0].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  //document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '<br>';
  getAuthorAndYearString(speechesArray[1].author, speechesArray[1].year);


  //if(speechesArray[1].yearIsBCE === true){
  //  document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.<br>';
  //}else{
  //  document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br>';
  //}
  displayBCEString(speechesArray[1].yearIsBCE);


  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[1].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  //document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '<br>';
  getAuthorAndYearString(speechesArray[2].author, speechesArray[2].year);

  //if(speechesArray[2].yearIsBCE === true){
    //document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.<br>';
  //}else{
    //document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br>';
  //}
  displayBCEString(speechesArray[2].yearIsBCE);


  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[2].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }
});


/* 
1. Even though it only takes one line already, we can make our first line (that displays who wrote the speech and when) 
a bit more efficient by using a function to do the same thing. Create a function that accepts one parameter. 
Let’s call it “getAuthorAndYearString”. In this function you should accept one data item from the array and return 
a string that looks like this:

This speech was written by [author name] in [speech year]
 
When you’ve made your function, set innerHTML equal to the value it returns in the first line of each nav button 
handler by passing in the data item from the speechesArray that corresponds to that button.

2. Next let’s use a similar approach to display the BCE value. Create a function called “displayBCEString” that accepts 
one parameter. We will pass in to the function the boolean value for wether each data object in the speechesArray is 
BCE or not. Inside the function, check if the value of the parameter that was passed in is true or not. Then write a 
string detailing the result to the #ConsoleDisplay element’s innerHTML property, just as you did in the conditional 
inside of each nav button handler.
 
Now, replace the conditional code block in your nav button handler with a call to our new function, passing in the BCE 
value for the appropriate data object from speechesArray. 
 
3. Finally, let’s consolidate the code required to display whether a speech is the oldest or most recent of the set.
 
Start by creating a function called “getOldestOrYoungestString” that accepts a data object. Use the code from your nav 
button handlers that sets up oldest and newest variables, runs through the speechesArray with a FOR loop, and then checks 
ldest or newest against the year property of a data object. Make sure you are checking the year property of the data 
object that was passed in as a parameter of the function.
 
Your function should return a string that either says the data object is the oldest or the most recent. Be careful to 
return a string value for every potential case - the data object passed in to the function may not be either the oldest 
or the youngest.
 
When your function is ready, use the same approach you did for the author and year to display the resulting string to the
 user in the innerHTML attribute of the #ConsoleDisplay element.


*/