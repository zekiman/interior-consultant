// ! DOM ELEMENTS //

mobileMenuIcon = document.querySelector('.menu-icon-m')

closeButton = document.querySelector('.close-btn')

container = document.querySelector('#container')

hamburgerMenu = document.querySelector('.hamburger-all-m')



// ! ADD EVENT LISTENERS

document.addEventListener('click',function(e){
    // if menu icon is clicked, hide container
    if(e.target.parentElement==mobileMenuIcon){
        hideContainer();
    }
    // if close button is clicked, hide hamburger
    if(e.target.parentElement==closeButton){
        hideHamburger();
    }
    
})


// ! FUNCTIONS

// Hide Container Function
function hideContainer(){
    container.classList.add('none');
    hamburgerMenu.classList.remove('none');
}

// Hide Hamburger Function
function hideHamburger(){
    hamburgerMenu.classList.add('none');
    container.classList.remove('none');
}