const btnRef = document.querySelector('.add');
const deleteBtnRef = document.querySelector('.delete');


btnRef.addEventListener('click', toCloseBtn);

function toCloseBtn(e){
    e.target.disabled = true;
    deleteBtnRef.classList.add('delete-js')
    deleteBtnRef.addEventListener('click', toOpenBtn);
    console.log('добавили слушатель');
}


function toOpenBtn(e){
    btnRef.disabled = false;
    deleteBtnRef.classList.remove('delete-js');
    toREmove();  
}

function toREmove(){
    deleteBtnRef.removeEventListener('click',toOpenBtn);
    console.log('убираем слушатель');
}