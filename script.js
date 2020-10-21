const $form = document.getElementById('main-form')

$form.addEventListener('submit', function (event) {

console.log('$form.elements[0].value)

event.preventDefult()
})