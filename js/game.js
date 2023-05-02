const mario = document.querySelector('.mario')


const junp = () =>{
mario.classList.add('junp')

setTimeout(() => {
    mario.classList.remove('junp')
}, 500);

}


document.addEventListener('keydown',junp)