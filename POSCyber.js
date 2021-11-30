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

      const product = [{
        name: "Cortical Stack",
        image: "_assets/main/cortical-stack-main.png",
        description: "CHANGE ME PLEASE",
        options: [["Personality + Memory Backup", 6000], ["Personality Backup", 3000], ["Memory Backup", 3000]]
      }, 
      {
        name: "Stealth Field",
        image: "_assets/main/stealth-field-main.png",
        description: "CHANGE ME PLEASE",
        options: [["20%", 2000], ["50%", 3000], ["100%", 4000]] 
      },
      {
        name: "Optics",
        image: "_assets/main/optics-main.png",
        description: "CHANGE ME PLEASE",
        options: [["Thermal", 2500], ["Night Vision", 3500], ["X-Ray", 4500]]
      },
      {
       name: "Neuro",
       image: "_assets/main/neuro-main.png",
       description: "CHANGE ME PLEASE",
       options: [["Memory Expansion", 2000], ["Focus Assist", 3000], ["Comprehension Boost", 3500]]
      },
      {
        name: "Dermal",
        image: "_assets/main/dermal-main.png",
        description: "CHANGE ME PLEASE",
        options: [["Bleed Stopper", 3000], ["Cell Regeneration", 4000], ["Fireproof Coating", 4500]]
      },
      {
        name: "Skeletal",
        image: "_assets/main/skeletal-main.png",
        description: "CHANGE ME PLEASE",
        options: [["Auto Joint Lubrication", 3500], ["Fracture Repair", 4000], ["Adamantium Bones", 4500]]
      },
      {
        name: "Immune System",
        image: "_assets/main/immune-main.png",
        description: "CHANGE ME PLEASE",
        options: [["Detoxifier", 3000], ["Metabolic Boost", 3500], ["Anti-Virus", 4000]] 
      },
      {
        name: "Nervous System",
        image: "_assets/main/nervous-main.png",
        description: "CHANGE ME PLEASE",
        options: [["Pain Inhibitor", 3000], ["Reflex Tuner", 4000], ["Senses Enhancer", 4500]] 
      },
      {
        name: "Respiratory System",
        image: "_assets/main/respiratory-main.png",
        description: "CHANGE ME PLEASE",
        options: [["Bionic Lungs", 3500], ["Auto-Inhaler", 4000], ["Oxygen Calibrator", 4500]]
      },
      {
        name: "Circulatory System",
        image: "_assets/main/circulatory-main.png",
        description: "CHANGE ME PLEASE",
        options: [["Adrenaline Boost", 3500], ["Arterial Cleanser", 4000], ["Pulse Regulator", 4500]] 
      },
      {
        name: "Arms",
        image: "_assets/main/arms-main.png",
        description: "CHANGE ME PLEASE",
        options: [["Strength Boost", 5000], ["Fatigue Reducer", 5500], ["Fortified Elbows", 6000]]
      },
      {
        name: "Legs",
        image: "_assets/main/legs-main.png",
        description: "CHANGE ME PLEASE",
        options: [["Fatigue Reducer", 5000], ["Speed Boost", 5500], ["Reinforced Tendons", 6000]]
      }
      ];

      if (event.target.id === "Cortical Stack") {
        displayProduct("Cortical Stack", "_assets/main/cortical-stack-main.png", "THIS WAS CHANGED HOORAY", corticalStackArray, corticalStackPrices);
      } else if (event.target.id === "Stealth Field") {

      } else if (event.target.id === "Optics") {

      } else if (event.target.id === "Neuro") {

      } else if (event.target.id === "Dermal") {

      } else if (event.target.id === "Skeletal") {

      } else if (event.target.id === "Immune System") {

      } else if (event.target.id === "Nervous System") {

      } else if (event.target.id === "Respiratory System") {

      } else if (event.target.id === "Circulatory System") {

      } else if (event.target.id === "Arms") {

      } else if (event.target.id === "Legs") {

      };
      console.log(event.target.id);
    });
  }

  function displayProduct(name, image, description, options, prices) {
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
