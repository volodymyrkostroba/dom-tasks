const listRef = document.querySelector('.task-5 > .list');
const titleRef = document.querySelectorAll('.list__title');
const buttonRef = document.querySelector('.task-5 > button');


listRef.addEventListener('click', changeTextHandler);
buttonRef.addEventListener('click', btnKlickHandler);

function changeTextHandler(e){
    if(e.target === e.currentTarget){
        return
    }

    e.target.textContent = "hey bro"
}


function btnKlickHandler(){
  for(let i = 0; i < titleRef.length; i +=1){
    titleRef[i].textContent = i + 1;
  }
}
