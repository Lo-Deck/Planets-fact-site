# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"


### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Planets-fact-site/blob/main/screenshot/Planets%20fact%20site-mobile.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/Planets-fact-site/blob/main/screenshot/Planets%20fact%20site-mobile-menu.png).
![screenshot tablet](https://github.com/Lo-Deck/Planets-fact-site/blob/main/screenshot/Planets%20fact%20site-tablet.png).
![screenshot desktop](https://github.com/Lo-Deck/Planets-fact-site/blob/main/screenshot/Planets%20fact%20site-desktop.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Planets-fact-site).
- Live Site URL: [Website](https://lo-deck.github.io/Planets-fact-site/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to extract data form JSON file and display the different element on the website, to add text or images.

```js
fetch('./data.json')
    .then( response => response.json())
    .then( data => array = data )
    .catch( error => console.error('Error:', error) );

...

document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[0].textContent = `${array[0].rotation}`;
document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[1].textContent = `${array[0].revolution}`;
document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[2].textContent = `${array[0].radius}`;
document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[3].textContent = `${array[0].temperature}`;
...

```

And extract SVG form JSON and display it following the size of the window user.

```js
    fetch(url) // extract svg
        .then(response => response.text())
        .then(svgCode => {

            document.querySelector('.container-svg').innerHTML = svgCode;

            if(window.innerWidth >= 704 && window.innerWidth < 1440){  
                document.querySelector('.container-svg svg').style.width = `${Number( window.getComputedStyle(document.querySelector('.container-svg svg') ).width.split('px')[0] ) * 1.6}px`;
                document.querySelector('.container-svg svg').style.height = `${Number( window.getComputedStyle(document.querySelector('.container-svg svg') ).height.split('px')[0] ) * 1.6}px`;
            }

            else if(window.innerWidth >= 1440){  
                document.querySelector('.container-svg svg').style.width = `${Number( window.getComputedStyle(document.querySelector('.container-svg svg') ).width.split('px')[0] ) * 2.6}px`;
                document.querySelector('.container-svg svg').style.height = `${Number( window.getComputedStyle(document.querySelector('.container-svg svg') ).height.split('px')[0] ) * 2.6}px`;
            }

        });


```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [FreeCodeCamp](https://www.freecodecamp.org/) - I've been learning a lot.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
