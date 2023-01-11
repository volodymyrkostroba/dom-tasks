const btnRef = document.querySelector('.task-6 > button');


btnRef.addEventListener('click', chengeName);

function chengeName(){
    const arr = document.querySelectorAll('.hello');
    console.log(arr);

    arr.forEach(e => {
        e.textContent = 'hey bro'
    });
}

