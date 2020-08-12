// ** NAVBAR COMPONENT **
const navbar = document.querySelector('.navbar');
if(navbar) {
    let navbarToggler = navbar.querySelector('.navbar-toggler');
    let navbarCollapse = navbar.querySelector('.navbar-collapse');
    // ADD CLICK NAVBAR TOGGLER FUNCTION
    if(navbarToggler) {
        navbarToggler.addEventListener('click', function(){
            if(navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                document.body.classList.remove('non-scroll');
            } else {
                navbar.classList.add('active');
                document.body.classList.add('non-scroll');
            }
        });
    }
    // ADD PADDING TO NAVBAR COLLAPSE
    if(navbarCollapse) {
        navbarCollapse.style.paddingTop = navbar.clientHeight + "px";
    }
}