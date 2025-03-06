
let array;


const fetchSVG = (url) => {


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

}



/* OPEN MENU */

const btnMenu = document.querySelector('.button-nav');

let isBtnMenuClicked = false;

btnMenu.addEventListener('click', () => {

    isBtnMenuClicked = !isBtnMenuClicked;

    if(isBtnMenuClicked){
        document.querySelector('.nav-menu').style.display = 'block';
        document.querySelector('.main-container').style.display = 'none';
        document.querySelector('.button-nav .hamburger').style.filter = 'opacity(0.2)';
        document.querySelector('.line').style.display = 'none';
    }

    else{
        document.querySelector('.nav-menu').style.display = 'none';
        document.querySelector('.main-container').style.display = 'block';
        document.querySelector('.button-nav .hamburger').style.filter = 'opacity(1.0)';
        document.querySelector('.line').style.display = 'block';
    }

});

/****/


fetch('./data.json')
    .then( response => response.json())
    .then( data => array = data )
    .catch( error => console.error('Error:', error) );



fetch('./data.json')
    .then( response => response.json())
    .then( data => array = data )
    .then( () => {

            document.querySelector('.geology').style.display = 'none';

            document.querySelector('.container-text .title').textContent = `${array[0].name}`;
            document.querySelector('.container-text .text').textContent = `${array[0].overview.content}`;
            document.querySelector('.container-text .link a').href = `${array[0].overview.source}`;
        
            document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[0].textContent = `${array[0].rotation}`;
            document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[1].textContent = `${array[0].revolution}`;
            document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[2].textContent = `${array[0].radius}`;
            document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[3].textContent = `${array[0].temperature}`;
        
        
            document.querySelectorAll('.button-feature')[0].classList.add('selected');   
            document.querySelectorAll('.button-feature')[1].classList.remove('selected');     
            document.querySelectorAll('.button-feature')[2].classList.remove('selected');
        
            document.querySelectorAll('.button-feature')[1].style.background = `transparent`;     
            document.querySelectorAll('.button-feature')[2].style.background = `transparent`;


            
            if(window.innerWidth < 704){

                isBtnMenuClicked = false;

                document.querySelector('.nav-menu').style.display = 'none';
                document.querySelector('.main-container').style.display = 'block';
                document.querySelector('.button-nav .hamburger').style.filter = 'opacity(1.0)';
                document.querySelector('.line').style.display = 'block';
                
                document.querySelector('.selected').style.borderBottomColor = `var(--color-${array[0].name})`;

            }

            else if(window.innerWidth >= 704 && window.innerWidth < 1440){ 

                document.querySelector('.selected').style.background = `var(--color-${array[0].name})`;

                for(let i = 0; i < document.querySelectorAll('.li-planet').length; i++){
                    i === 0 ? document.querySelectorAll('.li-planet')[i].classList.add('selected-desktop') : document.querySelectorAll('.li-planet')[i].classList.remove('selected-desktop');                
                }  

            }

            else if(window.innerWidth >= 1440){ 

                document.querySelector('.selected').style.background = `var(--color-${array[0].name})`;

                for(let i = 0; i < document.querySelectorAll('.li-planet').length; i++){
                    i === 0 ? document.querySelectorAll('.li-planet')[i].classList.add('selected-desktop') : document.querySelectorAll('.li-planet')[i].classList.remove('selected-desktop');                
                }   

                document.querySelector('.selected-desktop').style.borderTopColor = `var(--color-${array[0].name})`; 

            }

            fetchSVG(array[0].images.planet);

        }


    )
    .catch( error => console.error('Error:', error) );


let indexArray = 0;



