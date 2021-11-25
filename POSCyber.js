(function () {
  const viewProductButtons = document.querySelectorAll(".viewProductButton");

  for (let button of viewProductButtons) {
    button.addEventListener("click", (event) => {
      const viewProductWindow = document.createElement("div");
      viewProductWindow.innerText = "Hello";
      viewProductWindow.classList.add("viewProductWindow");
      viewProductWindow.innerText = "Hello";
      document.body.append(viewProductWindow);
      console.log("Test");
    });
  }

  document
    .querySelector(".shoppingCartButton")
    .addEventListener("click", (event) => {
      console.log("It just works");
    });
})();
