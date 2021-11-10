//상단 Search 인풋 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    //logic..
    searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder','');
});


// 년도 자동 삽입
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//2021

