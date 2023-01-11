const btnRef = document.querySelector('.task-4 > button');
const titleRef = document.querySelector('.task-4 > p');


btnRef.addEventListener('click',changeTextHandler);

function changeTextHandler(){
    titleRef.textContent = '444';
}