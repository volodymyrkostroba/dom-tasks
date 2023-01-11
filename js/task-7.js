
const btnRef = document.querySelector('.task-7 > button');

btnRef.addEventListener('click', shoClassName);

function shoClassName(e){
    const elem = e.target.getAttribute('class')
    console.log(elem);
}



