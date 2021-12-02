(function () {
  //selecting for elements in html page
  const viewProductButtons = document.querySelectorAll(".viewProductButton");
  const displayWindow = document.querySelector(".displayWindow");
  const closeButton = document.createElement("button");
  const backButton = document.createElement("button");

  //Array to store what is in shopping cart
  let shoppingCartArray = [];

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
    const optionLabel = document.createElement("label");
    const quantityLabel = document.createElement("label");

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
    quantityLabel.innerText = "Quantity:";

    //set price display to first option
    productPrice.innerText = `Price: CR${productObject.options[0].price}`;
    productPrice.style.marginBottom = "10px";

    //set up for quantity window
    quantityInput.type = "number";
    quantityInput.min = 1;
    quantityInput.valueAsNumber = 1;
    quantityInput.style.marginBottom = "10px";

    //append and add all elements to windows
    displayWindow.append(productWindow);
    productWindow.append(productImage);
    productWindow.append(closeButton);
    productWindow.append(productName);
    productWindow.append(productDescription);
    productWindow.append(optionLabel);
    productWindow.append(optionSelector);
    productWindow.append(productPrice);
    productWindow.append(quantityLabel);
    productWindow.append(quantityInput);
    productWindow.append(addtoCartButton);
    optionSelector.add(option0);
    optionSelector.add(option1);
    optionSelector.add(option2);

    //changes productPrice to the price of option and resets quantity to 1
    optionSelector.onchange = function () {
      productPrice.innerText = `Price: CR${optionSelector.value}`;
      quantityInput.valueAsNumber = 1;
    };

    //When quantityInput is changed multiplies and displays price * quantity
    quantityInput.addEventListener("change", (event) => {
      productPrice.innerText = `Price: CR${
        quantityInput.valueAsNumber * parseInt(optionSelector.value)
      }`;
    });

    //Sudha can you add a discription to this function please :)
    function addToCartClicked(event) {
      var button = event.target;
      addItemToCart(productObject);
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
    }
  }

  //event listener to open Cart window
  document.querySelector(".shoppingCartButton").addEventListener("click", (event) => {
      //creating elements in shopping cart
      const checkoutWindow = document.createElement("div");
      const cartList = document.createElement("div");
      const orderSummary = document.createElement("div");
      const paymentOptions = document.createElement("div");
      const cashButton = document.createElement("button");
      const cardButton = document.createElement("button");
      const shoppingCartTable = document.createElement("table");

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
      // shoppingCartImageHeader.innerText = "ImageHeader";
      shoppingCartHeaderRow.append(shoppingCartImageHeader);

      //Add header to table row 0
      const shoppingCartProductNameHeader = document.createElement("th");
      // shoppingCartProductNameHeader.innerText = "Product Name";
      shoppingCartHeaderRow.append(shoppingCartProductNameHeader);

      //Add header to table row 0
      const shoppingCartOptionHeader = document.createElement("th");
      // shoppingCartOptionHeader.innerText = "Option";
      shoppingCartHeaderRow.append(shoppingCartOptionHeader);

      //Add header to table row 0
      // const shoppingCartQuantityHeader = document.createElement("th");
      // shoppingCartQuantityHeader.innerText = "Quantity";
      // shoppingCartHeaderRow.append(shoppingCartQuantityHeader);

      //Add header to table row 0
      const shoppingCartPriceHeader = document.createElement("th");
      // shoppingCartPriceHeader.innerText = "Price";
      shoppingCartHeaderRow.append(shoppingCartPriceHeader);

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
        cell3.innerHTML = shoppingCartArray[row].optionPrice;
      }

      //append elements to CheckOut Window
      displayWindow.append(checkoutWindow);
      checkoutWindow.append(closeButton);
      checkoutWindow.append(cartList);
      checkoutWindow.append(shoppingCartTableContainer);
      shoppingCartTableContainer.append(shoppingCartTable);
      checkoutWindow.append(orderSummary);
      checkoutWindow.append(paymentOptions);
      paymentOptions.append(cashButton);
      paymentOptions.append(cardButton);

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
        subtotalHeader.innerText = "Subtotal:";
        taxHeader.innerText = "Tax:";
        totalHeader.innerText = "Total:";

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

        //When back button is pressed redisplay checkoutwindow
        backButton.addEventListener("click", (event) => {
          checkoutWindow.style.display = "flex";
          cashWindow.style.display = "none";
        });
      });

      //Event listener to open card window when card is clicked
      cardButton.addEventListener("click", (event) => {
        //Creating elements for card window
        const cardWindow = document.createElement("div");
        const cardSubmit = document.createElement("button");
        const cardNumber = document.createElement("input");
        const cardExp = document.createElement("input");
        const cardCVV = document.createElement("input");
        const cardNumberLabel = document.createElement("label");
        const expdateLabel = document.createElement("label");
        const cvvLabel = document.createElement("label");

        //add CSS to cardWindo
        cardWindow.classList.add("cashWindow");

        //add CSS, placeholder, and innerText to cardNumber input
        cardNumber.classList.add("cardNumber");
        cardNumber.placeholder = "XXXX XXXX XXXX XXXX";
        cardNumberLabel.innerText = "Card Number:";

        //add CSS, Placeholder, and Innertext to Expiration date input
        cardExp.classList.add("cardExpiration");
        cardExp.placeholder = "MM / YY";
        expdateLabel.innerText = "Expiration Date (MM/YY):";

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
        document.body.append(cardWindow);
        cardWindow.append(backButton);
        cardWindow.append(cardNumberLabel);
        cardWindow.append(cardNumber);
        cardWindow.append(expdateLabel);
        cardWindow.append(cardExp);
        cardWindow.append(cvvLabel);
        cardWindow.append(cardCVV);
        cardWindow.append(cardSubmit);

        //Event listener for back button - hides card window and displays checkout window (might need to change)
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
