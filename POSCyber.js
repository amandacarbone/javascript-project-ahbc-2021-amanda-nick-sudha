(function () {
  //selecting for elements in html page
  const viewProductButtons = document.querySelectorAll(".viewProductButton");
  const displayWindow = document.querySelector(".displayWindow");
  const header = document.querySelector("header");

  const closeButton = document.createElement("button");
  const backButton = document.createElement("button");
  const amountInCart = document.createElement("div");

  //Array to store what is in shopping cart
  let cartFromStorageString = window.localStorage.getItem("cart");

  let cartFromStorage = [];
  // if (cartFromStorageString != null)
  cartFromStorage = JSON.parse(cartFromStorageString);
  let shoppingCartArray = [];
  if (cartFromStorage !== null) {
    shoppingCartArray = cartFromStorage;
  }

  if (shoppingCartArray.length > 0) {
    amountInCart.innerText = shoppingCartArray.length;
    header.append(amountInCart);
  } else {
    amountInCart.remove();
  }

  amountInCart.classList.add("amountInCart");

  //add class to closeButton, and placeholder innerText
  closeButton.classList.add("closeButton");
  closeButton.innerText = "X";
  backButton.innerText = "<-";

  //Array of objects with each product's info
  const product = [
    {
      name: "Cortical Stack",
      image: "_assets/main/cortical-stack-main.png",
      cartImage: "_assets/cart-images/cortical-stack-cart.png",
      description:
        "Your consciousness is downloaded to a specialized chip inserted at the base of the neck. Upon death, this data may be uploaded to an entirely new body. Virtual immortality.",
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
      cartImage: "_assets/cart-images/stealth-field-cart.png",
      description:
        "Minor concealment to total invisibility. Please note that ANS Cybernetics waives all legal responsibility for the criminal use of stealth fields.",
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
      cartImage: "_assets/cart-images/optics-cart.png",
      description:
        "See the world through many different lenses. CAUTION: Only ONE optic should be active at a time. Failure may result in severe headaches and/or blindness.",
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
      cartImage: "_assets/cart-images/neuro-cart.png",
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
      cartImage: "_assets/cart-images/dermal-cart.png",
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
      cartImage: "_assets/cart-images/skeletal-cart.png",
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
      cartImage: "_assets/cart-images/immune-cart.png",
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
      cartImage: "_assets/cart-images/nervous-cart.png",
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
      cartImage: "_assets/cart-images/respiratory-cart.png",
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
      cartImage: "_assets/cart-images/circulatory-cart.png",
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
      cartImage: "_assets/cart-images/arms-cart.png",
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
      cartImage: "_assets/cart-images/legs-cart.png",
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

  //loop to have eventcaller work on all view product buttons
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
    // const quantityInput = document.createElement("input");
    const productImage = document.createElement("img");
    const productPrice = document.createElement("div");
    const option0 = document.createElement("option");
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const optionLabel = document.createElement("label");
    // const quantityLabel = document.createElement("label");

    //give productWindow and productButton elements CSS classes and text
    productWindow.classList.add("productWindow");
    addtoCartButton.classList.add("viewProductButton");
    addtoCartButton.innerText = "Add to Cart";

    //Sudha can you add description of this code please :)
    var addtoCartButtons = document.getElementsByClassName("viewProductButton");
    for (var i = 0; i < addtoCartButtons.length; i++) {
      addtoCartButton.addEventListener("click", addToCartClicked);
    }

    //give product name and description to corresponding elements
    productName.innerText = productObject.name;
    productDescription.innerText = productObject.description;
    productDescription.classList.add("productDescription");

    //adding image to productImage element (placeholder sizing)
    productImage.src = productObject.image;
    productImage.classList.add("productImage");

    //Set up options in select menu with proper name and price
    option0.innerText = productObject.options[0].nameOfOption;
    option0.value = productObject.options[0].price;
    option1.innerText = productObject.options[1].nameOfOption;
    option1.value = productObject.options[1].price;
    option2.innerText = productObject.options[2].nameOfOption;
    option2.value = productObject.options[2].price;
    optionSelector.style.marginBottom = "10px";

    //Label for option dropdown
    optionLabel.innerText = "Options:";

    //Label for quantity
    // quantityLabel.innerText = "Quantity:";

    //set price display to first option
    productPrice.innerText = `Price: CR ${productObject.options[0].price}`;
    productPrice.style.marginBottom = "10px";

    //set up for quantity window
    // quantityInput.type = "number";
    // quantityInput.min = 1;
    // quantityInput.valueAsNumber = 1;
    // quantityInput.style.marginBottom = "10px";

    //append and add all elements to windows
    displayWindow.append(productWindow);
    productWindow.append(productImage);
    productWindow.append(closeButton);
    productWindow.append(productName);
    productWindow.append(productDescription);
    productWindow.append(optionLabel);
    productWindow.append(optionSelector);
    productWindow.append(productPrice);
    // productWindow.append(quantityLabel);
    // productWindow.append(quantityInput);
    productWindow.append(addtoCartButton);
    optionSelector.add(option0);
    optionSelector.add(option1);
    optionSelector.add(option2);

    //changes productPrice to the price of option and resets quantity to 1
    // optionSelector.onchange = function () {
    //   productPrice.innerText = `Price: CR ${optionSelector.value}`;
    //   quantityInput.valueAsNumber = 1;
    // };

    //When quantityInput is changed multiplies and displays price * quantity
    // quantityInput.addEventListener("change", (event) => {
    //   productPrice.innerText = `Price: CR${
    //     quantityInput.valueAsNumber * parseInt(optionSelector.value)
    //   }`;
    // });

    //Sudha can you add a description to this function please :)
    function addToCartClicked(event) {
      var button = event.target;
      addItemToCart(productObject);
      if (shoppingCartArray.length > 0) {
        amountInCart.innerText = shoppingCartArray.length;
        header.append(amountInCart);
      } else {
        amountInCart.remove();
      }
    }

    //function called in addToCartClicked that will push product info to shoppingCartArray
    function addItemToCart(productObject) {
      if (optionSelector.value === option0.value) {
        productObject.optionSelected = option0.innerText;
        productObject.optionPrice = option0.value;
      } else if (optionSelector.value === option1.value) {
        productObject.optionSelected = option1.innerText;
        productObject.optionPrice = option1.value;
      } else if (optionSelector.value === option2.value) {
        productObject.optionSelected = option2.innerText;
        productObject.optionPrice = option2.value;
      }
      shoppingCartArray.push(productObject);
      window.localStorage.setItem("cart", JSON.stringify(shoppingCartArray));
    }
  }

  //event listener to open Cart window
  document
    .querySelector(".shoppingCartButton")
    .addEventListener("click", (event) => {
      //creating elements in shopping cart
      const checkoutWindow = document.createElement("div");
      const cartList = document.createElement("div");
      const orderSummary = document.createElement("div");
      const paymentOptions = document.createElement("div");
      const cashButton = document.createElement("button");
      const cardButton = document.createElement("button");
      const shoppingCartTable = document.createElement("table");
      const orderSummaryTable = document.createElement("table");

      //Holds shoppingCartTable allowing for responsiveness
      const shoppingCartTableContainer = document.createElement("div");

      //adding CSS to checkout window
      checkoutWindow.classList.add("checkoutWindow");

      //adding CSS to CartList header
      cartList.classList.add("cartList");
      cartList.innerText = "Cart";

      //adding CSS to shoppingCartTable
      shoppingCartTable.classList.add("shoppingCartTable");

      //adding CSS to ShoppingCartTableContainer
      shoppingCartTableContainer.classList.add("shoppingCartTableContainer");

      //adding CSS to Order Summary Header
      orderSummary.classList.add("orderSummary");
      orderSummary.innerText = "Order Summary";

      //adds CSS to orderSummaryTable
      orderSummaryTable.classList.add("orderSummaryTable");

      //adding CSS to payment options box
      paymentOptions.classList.add("paymentOptions");
      paymentOptions.innerText = "Checkout";

      //adding CSS to cash button
      cashButton.classList.add("viewProductButton");
      cashButton.innerText = "Cash";

      //adding CSS to card button
      cardButton.classList.add("viewProductButton");
      cardButton.innerText = "Card";

      //setting up table in checkout window
      const shoppingCartHeaderRow = shoppingCartTable.insertRow(0);

      //Add header to table row 0
      const shoppingCartImageHeader = document.createElement("th");
      shoppingCartHeaderRow.append(shoppingCartImageHeader);

      //Add header to table row 0
      const shoppingCartProductNameHeader = document.createElement("th");
      shoppingCartHeaderRow.append(shoppingCartProductNameHeader);

      //Add header to table row 0
      const shoppingCartOptionHeader = document.createElement("th");
      shoppingCartHeaderRow.append(shoppingCartOptionHeader);

      //Add header to table row 0
      const shoppingCartPriceHeader = document.createElement("th");
      shoppingCartHeaderRow.append(shoppingCartPriceHeader);

      let subtotal = 0;
      let tax = 0;
      let total = 0;

      //Populates table with info from shoppingCartArray
      for (let row = 0; row < shoppingCartArray.length; row++) {
        //creates new rows in the table based on how long shoppingCartArray is
        let newRow = shoppingCartTable.insertRow(row + 1);

        //creates and populates cells for the 4 columns of the shoppingCartTable
        let cell0 = newRow.insertCell(0);
        cell0.innerHTML = "<img src=" + shoppingCartArray[row].cartImage + ">";
        let cell1 = newRow.insertCell(1);
        cell1.innerHTML = shoppingCartArray[row].name;
        let cell2 = newRow.insertCell(2);
        cell2.innerHTML = shoppingCartArray[row].optionSelected;
        let cell3 = newRow.insertCell(3);
        cell3.innerHTML = `<button id='${row}' class='removeButton'>Remove</button>`;
        let cell4 = newRow.insertCell(4);
        cell4.innerHTML = shoppingCartArray[row].optionPrice;

        //calculates subtotal price of items in cart before tax
        subtotal += parseInt(shoppingCartArray[row].optionPrice);
      }

      //calculates tax for orderSummary
      tax = subtotal * 0.1;

      //calculates total for orderSummary
      total = tax + subtotal;

      //populates orderSummary with subtotal, tax, and total
      let subtotalRow = orderSummaryTable.insertRow(0);
      let taxRow = orderSummaryTable.insertRow(1);
      let totalRow = orderSummaryTable.insertRow(2);

      let subtotalCell0 = subtotalRow.insertCell(0);
      subtotalCell0.innerText = "Subtotal:";
      let taxCell0 = taxRow.insertCell(0);
      taxCell0.innerText = "Tax:";
      let totalCell0 = totalRow.insertCell(0);
      totalCell0.innerText = "Total:";

      let subtotalCell1 = subtotalRow.insertCell(1);
      subtotalCell1.innerText = `CR${subtotal}`;
      let taxCell1 = taxRow.insertCell(1);
      taxCell1.innerText = `CR${tax}`;
      let totalCell1 = totalRow.insertCell(1);
      totalCell1.innerText = `CR${total}`;

      //append elements to CheckOut Window
      displayWindow.append(checkoutWindow);
      checkoutWindow.append(closeButton);
      checkoutWindow.append(cartList);
      checkoutWindow.append(shoppingCartTableContainer);
      shoppingCartTableContainer.append(shoppingCartTable);
      checkoutWindow.append(orderSummary);
      checkoutWindow.append(orderSummaryTable);
      checkoutWindow.append(paymentOptions);
      paymentOptions.append(cashButton);
      paymentOptions.append(cardButton);

      const removeButtons = document.querySelectorAll(".removeButton");

      console.log(removeButtons);
      for (let removeButton of removeButtons) {
        removeButton.addEventListener("click", (event) => {
          console.log(shoppingCartArray + "before");

          shoppingCartArray.splice(parseInt(event.target.id), 1);
          console.log(shoppingCartArray + "after");
        });
      }

      //Event listener on close button to close checkout window
      closeButton.addEventListener("click", (event) => {
        displayWindow.replaceChildren();
      });

      //Event listener to show cash window
      cashButton.addEventListener("click", (event) => {
        //creating elements for cash window
        const cashWindow = document.createElement("div");
        const cashSubmit = document.createElement("button");
        const subtotalHeader = document.createElement("h2");
        const taxHeader = document.createElement("h2");
        const totalHeader = document.createElement("h2");
        const cashInput = document.createElement("input");
        const creditInputLabel = document.createElement("label");

        //Add CSS to cash window
        cashWindow.classList.add("cashWindow");

        //Changing inner text of elements to show
        subtotalHeader.innerText = `Subtotal: CR${subtotal}`;
        taxHeader.innerText = `Tax: CR${tax}`;
        totalHeader.innerText = `Total: CR${total}`;

        //Setting placeholder, CSS, and innerText for enter credit input
        cashInput.placeholder = "Enter Credits";
        cashInput.classList.add("cashInput");
        creditInputLabel.innerText = "Enter Credits:";

        //Adding CSS and innertext for Submit button
        cashSubmit.classList.add("viewProductButton");
        cashSubmit.innerText = "Submit";

        //Adding CSS to back button
        backButton.classList.add("backButton");

        //hides checkout window when cash button is clicked
        checkoutWindow.style.display = "none";

        //appends cashWindow to displayWindow when cash button is clicked
        displayWindow.append(cashWindow);
        cashWindow.append(backButton);
        cashWindow.append(subtotalHeader);
        cashWindow.append(taxHeader);
        cashWindow.append(totalHeader);
        cashWindow.append(creditInputLabel);
        cashWindow.append(cashInput);
        cashWindow.append(cashSubmit);

        //checks cash value entered by user under three conditions: not enough, exact, and over with change back
        cashSubmit.addEventListener("click", (event) => {
          if (parseInt(cashInput.value) < total) {
            alert("Please enter more credits.");
          } else if (parseInt(cashInput.value) === total) {
            const receiptWindow = document.createElement("div");
            const orderConfirmation = document.createElement("h2");
            const receiptTotal = document.createElement("h2");
            const receiptTableContainer = document.createElement("div");
            const receiptTable = document.createElement("table");

            //populates list of items purchased in receiptWindow
            for (let row = 0; row < shoppingCartArray.length; row++) {
              let receiptTableRow = receiptTable.insertRow(row);
              let receiptCell0 = receiptTableRow.insertCell(0);
              receiptCell0.innerHTML =
                "<img src=" + shoppingCartArray[row].cartImage + ">";
              let receiptCell1 = receiptTableRow.insertCell(1);
              receiptCell1.innerHTML = shoppingCartArray[row].name;
              let receiptCell2 = receiptTableRow.insertCell(2);
              receiptCell2.innerHTML = shoppingCartArray[row].optionSelected;
            }

            //adds order confirmation message to receiptWindow
            orderConfirmation.innerText = "Order Confirmed";

            //adds total price of purchase to receiptWindow
            receiptTotal.innerText = `Total: CR${total}`;

            //adds CSS to receiptWindow
            receiptWindow.classList.add("receiptWindow");

            //adds CSS to receiptTable
            receiptTable.classList.add("receiptTable");

            //adds CSS to receiptTableContainer enabling responsiveness
            receiptTableContainer.classList.add("receiptTableContainer");

            displayWindow.append(receiptWindow);
            receiptWindow.append(orderConfirmation);
            receiptWindow.append(receiptTableContainer);
            receiptTableContainer.append(receiptTable);
            receiptWindow.append(receiptTotal);
          } else if (parseInt(cashInput.value) > total) {
            const changeBack = parseInt(cashInput.value) - total;
            const cashReceiptWindow = document.createElement("div");
            const receiptTotal = document.createElement("h2");
            const receiptChange = document.createElement("h3");
            const orderConfirmation = document.createElement("h2");
            const receiptTableContainer = document.createElement("div");
            const receiptTable = document.createElement("table");

            //populates list of items purchased in receiptWindow
            for (let row = 0; row < shoppingCartArray.length; row++) {
              let receiptTableRow = receiptTable.insertRow(row);
              let receiptCell0 = receiptTableRow.insertCell(0);
              receiptCell0.innerHTML =
                "<img src=" + shoppingCartArray[row].cartImage + ">";
              let receiptCell1 = receiptTableRow.insertCell(1);
              receiptCell1.innerHTML = shoppingCartArray[row].name;
              let receiptCell2 = receiptTableRow.insertCell(2);
              receiptCell2.innerHTML = shoppingCartArray[row].optionSelected;
            }

            //adds order confirmation message to receiptWindow
            orderConfirmation.innerText = "Order Confirmed";

            //adds total price of purchase to receiptWindow
            receiptTotal.innerText = `Total: CR${total}`;

            //adds value entered by user and the change given back
            receiptChange.innerText = `You entered CR${cashInput.value}. Your change is CR${changeBack}.`;

            //adds CSS to receiptTable
            receiptTable.classList.add("receiptTable");

            //adds CSS to receiptTableContainer enabling responsiveness
            receiptTableContainer.classList.add("receiptTableContainer");

            //adds CSS to receiptWindow
            cashReceiptWindow.classList.add("receiptWindow");

            displayWindow.append(cashReceiptWindow);
            cashReceiptWindow.append(closeButton);
            cashReceiptWindow.append(orderConfirmation);
            cashReceiptWindow.append(receiptTableContainer);
            receiptTableContainer.append(receiptTable);
            cashReceiptWindow.append(receiptTotal);
            cashReceiptWindow.append(receiptChange);
          }
        });

        //When back button is pressed redisplay checkoutwindow
        backButton.addEventListener("click", (event) => {
          checkoutWindow.style.display = "flex";
          cashWindow.style.display = "none";
        });
      });

      //Event listener to open card window when card is clicked
      cardButton.addEventListener("click", (event) => {
        //Creating elements for card window
        const cardSubtotalHeader = document.createElement("h2");
        const cardTaxHeader = document.createElement("h2");
        const cardTotalHeader = document.createElement("h2");
        const cardWindow = document.createElement("div");
        const cardSubmit = document.createElement("button");
        const cardNumber = document.createElement("input");
        const cardExpContainer = document.createElement("div");
        const cardExpMonth = document.createElement("input");
        const cardExpYear = document.createElement("input");
        const cardCVV = document.createElement("input");
        const cardNumberLabel = document.createElement("label");
        const expDateLabel = document.createElement("label");
        const cvvLabel = document.createElement("label");

        //add CSS to cardWindow
        cardWindow.classList.add("cashWindow");

        cardSubtotalHeader.innerText = `Subtotal: CR${subtotal}`;
        cardTaxHeader.innerText = `Tax: CR${tax}`;
        cardTotalHeader.innerText = `Total: CR${total}`;

        //add CSS, placeholder, and innerText to cardNumber input
        cardNumber.classList.add("cardNumber");
        cardNumber.placeholder = "XXXXXXXXXXXXXXXX";
        cardNumberLabel.innerText = "Card Number:";

        //add CSS, Placeholder, and Innertext to Expiration date input
        cardExpMonth.classList.add("cardExpiration");
        cardExpMonth.placeholder = "MM";
        expDateLabel.innerText = "Expiration Date (MM/YY):";

        cardExpYear.classList.add("cardExpiration");
        cardExpYear.placeholder = "YYYY";

        //add CSS, Placeholder, and innertext to CVV input
        cardCVV.classList.add("cardCVV");
        cardCVV.placeholder = "CVV";
        cvvLabel.innerText = "CVV:";

        //add CSS and Innertext to Submit button
        cardSubmit.classList.add("viewProductButton");
        cardSubmit.innerText = "Submit";

        //Hide checkoutWindow from display when card button is clicked
        checkoutWindow.style.display = "none";

        //append cardWindow to displayWindow
        displayWindow.append(cardWindow);
        cardWindow.append(backButton);
        cardWindow.append(cardSubtotalHeader);
        cardWindow.append(cardTaxHeader);
        cardWindow.append(cardTotalHeader);
        cardWindow.append(cardNumberLabel);
        cardWindow.append(cardNumber);
        cardWindow.append(expDateLabel);
        cardWindow.append(cardExpContainer);
        cardExpContainer.append(cardExpMonth);
        cardExpContainer.append(cardExpYear);
        cardWindow.append(cvvLabel);
        cardWindow.append(cardCVV);
        cardWindow.append(cardSubmit);

        //event listener for clicking card submit button brings us receipt window
        cardSubmit.addEventListener("click", (event) => {
          //variables to validate card information is entered in correct format
          const cardNumberValidator = cardNumber.value;
          const expirationValidatorMonth = parseInt(cardExpMonth.value);
          const expirationValidatorYear = cardExpYear.value;
          const cvvValidator = cardCVV.value;

          //If the cardnumber is 16 digits open receipt else alert card number is wrong
          if (cardNumberValidator.length === 16) {
            //if the expiration month is between 1 and 12 open receipt window else alert invalid month
            if (expirationValidatorMonth > 0 && expirationValidatorMonth < 13) {
              //if the expiration year is 4 digits long and the year is greater than or equal to current year open receipt window else alert invalid year
              if (
                expirationValidatorYear.length === 4 &&
                expirationValidatorYear >= new Date().getFullYear()
              ) {
                //if the cvv is 3 digits long open receipt window else alert invalid cvv
                if (cvvValidator.length === 3) {
                  //creating elements for card receipt window
                  const cardReceiptWindow = document.createElement("div");
                  const cardOrderConfirmation = document.createElement("h2");
                  const cardReceiptTotal = document.createElement("h2");
                  const cardReceiptTableContainer =
                    document.createElement("div");
                  const cardReceiptTable = document.createElement("table");

                  //populates list of items purchased in receiptWindow
                  for (let row = 0; row < shoppingCartArray.length; row++) {
                    let cardReceiptTableRow = cardReceiptTable.insertRow(row);
                    let cardReceiptCell0 = cardReceiptTableRow.insertCell(0);
                    cardReceiptCell0.innerHTML =
                      "<img src=" + shoppingCartArray[row].cartImage + ">";
                    let cardReceiptCell1 = cardReceiptTableRow.insertCell(1);
                    cardReceiptCell1.innerHTML = shoppingCartArray[row].name;
                    let cardReceiptCell2 = cardReceiptTableRow.insertCell(2);
                    cardReceiptCell2.innerHTML =
                      shoppingCartArray[row].optionSelected;
                  }

                  //adds order confirmation message to receiptWindow
                  cardOrderConfirmation.innerText = "Order Confirmed";

                  //adds total price of purchase to receiptWindow
                  cardReceiptTotal.innerText = `Total: CR${total}`;

                  //adding style to cardReceiptWindow
                  cardReceiptWindow.classList.add("receiptWindow");

                  //adds CSS to receiptTable
                  cardReceiptTable.classList.add("receiptTable");

                  //adds CSS to receiptTableContainer enabling responsiveness
                  cardReceiptTableContainer.classList.add(
                    "receiptTableContainer"
                  );

                  //append elements to display window and cardWindow
                  displayWindow.append(cardReceiptWindow);
                  cardReceiptWindow.append(closeButton);
                  cardReceiptWindow.append(cardOrderConfirmation);
                  cardReceiptWindow.append(cardReceiptTableContainer);
                  cardReceiptTableContainer.append(cardReceiptTable);
                  cardReceiptWindow.append(cardReceiptTotal);
                } else {
                  alert("Invalid CVV. Please enter card information again.");
                }
              } else {
                alert("Invalid year. Please enter card information again.");
              }
            } else {
              alert("Invalid month. Please enter card information again.");
            }
          } else {
            alert("Invalid card number. Please enter card information again.");
          }
        });

        //Event listener for back button - hides card window and displays checkout window (might need to change)
        backButton.addEventListener("click", (event) => {
          checkoutWindow.style.display = "flex";
          cardWindow.style.display = "none";
        });
      });

      // cashSubmit.addEventListener("click", (event) => {
      //   const receiptWindow = document.createElement("div");

      //   receiptWindow.classList.add("receiptWindow");

      //   document.body.append(receiptWindow);
      //   cashWindow.style.display = "none";
      // });

      // cardSubmit.addEventListener("click", (event) => {
      //   const receiptWindow = document.createElement("div");

      //   receiptWindow.classList.add("receiptWindow");

      //   document.body.append(receiptWindow);
      //   cardWindow.style.display = "none";
      // });
    });
  function addItemsToCart() {}
})();
