const convertButton = document.querySelector(".convert-button")
const currencySelectOne = document.querySelector(".currency-select-one")
const currencySelectTwo = document.querySelector(".currency-select-two")


function selectOneValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    if (currencySelectOne.value == "real"){ 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }

}

async function selectTwoValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value-converted")
    
    const currencys = 'USD-BRL,EUR-BRL,GBP-BRL'

    const price = await fetch(`https://economia.awesomeapi.com.br/json/last/${currencys}`).then(response => response.json())

    const dolarToday = price.USDBRL.bid
    const euroToday = price.EURBRL.bid
    const libraToday = price.GBPBRL.bid
    
    

    if (currencySelectTwo.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectTwo.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectTwo.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectTwo.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    equalSelectsValues()

}

function CurrencyOne(){
    const currencyName = document.getElementById("currency-name-one")
    const currencyImg = document.querySelector(".currency-img-one")
    const inputCurrency = document.querySelector(".input-currency")

    if (currencySelectOne.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "/assets/bandeira do brasil.jpeg"
        inputCurrency.placeholder = "R$ 10.000.00"
    }

    selectOneValues()   

}

function changeCurrencyTwo(){
    const currencyName = document.getElementById("currency-name-two")
    const currencyImg = document.querySelector(".currency-img-two")


    if (currencySelectTwo.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "/assets/bandeira USA.jpeg"
    }
    if (currencySelectTwo.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "/assets/bandeira da união europeia.png"
    }
    if (currencySelectTwo.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "/assets/bandeira do reino unido.jpeg"
    }
    if (currencySelectTwo.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "/assets/bandeira do brasil.jpeg"
    }

}

async function clickButton() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")


    currencyValueToConvert.innerHTML = inputCurrencyValue

    selectOneValues()
    selectTwoValues()
    
    
}

function equalSelectsValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

        if (currencySelectOne.value === "dolar" && currencySelectTwo.value === "dolar") {
            currencyValueToConvert.innerHTML = inputCurrencyValue 
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency: "USD"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        }
        
        if (currencySelectOne.value === "euro" && currencySelectTwo.value === "euro") {
            currencyValueToConvert.innerHTML = inputCurrencyValue 
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
        }

        if (currencySelectOne.value === "libra" && currencySelectTwo.value === "libra") {
            currencyValueToConvert.innerHTML = inputCurrencyValue 
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK",{
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
        }

        if (currencySelectOne.value === "real" && currencySelectTwo.value === "real") {
            currencyValueToConvert.innerHTML = inputCurrencyValue 
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
        }
    
}

currencySelectOne.addEventListener("change", CurrencyOne)
currencySelectTwo.addEventListener("change", selectTwoValues)
currencySelectTwo.addEventListener("change", changeCurrencyTwo)
convertButton.addEventListener("click", selectTwoValues)


