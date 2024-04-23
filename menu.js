const $buttonMenu = document.querySelector('.menu-mobile')
const $linksMobileChangeClass = document.querySelector('.links-pages-mobile')
const $menuOverflowCloseMenu = document.querySelector('.menu-mobile-overflow')

$buttonMenu.addEventListener('click', function(){
    $linksMobileChangeClass.classList.add('menu-open')
})
$menuOverflowCloseMenu.addEventListener('click', function(){
    $linksMobileChangeClass.classList.remove('menu-open')
})