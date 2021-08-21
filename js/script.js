

// Common Function 
function common() {
    const bestPriceText = document.getElementById("best-price").innerText;
    const bestPrice = parseInt(bestPriceText);

    const memoryText = document.getElementById("memory-cost").innerText;
    const memoryPrice = parseInt(memoryText);

    const storageText = document.getElementById("storage-cost").innerText;
    const storagePrice = parseInt(storageText);

    const deliveryText = document.getElementById("delivery-cost").innerText;
    const deliveryPrice = parseInt(deliveryText);

    let totalprice = document.getElementById("total-price");
    totalprice.innerText = bestPrice + memoryPrice + storagePrice + deliveryPrice
    return totalprice;
}

// Calculate Price
function calculatePrice(memory8, memory16, gb256, gb512, tb1, df, dc) {
    if (gb256 = 0) {
        common()
    }
    else if (gb512 = 100) {
        common()
    }
    else if (tb1 = 180) {
        common()
    }

    else if (dc = 20) {
        common()
    }
    else if (df = 1) {
        common()
    }
    else if (memory16 = 180) {
        common()
    }
    else if (memory8 = 0) {
        common()
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
    }
    // Wrong Input alert
    else {
        alert("Opps Wrong Promo Code!!!") 
    }
});