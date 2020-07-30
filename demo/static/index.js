document.addEventListener('DOMContentLoaded', function() {

    // control for hide and unhide the side bar

    const sidebar1style = document.querySelector('#sidebar1').style;
    const sidebar2style = document.querySelector('#sidebar2').style;

    document.querySelector('#sidebar1button').onclick = () => {

        sidebar2style.left = '-300px';

        if (sidebar1style.left != '0px') {
            sidebar1style.left = '0px';
        } else {
            sidebar1style.left = sidebar1style.width;
        };
        
    };
    
    document.querySelector('#sidebar2button').onclick = () => {

        sidebar1style.left = '-300px';

        if (sidebar2style.left != '0px') {
            sidebar2style.left = '0px';
        } else {
            sidebar2style.left = sidebar2style.width;
        };
        
    };

})





// document.addEventListener('DOMContentLoaded', function() {

//     // control for hide and unhide the side bar

//     document.querySelectorAll('button').forEach(button => {
//         button.onclick = function () {
//             function()
//         }
//     })
    
// })




/* animation example */
/*
document.addEventListener('DOMContentLoaded', function() {

    const h1 = document.querySelector('h1');

    h1.style.animationPlayState = 'paused'; /* or running */
/*
})
*/