document.querySelectorAll('.li-planet').forEach( (item, index) => {

    item.addEventListener('click', () => {

        indexArray = index;

        document.querySelector('.geology').style.display = 'none';

        document.querySelector('.container-text .title').textContent = `${array[index].name}`;
        document.querySelector('.container-text .text').textContent = `${array[index].overview.content}`;
        document.querySelector('.container-text .link a').href = `${array[index].overview.source}`;

        document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[0].textContent = `${array[index].rotation}`;
        document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[1].textContent = `${array[index].revolution}`;
        document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[2].textContent = `${array[index].radius}`;
        document.querySelectorAll('.list-feature .li-feature span:nth-of-type(2)')[3].textContent = `${array[index].temperature}`;


        document.querySelectorAll('.button-feature')[0].classList.add('selected');   
        document.querySelectorAll('.button-feature')[1].classList.remove('selected');     
        document.querySelectorAll('.button-feature')[2].classList.remove('selected');

        document.querySelectorAll('.button-feature')[1].style.background = `transparent`;     
        document.querySelectorAll('.button-feature')[2].style.background = `transparent`;


        if(window.innerWidth < 704){

            isBtnMenuClicked = false;

            document.querySelector('.nav-menu').style.display = 'none';
            document.querySelector('.main-container').style.display = 'block';
            document.querySelector('.button-nav .hamburger').style.filter = 'opacity(1.0)';
            document.querySelector('.line').style.display = 'block';
            
            document.querySelector('.selected').style.borderBottomColor = `var(--color-${array[index].name})`;

        }

        else if(window.innerWidth >= 704 && window.innerWidth < 1440){ 

            document.querySelector('.selected').style.background = `var(--color-${array[index].name})`;

            for(let i = 0; i < document.querySelectorAll('.li-planet').length; i++){
                i ===  index ? document.querySelectorAll('.li-planet')[i].classList.add('selected-desktop') : document.querySelectorAll('.li-planet')[i].classList.remove('selected-desktop');                
            }  

        }

        else if(window.innerWidth >= 1440){ 

            document.querySelector('.selected').style.background = `var(--color-${array[index].name})`;

            for(let i = 0; i < document.querySelectorAll('.li-planet').length; i++){
                i ===  index ? document.querySelectorAll('.li-planet')[i].classList.add('selected-desktop') : document.querySelectorAll('.li-planet')[i].classList.remove('selected-desktop');                
            }   

            document.querySelector('.selected-desktop').style.borderTopColor = `var(--color-${array[index].name})`; 

        }

        fetchSVG(array[index].images.planet);

    });


});


document.querySelectorAll('.button-feature').forEach( (button, num) => {

    button.addEventListener('click', () => {

        document.querySelector('.geology').style.display = 'none';

        for(let i = 0; i < document.querySelectorAll('.button-feature').length; i++){

            if(i === num){
                document.querySelectorAll('.button-feature')[i].classList.add('selected');
            }
            else{
                document.querySelectorAll('.button-feature')[i].classList.remove('selected');
                document.querySelectorAll('.button-feature')[i].style.background = 'transparent';
            }

        }

        switch(num){

            case 0:

                document.querySelector('.container-text .text').textContent = `${array[indexArray].overview.content}`;
                document.querySelector('.container-text .link a').href = `${array[indexArray].overview.source}`;
                fetchSVG(array[indexArray].images.planet);

                if(window.innerWidth >= 704){
                    document.querySelectorAll('.button-feature')[num].style.background = `var(--color-${array[indexArray].name})`;
                }
                else{
                    document.querySelector('.selected').style.borderBottomColor = `var(--color-${array[indexArray].name})`;
                }

                document.querySelector('.geology').style.display = 'none';
                break;


            case 1:

                document.querySelector('.container-text .text').textContent = `${array[indexArray].structure.content}`;
                document.querySelector('.container-text .link a').href = `${array[indexArray].structure.source}`;
                fetchSVG(array[indexArray].images.internal);

                if(window.innerWidth >= 704){
                    document.querySelectorAll('.button-feature')[num].style.background = `var(--color-${array[indexArray].name})`;

                }
                else{
                    document.querySelector('.selected').style.borderBottomColor = `var(--color-${array[indexArray].name})`;
                }

                document.querySelector('.geology').style.display = 'none';
                break;


            case 2:

                document.querySelector('.container-text .text').textContent = `${array[indexArray].geology.content}`;
                document.querySelector('.container-text .link a').href = `${array[indexArray].geology.source}`;
                fetchSVG(array[indexArray].images.planet);

                if(window.innerWidth >= 704){    
                    document.querySelectorAll('.button-feature')[num].style.background = `var(--color-${array[indexArray].name})`;
                }
                else{
                    document.querySelector('.selected').style.borderBottomColor = `var(--color-${array[indexArray].name})`;
                }

                document.querySelector('.geology').src = `${array[indexArray].images.geology}`;
                document.querySelector('.geology').style.display = 'block';

                break;

        }

    });


});

