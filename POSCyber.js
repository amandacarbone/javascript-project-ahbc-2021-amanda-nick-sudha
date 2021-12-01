(function () {
  //selecting for elements in html page
  const viewProductButtons = document.querySelectorAll(".viewProductButton");
  const displayWindow = document.querySelector(".displayWindow");
  const closeButton = document.createElement("button");
  const backButton = document.createElement("button");

  //add class to closeButton, and placeholder innerText
  closeButton.classList.add("closeButton");
  closeButton.innerText = "X";
  backButton.innerText = "<-";

  //Array of objects with each product's info
  const product = [
    {
      name: "Cortical Stack",
      image: "_assets/main/cortical-stack-main.png",
      description: "Your consciousness is downloaded to a specialized chip inserted at the base of the neck. Upon death, this data may be uploaded to an entirely new body. Virtual immortality.",
      options: [
        {
          nameOfOption: "Personality + Memory Backup",
          price: 6000,
        },
        {
          nameOfOption: "Personality Backup",
          price: 3000,
        },
        {
          nameOfOption: "Memory Backup",
          price: 3000,
        },
      ],
    },
    {
      name: "Stealth Field",
      image: "_assets/main/stealth-field-main.png",
      description: "Minor concealment to total invisibility. Please note that ANS Cybernetics waives all legal responsibility for the criminal use of stealth fields.",
      options: [
        {
          nameOfOption: "20%",
          price: 2000,
        },
        {
          nameOfOption: "50%",
          price: 3000,
        },
        {
          nameOfOption: "100%",
          price: 4000,
        },
      ],
    },
    {
      name: "Optics",
      image: "_assets/main/optics-main.png",
      description: "See the world through many different lenses. CAUTION: Only ONE optic should be active at a time. Failure may result in severe headaches and/or blindness.",
      options: [
        {
          nameOfOption: "Thermal",
          price: 2500,
        },
        {
          nameOfOption: "Night Vision",
          price: 3500,
        },
        {
          nameOfOption: "X-Ray",
          price: 4500,
        },
      ],
    },
    {
      name: "Neuro",
      image: "_assets/main/neuro-main.png",
      description: "Expand and improve cognitive function.",
      options: [
        {
          nameOfOption: "Memory Expansion",
          price: 2000,
        },
        {
          nameOfOption: "Focus Assist",
          price: 3000,
        },
        {
          nameOfOption: "Comprehension Boost",
          price: 3500,
        },
      ],
    },
    {
      name: "Dermal",
      image: "_assets/main/dermal-main.png",
      description: "Strengthen physical resistances to external hazards.",
      options: [
        {
          nameOfOption: "Bleed Stopper",
          price: 3000,
        },
        {
          nameOfOption: "Cell Regeneration",
          price: 4000,
        },
        {
          nameOfOption: "Fireproof Coating",
          price: 4500,
        },
      ],
    },
    {
      name: "Skeletal",
      image: "_assets/main/skeletal-main.png",
      description: "Structural reinforcements for limitless mobility.",
      options: [
        {
          nameOfOption: "Auto Joint Lubrication",
          price: 3500,
        },
        {
          nameOfOption: "Fracture Repair",
          price: 4000,
        },
        {
          nameOfOption: "Adamantium Bones",
          price: 4500,
        },
      ],
    },
    {
      name: "Immune System",
      image: "_assets/main/immune-main.png",
      description: "Complete protection from the inside out.",
      options: [
        {
          nameOfOption: "Detoxifier",
          price: 3000,
        },
        {
          nameOfOption: "Metabolic Boost",
          price: 3500,
        },
        {
          nameOfOption: "Anti-Virus",
          price: 4000,
        },
      ],
    },
    {
      name: "Nervous System",
      image: "_assets/main/nervous-main.png",
      description: "Awareness redefined and recalibrated.",
      options: [
        {
          nameOfOption: "Pain Inhibitor",
          price: 3000,
        },
        {
          nameOfOption: "Reflex Tuner",
          price: 4000,
        },
        {
          nameOfOption: "Senses Enhancer",
          price: 4500,
        },
      ],
    },
    {
      name: "Respiratory System",
      image: "_assets/main/respiratory-main.png",
      description: "Breathe easier with calibrated, measured function.",
      options: [
        {
          nameOfOption: "Bionic Lungs",
          price: 3500,
        },
        {
          nameOfOption: "Auto-Inhaler",
          price: 4000,
        },
        {
          nameOfOption: "Oxygen Calibrator",
          price: 4500,
        },
      ],
    },
    {
      name: "Circulatory System",
      image: "_assets/main/circulatory-main.png",
      description: "Precision control of your most vital force.",
      options: [
        {
          nameOfOption: "Adrenaline Boost",
          price: 3500,
        },
        {
          nameOfOption: "Arterial Cleanser",
          price: 4000,
        },
        {
          nameOfOption: "Pulse Regulator",
          price: 4500,
        },
      ],
    },
    {
      name: "Arms",
      image: "_assets/main/arms-main.png",
      description: "Enhance physical capability and dexterity.",
      options: [
        {
          nameOfOption: "Strength Boost",
          price: 5000,
        },
        {
          nameOfOption: "Fatigue Reducer",
          price: 5500,
        },
        {
          nameOfOption: "Fortified Elbows",
          price: 6000,
        },
      ],
    },
    {
      name: "Legs",
      image: "_assets/main/legs-main.png",
      description: "Increased power and longevity for complete mobile freedom.",
      options: [
        {
          nameOfOption: "Fatigue Reducer",
          price: 5000,
        },
        {
          nameOfOption: "Speed Boost",
          price: 5500,
        },
        {
          nameOfOption: "Reinforced Tendons",
          price: 6000,
        },
      ],
    },
  ];

  //loop to select product window
  for (let button of viewProductButtons) {
    //Event that calls displayProduct window of product clicked
    button.addEventListener("click", (event) => {
      //Event to remove all children from parent displayWindow
      closeButton.addEventListener("click", (event) => {
        displayWindow.replaceChildren();
      });

      //if statement to check what the click event's target is then call displayProduct for object in corresponding array
      if (event.target.id === "Cortical Stack") {
        displayProduct(product[0]);
      } else if (event.target.id === "Stealth Field") {
        displayProduct(product[1]);
      } else if (event.target.id === "Optics") {
        displayProduct(product[2]);
      } else if (event.target.id === "Neuro") {
        displayProduct(product[3]);
      } else if (event.target.id === "Dermal") {
        displayProduct(product[4]);
      } else if (event.target.id === "Skeletal") {
        displayProduct(product[5]);
      } else if (event.target.id === "Immune System") {
        displayProduct(product[6]);
      } else if (event.target.id === "Nervous System") {
        displayProduct(product[7]);
      } else if (event.target.id === "Respiratory System") {
        displayProduct(product[8]);
      } else if (event.target.id === "Circulatory System") {
        displayProduct(product[9]);
      } else if (event.target.id === "Arms") {
        displayProduct(product[10]);
      } else if (event.target.id === "Legs") {
        displayProduct(product[11]);
      }
    });
  }

  //Function that creates and appends elements to displayWindow
  function displayProduct(productObject) {
    //creating elements to be added to displayWindow
    const productWindow = document.createElement("div");
    const addtoCartButton = document.createElement("button");
    const productName = document.createElement("h2");
    const productDescription = document.createElement("p");
    const optionSelector = document.createElement("select");
    const quantityInput = document.createElement("input");
    const productImage = document.createElement("img");
    const productPrice = document.createElement("div");
    const option0 = document.createElement("option");
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    //give productWindow and productButton elements CSS classes and text
    productWindow.classList.add("productWindow");
    addtoCartButton.classList.add("viewProductButton");
    addtoCartButton.innerText = "Add to Cart";

    //give product name and description to corresponding elements
    productName.innerText = productObject.name;
    productDescription.innerText = productObject.description;

    //adding image to productImage element (placeholder sizing)
    productImage.src = productObject.image;
    productImage.style.height = "40px";
    productImage.style.width = "40px";

    //Set up options in select menu with proper name and price
    option0.innerText = productObject.options[0].nameOfOption;
    option0.value = productObject.options[0].price;
    option1.innerText = productObject.options[1].nameOfOption;
    option1.value = productObject.options[1].price;
    option2.innerText = productObject.options[2].nameOfOption;
    option2.value = productObject.options[2].price;

    //set price display to first option
    productPrice.innerText = productObject.options[0].price;

    //set up for quantity window
    quantityInput.type = "number";
    quantityInput.min = 1;
    quantityInput.valueAsNumber = 1;

    //append and add all elements to windows
    displayWindow.append(productWindow);
    productWindow.append(productImage);
    productWindow.append(closeButton);
    productWindow.append(productName);
    productWindow.append(productDescription);
    productWindow.append(optionSelector);
    productWindow.append(productPrice);
    productWindow.append(quantityInput);
    productWindow.append(addtoCartButton);
    optionSelector.add(option0);
    optionSelector.add(option1);
    optionSelector.add(option2);

    //changes productPrice to the price of option and resets quantity to 1
    optionSelector.onchange = function () {
      productPrice.innerText = optionSelector.value;
      quantityInput.valueAsNumber = 1;
    };

    //When quantityInput is changed multiplies and displays price * quantity
    quantityInput.addEventListener("change", (event) => {
      productPrice.innerText = `${
        quantityInput.valueAsNumber * parseInt(optionSelector.value)
      }`;
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

        backButton.classList.add("backButton");

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
