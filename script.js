// const screen = document.querySelector('.screen')
// const nums = document.querySelectorAll('.numBtn')

// nums.forEach(numberBtn => {
//     numberBtn.addEventListener('click', ()=>{
//         screen.appendNumber(numberBtn.value)
//     })
// })

let numStored = ''
let operatorStored = ''

//ELŐSZÖR PROTOTÍPUS! SEMMI DOM! 
//ALERT LOGGAL KÉRNI MINDEN EGYES SZÁMOT ÉS OPERÁTORT, ÉS ÚGY MEGCSINÁLNI, UTÁNA MÁR CSAK ÁT KELL ALAKÍTANI DOM SZABÁLYOK SZERINT*/
//ha ez megvan akkor lépésről lépésre odin projecten guide

document.addEventListener('click', e =>{
    if (e.target.matches('.numBtn')){
        const x = document.createElement('p');
        x.textContent = e.target.textContent;
        screen.appendChild(x)
    }
    (e.target.matches('#clear')) ? screen.innerHTML = '' : 
    (e.target.matches('#del')) ? deleteLast() : console.log('no action');
})
function deleteLast(){
    lastChild = document.querySelector('.screen:last-child')
    lastChild.textContent = ''

    // vagy vmi remove child? vagy a ('.screen:last-child') a ludas?
}


const num1 = document.querySelector('#num1')
const screen = document.querySelector('.screen')


