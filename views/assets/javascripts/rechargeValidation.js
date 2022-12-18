function rechargeValidate() {
    const cardNumber = document.getElementById("cardNumber").value
    const expiredDay = document.getElementById('expiredDay').value
    const cvv = document.getElementById('cvv').value
    const noticeLabel = document.getElementById('noticeLabel')

    if (cardNumber === "" || expiredDay === "" || cvv === "") {
        noticeLabel.innerHTML = "Please fill in all fields!"
        noticeLabel.classList.add("text-yellow")
    }
    else if(cardNumber === "111111" || cardNumber === "222222" || cardNumber === "333333") {
        noticeLabel.classList.add("text-green-600")
        console.log(noticeLabel.classList)
        switch (cardNumber) {
            case "111111":
                if (expiredDay === "2022-10-10" && cvv === "411") {
                    noticeLabel.innerHTML = "There is no limit to the number and amount of recharge"
                }
            case "222222":
                if (expiredDay == "2022-11-11" && cvv === "443") {
                    noticeLabel.innerHTML = "There is no limit to the number of recharges but can only be loaded up to 1 million"
                }
            case "333333":
                if (expiredDay == "2022-12-12" && cvv === "577") {
                    noticeLabel.innerHTML = "This credit card runs out of money!"
                }
        }
    } 
    else {
        noticeLabel.innerHTML = "Wrong Information! Please check again!"
        noticeLabel.classList.add("text-red-600")
    }
}

function formatMoney() {
    const money = document.getElementById('currency-field')

    money.addEventListener('keyup', () => {
        money.value = money.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    })
}