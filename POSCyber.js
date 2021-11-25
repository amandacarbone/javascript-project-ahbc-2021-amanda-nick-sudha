(function () {

const viewProductButtons = document.querySelectorAll('.viewProductButton');
const viewProductWindow = document.createElement('div');

for(let button of viewProductButtons) {
    button.addEventListener('click', event => {
        viewProductWindow.classList.add('.viewProduct');
        document.body.append('div');
        
    });
};

document.querySelector('.shoppingCartButton').addEventListener('click', event => {
    console.log('It just works');
})

})();
