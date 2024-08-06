/****************************************
 * This is the set of JavaScript statements that we execute inside of the
 * console against the `index.html` file.
 ****************************************/

/*
 * Selecting elements.
 */

$(document).ready(function () { // This is the jQuery shorthand for "run this code when the page is ready"
    $("h2").addClass("underline"); // an example of how you would input new classes
    $("ul").addClass("border"); // changing css with jquary directly is not preferred but it is possible
});
// 

// Returns a single element. This is because we can't every have more than
// one element with the same id. Note that we don't include a '#' for the id
var article = document.getElementById('home-page');

// Returns a list of elements. This is because we can have a number
// of <section> elements on the page
var sections = article.getElementsByTagName('section');

// Also returns a list of elements that match the class name. This is because
// unlike the ids, we can have numerous instances of elements with the same
// class names. Note that we don't include a '.' for the class
var leads = document.getElementsByClassName('lead');

// Let's look at the text content of the .lead element
var lead = leads[0];
lead.textContent;

// Very flexible way of finding elements in the DOM. Returns first element found
var article = document.querySelector('#home-page');
var section = document.querySelector('section');
var lead = document.querySelector('.lead');

// Can get all matched results. This returns a list
var sections = document.querySelectorAll('section');

// Let's look at an individual node and see it's children and it's parent
var article = document.getElementById('home-page');

article.children;
article.parentElement;
article.nextElementSibling
article.firstElementChild;
article.lastElementChild;

let section = article.firstElementChild;

/*
 * Creating new elements
 */

// Create a new li to go in the nav
var li = document.createElement('li');

// Give it a class name
li.classList.add('last');


// Change its CSS
li.style.backgroundColor = 'pink';

// Create an anchor link to go in the new li
var a = document.createElement('a');

// Give is some text
a.textContent = "Four";

a.style.color = 'white';

// Insert the anchor link into the li
li.appendChild(a);


/* 
 * Modifying the DOM
 */

// Find the ul element
var uls = document.getElementsByTagName('ul');

var ul = uls[0];

// Insert the new li element into our ul
ul.appendChild(li);

// Let's try move it up to the top of the list
var firstLi = ul.getElementsByTagName('li');
ul.insertBefore(li, firstLi);

firstLi.classList.remove('active');
// Starting to get messy

/*
 * Updating a list of elements
 * - this is where it gets painful
 */
var lis = ul[0].getElementByTagName('li');
var ul = document.getElementsByTagName('ul');
var li;
for (var i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = 'pink';
}

// Wouldn't it be great if we could do something like  ...

ul.find('li').removeClass('active').addClass('inactive').css('background-color', 'pink');

// without having to write big for loops

/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

// Select all of the anchor elements on the page using the `$` as shorthand
// for the `jQuery` function
$("a");

// The long version of the function
jQuery("a");

// Get all elements that contain a class of `card_image`
$(".card_image");

// Get all elements that contain an ID of `logoNav`
$("#logoNav");

// Get all anchors that are direct children of paragraphs
$("p>a");

// Get all anchor elements that are descendants of paragraphs
$("p a");

// Get all list item elements that are direct children of unordered lists
$("ul>li");

// Get all list item elements that are descendants of unordered lists
$("ul li");

// Get the first anchor element from the DOM
$("a:first");

// Get the last anchor element from the DOM
$("a:last");

// Select all header elements (h1, h2, h3, h4, h5, h6)
$(":header");

/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

// Get the `background-color` of all paragraphs
$("p").css("background-color");

// Get the `font-family` of all paragraphs
$("p").css("font-family");

// Change the color of the text of all list item elements
$("li").css("color", "red");

// Underline all h2 elements
$("h2").css("text-decoration", "underline");

// Add a solid border of 1px and a color of `#ccc` to all unordered lists
$("ul").css("border", "solid 1px #ccc");

// Get the HTML contained within an element with an ID of `my_footer`
$("#my_footer").html();

// Get the HTML contained within an element called `body`
$("body").html();

// Add a h1 to the `body` element
$("body").html("<h1>This is my fancy new content. Thanks jQuery, you're the best!</h1>");

// Add new text to the footer
$("#my_footer").text("This is my fancy new text. Thanks again jQuery");

// Append a new element to the end of all of the elements contained in the
// element that has an ID of `myElement`
$("#myElement").append("<p>This is a new element</p>");

// Append a span containing the copyright to the footer 
$("my_footer").append("<span>&copy; 2017.</span>")


