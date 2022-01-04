
function chek() {
    let chbox = document.getElementById('1');
    let card = document.querySelectorAll('#target')


    
    if (chbox.checked ) {
        for (let key of card) {
             key.classList.add('none')
         }
        }
    else {
        for (let key of card) {
            key.classList.remove('none')
         }
    }
}

console.log(chek())

// function check () {
//     let chbox = document.getElementById('1');
//     let answer = "";


//         if (chbox.checked ) {
//             return  answer = true;
//             }
//         else {
//            return answer = false;
//     }
// }
    
// console.log(check())
 