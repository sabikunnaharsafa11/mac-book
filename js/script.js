

// Common Function 
function commonAll() {
    const bestPriceText = document.getElementById("best-price").innerText;
    const bestPrice = parseInt(bestPriceText);

    const memoryText = document.getElementById("memory-cost").innerText;
    const memoryPrice = parseInt(memoryText);

    const storageText = document.getElementById("storage-cost").innerText;
    const storagePrice = parseInt(storageText);

    const deliveryText = document.getElementById("delivery-cost").innerText;
    const deliveryPrice = parseInt(deliveryText);

    let totalprice = document.getElementById("total-price");
    totalprice.innerText = (bestPrice + memoryPrice + storagePrice + deliveryPrice);
    document.getElementById("discount-price").innerText = totalprice.innerText;
    return totalprice;
}

// Calculate Price
function calculatePrice(memory8, memory16, storagegb256, storagegb512, storagetb1, df, dc) {
    if (storagegb256 = 0) {
        commonAll()
    }
    else if (storagegb512 = 100) {
        commonAll()
    }
    else if (storagetb1 = 180) {
        commonAll()
    }

    else if (dc = 20) {
        commonAll()
    }
    else if (df = 1) {
        commonAll()
    }
    else if (memory16 = 180) {
        commonAll()
    }
    else if (memory8 = 0) {
        commonAll()
    }
}


//Memory
document.getElementById("ram-8gb").addEventListener("click", function () {
    document.getElementById("memory-cost").innerText = 0;
    calculatePrice(0, 180, 0, 0, 0, 0, 0)

});
document.getElementById("ram-16gb").addEventListener("click", function () {
    document.getElementById("memory-cost").innerText = 180;
    calculatePrice(0, 180, 0, 0, 0, 0, 0)

});

//Storage
document.getElementById("ssd-256gb").addEventListener("click", function () {
    document.getElementById("storage-cost").innerText = 0;
    calculatePrice(0, 0, 0, 0, 0, 0, 0)

});
document.getElementById("ssd-512gb").addEventListener("click", function () {
    document.getElementById("storage-cost").innerText = 100;
    calculatePrice(0, 0, 0, 100, 0, 0, 0)

});

document.getElementById("ssd-1tb").addEventListener("click", function () {
    document.getElementById("storage-cost").innerText = 180;
    calculatePrice(0, 0, 0, 0, 180, 0, 0)

});

// Delivery
document.getElementById("prime-delivary").addEventListener("click", function () {
    document.getElementById("delivery-cost").innerText = 0;
    calculatePrice(0, 0, 0, 0, 0, 0, 20)
});
document.getElementById("charge-delivary").addEventListener("click", function () {
    document.getElementById("delivery-cost").innerText = 20;
    calculatePrice(0, 0, 0, 0, 0, 0, 20)
});

//Promo Code
document.getElementById("promo-code-btn").addEventListener("click", function () {
    const promoInput = document.getElementById("promo-code-input");
    if (promoInput.value == "stevekaku") {
        const totalBotomText = document.getElementById("discount-price");
        const totalBotomPrice = parseInt(totalBotomText.innerText);
        const newupdate = totalBotomPrice * 20 / 100;
        const updatePrice = totalBotomPrice - newupdate
        totalBotomText.innerText = updatePrice; 
        document.getElementById("promo-code-btn").disabled = true;
        promoInput.style.display = 'none';
        document.getElementById("promo-code-btn").innerText = "Pomo Code Applied!!";
        document.getElementById("promo-code-btn").style.cssText = "background-color:red; width:auto; padding-left: 7%; padding-right: 7%; height: 50px; text-align:center; color:white; font-weight: 600;"

    }
    // Wrong Input alert
    else {
        alert("Opps Wrong Promo Code!!!") 
    }

});