$(document).ready(function () {
    $("#stream1_btn").on("click", function () {
        $(".stream1").toggle(500, 'swing'); //toggle() can take an integer as an argument for milliseconds
        $(".stream2").slideDown(400, 'linear'); //slideDown() can take an integer as an argument for milliseconds
        $(".stream3").slideUp('slow'); //These are the three different types of animations
        $(".stream1").slideToggle('fast');
    });
    $("#stream2_btn").mouseenter(function () { //mouseenter is a shorthand for .on("mouseenter")
        $(".stream1").hide('slow'); //hide() is a shorthand for .css("display", "none")
        $(".stream2").hide('medium'); //hide and show use slow, medium, and fast as arguments
        $(".stream3").show('fast'); //show() is a shorthand for .css("display", "block")
        $(".stream2").show(1000); //show() can also take an integer as an argument for milliseconds
    });
    $("#stream3_btn").click(function () { // uses the .click() method instead of .on()
        $(".stream1").fadeIn(500); //
        $(".stream2").fadeOut(800);
        $(".stream3").fadeTo(1000, 0.5); //fadeTo() can take two arguments, milliseconds and opacity
        $(".stream3").addClass('highlight_stream');
    });
});

//This is an example of how you would use jQuery to change the css of an element
//when a user clicks on a button. This is a simple example, but it shows how jQuery works

$('p').click(function () {
    $('p').css('color', 'red')
})

$('h2').hover(function () {
    $('h2').css('background', 'lightblue')
})

$('.card-panel').mouseenter(function () {
    $('body').css('background-color', 'black')
})

$('.card-panel').mouseleave(function () {
    $('body').css('background-color', '#e1e2e2')
})
//This is an example of how you would use jQuery to change the css of an element
//when clicked, hovered over, or when the mouse leaves the element. This is a simple example,

$('#card-panel-1').click(function () {
    $('#card-panel-1').hide('slow')
})

$('#card-panel-2').click(function () {
    $('#card-panel-2').hide('medium')
})

$('#card-panel-3').click(function () {
    $('#card-panel-3').hide('fast')
})

$('#card-panel-4').click(function () {
    $('#card-panel-4').hide(3000)
})
//This is an example of how you would use jQuery to hide an element when clicked.
// . for classes and # for ids

$("#myButton").removeClass("blueBox").addClass("border");
$("p").css("color", "blue").slideUp(2000).slideDown(2000);
//methods can be chained together to perform multiple actions on the same selection
//Chaining gives us the ability to run multiple jQuery methods on a single element while using only a single statement.

$("a").attr("href", "http://www.example.com");
//This is an example of how you would use jQuery to change the href attribute of an anchor tag
//.attr() is a method that can be used to change the attributes of an element

$('button').mouseenter(function () {
    $('button').removeClass('make-red').addClass('make-border')
})

$('button').mouseleave(function () {
    $('button').removeClass('make-border').addClass('make-red')
})
//This is an example of how you would use jQuery to remove and add classes to an element , chaining them together

$(".box").on("click", function () {
    /**
     * When we click on an element that has
     * a 'box' class, this event will be fired.
     */
    var classNames = $(this).attr("class").split(" ");
    var boxClass = classNames[0];
    var className = classNames[1];
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
        // If this object is already red, turn it black
        $("." + className).css("background-color", "#000");
    } else {
        // Else turn all elements with a box class black
        // and then change the color of all elements
        // with the same class name as the clicked element
        // to red.
        $("." + boxClass).css("background-color", "#000");
        $("." + className).css("background-color", "red");
    }
});
// An if statement that checks the background color of an element and changes it to red if it is black
// and changes it to black if it is red. This is an example of how you would use jQuery to change the css of an element

$('.card').mouseenter(function () {
    $(this).fadeTo(2000, 0.2).fadeTo(2000, 1)
})
//This is an example of how you would use jQuery to fade an element in and out when hovered over

$("div").children("p")
$("div").children()
$("#theButton").parent()
//Examples of how you would use jQuery to select elements based on their relationship to other elements
//Traversing the DOM tree is a common task when working with jQuery.

$("div").toggleClass("bigBorder")
//this is usefull for toggling classes that require to be on and off

$("button").click(function () {
    $(this).next().slideToggle('slow')
});
//next() is used to select the next sibling element of the selected element
//slideToggle() is used to show or hide the selected elements with a sliding motion

$("div").next().css("background-color", "red");
$("div").prev().css("background-color", "blue");
//next() and prev() are used to select the next and previous sibling elements of the selected element

$("h2").first().css("background-color", "yellow");
$(".contentDiv").last().css("background-color", "green");
//first() and last() are used to select the first and last element that the page finds

$("h2").siblings().css("background-color", "yellow");
//siblings() is used to select all sibling elements of the selected element

$("div").filter(".middle").css("border-color", "black");
$("div").filter("#top").addClass("selected");
//filter() is used to select elements that match a certain criteria
//filters for elements that have a class of .middle and #top

let panelColor = $(this).css("background-color");
console.log(panelColor);
$('.resetButton').css('background-color', panelColor);
//how to use variables with jQuery to store the css of an element and then use it to change the css of another element