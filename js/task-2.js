const btnRef = document.querySelector('.task-2 > button');

btnRef.addEventListener('click', toToal);

function toToal(e){
    let total = Number(e.target.textContent);
    console.log(Number(e.target.textContent));
    total += 1;
    e.target.textContent = total;
}