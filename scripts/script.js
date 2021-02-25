const dayWeekToggle = {
    dayWeekNow(){
        let d = new Date()
        return d.getDay()
    }
}

const DOM = {
    dishesContainerMain: document.querySelector('.dishes-day #box-dish-main'),
    dishesContainer: document.querySelector('.dishes-day #box-dish'),
    dishesContainerCol: document.querySelector('.dishes-day #right-col'),

    addDishMain(dish, index){
        const div = document.createElement('div')
        div.innerHTML = this.innerHTMLDishMain(dish)

        this.dishesContainerMain.appendChild(div)
    },

    innerHTMLDishMain(dish){
        if(dish == cardapioQuartaSabado){
            let dishDay = `
            <h4>${dish[0].name}</h4>
            <div class="contents-box-dish">
                <div class="contents-dish-left">
                    <p>${dish[0].options[0]}<small>(${dish[0].serve[0]})</small></p>
                    <p>${dish[0].options[1]}<small>(${dish[0].serve[1]})</small></p>
                    <p>${dish[0].options[2]}<small>(${dish[0].serve[2]})</small></p>
                    <p>${dish[0].options[3]}<small>(${dish[0].serve[3]})</small></p>
                </div>
                <div class="prices-dish-right">
                    <p>R$ ${dish[0].price[0]}</p>
                    <p>R$ ${dish[0].price[1]}</p>
                    <p>R$ ${dish[0].price[2]}</p>
                    <p>R$ ${dish[0].price[3]}</p>
                </div>
            </div>
        `
        return dishDay
        } else{
            const dishDay = `
            <h4>${dish[0].name}</h4>
            <div class="contents-box-dish">
                <div class="contents-dish-left">
                    <p>${dish[0].options[0]}<small>(${dish[0].serve[0]})</small></p>
                    <p>${dish[0].options[1]}<small>(${dish[0].serve[1]})</small></p>
                </div>
                <div class="prices-dish-right">
                    <p>R$ ${dish[0].price[0]}</p>
                    <p>R$ ${dish[0].price[1]}</p>
                </div>
            </div>
        `
        return dishDay
        }

        
    },

    addDish(dish){
        dish.slice(1).forEach((i) => {

            const div = document.createElement('div')
            div.innerHTML = this.innerHTMLDish(i)

            i.id >= 4 ? this.dishesContainerCol.appendChild(div) : this.dishesContainer.appendChild(div)

        })
    },

    innerHTMLDish(i){
        if(i.name == 'Sobremesas'){
            let dishDay = `
            <div class="dish">
                <h4>${i.name}</h4>
                <div class="contents-box-dish">
                    <div class="contents-dish-left">
                        <p>${i.options[0]}</p>
                        <p>${i.options[1]}</p>
                    </div>
                    <div class="prices-dish-right">
                        <p>R$ ${i.price[0]}</p>
                        <p>R$ ${i.price[1]}</p>
                    </div>
                </div>
            </div>
        `
        return dishDay
        }
        let dishDay = `
            <div class="dish">
                <h4>${i.name}</h4>
                <div class="contents-box-dish">
                    <div class="contents-dish-left">
                        <p>${i.options[0]}<small>(${i.serve[0]})</small></p>
                        <p>${i.options[1]}<small>(${i.serve[1]})</small></p>
                    </div>
                    <div class="prices-dish-right">
                        <p>R$ ${i.price[0]}</p>
                        <p>R$ ${i.price[1]}</p>
                    </div>
                </div>
            </div>
        `
        return dishDay
    }
}

const Dish = {
    all: [],
    add(dish){
        Dish.all.push(dish)
    },
}

const showDishSelect = {
    addRemoveClass(element){
        document.querySelectorAll('#box-btn-cardapio a div').forEach((i) => {i.classList.remove('active')})
        document.querySelector(element).classList.add('active')
    },

    clearHTML(){
        DOM.dishesContainerMain.innerHTML = ''
        DOM.dishesContainer.innerHTML = ''
        DOM.dishesContainerCol.innerHTML = ''
    },

    showDish(dish, element){
        this.addRemoveClass(element)
        this.clearHTML()
        DOM.addDishMain(dish)

        DOM.addDish(dish)

    }
}