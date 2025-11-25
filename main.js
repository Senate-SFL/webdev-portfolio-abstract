const small__nav_cont = document.querySelector('.small__nav_cont');
const nav__img = document.querySelector('.nav__img');
const nav__img_x = document.querySelector('.nav__img_x');
const has__hidden_class = nav__img_x.classList.contains('hidden');
const has__hidden_2_class = nav__img_x.classList.contains('hidden2');

nav__img.addEventListener('click', () => {
    small__nav_cont.classList.toggle('hidden');
    nav__img.classList.toggle('hidden2');
    setTimeout(() => {
        //nav__img.style.display = 'none';
        nav__img.classList.toggle('hidden');
    }, 500);

    if (has__hidden_class) {
        setTimeout(() => {
            nav__img_x.classList.toggle('hidden');
        }, 500);
    } else {
        nav__img_x.removeAttribute('display');
    }
})


nav__img_x.addEventListener('click', () => {
    small__nav_cont.classList.toggle('hidden');
    if (has__hidden_2_class) {
        nav__img_x.classList.toggle('hidden2');
    }
    //nav__img_x.classList.toggle('hidden2');
    setTimeout(() => {
        nav__img_x.classList.toggle('hidden');
    }, 500);
    nav__img.classList.toggle('hidden2');
    setTimeout(() => {
        nav__img.classList.toggle('hidden');
    }, 500);
    //nav__img.classList.toggle('hidden2');
})





document.getElementById('searchform').onsubmit = function() {
    window.location = 'http://www.google.com/search?q=site:file:///C:/Users/Anthony/VSCode_files/portfolio-sites/abstract/index.html ' + document.getElementById('test').value;
    return false;
}

