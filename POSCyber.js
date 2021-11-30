(function () {
  const viewProductButtons = document.querySelectorAll(".viewProductButton");
  const displayWindow = document.querySelector(".displayWindow");
  const closeButton = document.createElement("button");
  const backButton = document.createElement("button");

  closeButton.classList.add("closeButton");
  closeButton.innerText = "X";
  backButton.innerText = "<-";

  for (let button of viewProductButtons) {
    button.addEventListener("click", (event) => {
      const productWindow = document.createElement("div");
      const addtoCartButton = document.createElement("button");
      const productName = document.createElement("h2");
      const productDescription = document.createElement("p");
      const optionSelector = document.createElement("select");
      const quantityInput = document.createElement("input");

      productWindow.classList.add("productWindow");

      addtoCartButton.classList.add("viewProductButton");
      addtoCartButton.innerText = "Add to Cart";

      productName.innerText = "Product Name";
      productDescription.innerText = "Lorem ipsum dolor sit amet.";

      quantityInput.type = "number";

      displayWindow.append(productWindow);
      productWindow.append(closeButton);
      productWindow.append(productName);
      productWindow.append(productDescription);
      productWindow.append(optionSelector);
      productWindow.append(quantityInput);
      productWindow.append(addtoCartButton);

      closeButton.addEventListener("click", (event) => {
        displayWindow.replaceChildren();
      });
    });
  }

  document
    .querySelector(".shoppingCartButton")
    .addEventListener("click", (event) => {
      const checkoutWindow = document.createElement("div");
      const cartList = document.createElement("div");
      const orderSummary = document.createElement("div");
      const paymentOptions = document.createElement("div");
      const cashButton = document.createElement("button");
      const cardButton = document.createElement("button");

      checkoutWindow.classList.add("checkoutWindow");

      cartList.classList.add("cartList");
      cartList.innerText = "Cart";

      orderSummary.classList.add("orderSummary");
      orderSummary.innerText = "Order Summary";

      paymentOptions.classList.add("paymentOptions");
      paymentOptions.innerText = "Checkout";

      cashButton.classList.add("viewProductButton");
      cashButton.innerText = "Cash";

      cardButton.classList.add("viewProductButton");
      cardButton.innerText = "Card";

      displayWindow.append(checkoutWindow);
      checkoutWindow.append(closeButton);
      checkoutWindow.append(cartList);
      checkoutWindow.append(orderSummary);
      checkoutWindow.append(paymentOptions);
      paymentOptions.append(cashButton);
      paymentOptions.append(cardButton);

      closeButton.addEventListener("click", (event) => {
        displayWindow.replaceChildren();
      });

      cashButton.addEventListener("click", (event) => {
        const cashWindow = document.createElement("div");
        const cashSubmit = document.createElement("button");
        const subtotalHeader = document.createElement("h2");
        const taxHeader = document.createElement("h2");
        const totalHeader = document.createElement("h2");
        const cashInput = document.createElement("input");

        cashWindow.classList.add("cashWindow");

        subtotalHeader.innerText = "Subtotal:";

        taxHeader.innerText = "Tax:";

        totalHeader.innerText = "Total:";

        cashInput.placeholder = "Enter Credits";
        cashInput.classList.add("cashInput");

        cashSubmit.classList.add("viewProductButton");
        cashSubmit.innerText = "Submit";

        checkoutWindow.style.display = "none";
        displayWindow.append(cashWindow);
        cashWindow.append(backButton);
        cashWindow.append(subtotalHeader);
        cashWindow.append(taxHeader);
        cashWindow.append(totalHeader);
        cashWindow.append(cashInput);
        cashWindow.append(cashSubmit);

        backButton.addEventListener("click", (event) => {
          checkoutWindow.style.display = "flex";
          cashWindow.style.display = "none";
        });
      });

      cardButton.addEventListener("click", (event) => {
        const cardWindow = document.createElement("div");
        const cardSubmit = document.createElement("button");
        const cardNumber = document.createElement("input");
        const cardExp = document.createElement("input");
        const cardCVV = document.createElement("input");

        cardWindow.classList.add("cashWindow");

        cardNumber.classList.add("cardNumber");
        cardNumber.placeholder = "XXXX XXXX XXXX XXXX";

        cardExp.classList.add("cardExpiration");
        cardExp.placeholder = "MM / YY";

        cardCVV.classList.add("cardCVV");
        cardCVV.placeholder = "CVV";

        cardSubmit.classList.add("viewProductButton");
        cardSubmit.innerText = "Submit";

        checkoutWindow.style.display = "none";
        document.body.append(cardWindow);
        cardWindow.append(backButton);
        cardWindow.append(cardNumber);
        cardWindow.append(cardExp);
        cardWindow.append(cardCVV);
        cardWindow.append(cardSubmit);

        backButton.addEventListener("click", (event) => {
          checkoutWindow.style.display = "flex";
          cardWindow.style.display = "none";
        });
      });

      cashSubmit.addEventListener("click", (event) => {
        const receiptWindow = document.createElement("div");

        receiptWindow.classList.add("receiptWindow");

        document.body.append(receiptWindow);
        cashWindow.style.display = "none";
      });

      cardSubmit.addEventListener("click", (event) => {
        const receiptWindow = document.createElement("div");

        receiptWindow.classList.add("receiptWindow");

        document.body.append(receiptWindow);
        cardWindow.style.display = "none";
      });
    });
})();
