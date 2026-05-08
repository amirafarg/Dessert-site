const cartTitle = document.querySelector(".added-items-js .storage");
const addItemJs = document.querySelector(".added-items-js");
const imptyCart = document.querySelector(".added-items");
const btnConfirm = document.querySelector(".Confirm")
const sec = document.querySelector(".sec");
const popup = document.querySelector(".card-js");
const removeCard = document.querySelector(".card");
const getNewOrder = document.querySelector(".now-order");
const plusInput = document.querySelector(".no-spinner");
const addedDiv = document.getElementById("added");
const totalOrder = document.querySelector(".number");
  const overlay = document.querySelector(".overlay");

// دالة تحديث لمجمل الاوردر
function updateTotale() {
    totalOrder.textContent = `$${cart.totalPrice.toFixed(2)}`;
}

const cardProduct = document.querySelectorAll(".img-relative");

cardProduct.forEach(card => {
    const addBtn = card.querySelector(".btn-cart");
    const counter = card.querySelector(".abslt-add");
    const btnPlus = card.querySelector(".plus");
    const minusBtn = card.querySelector(".minus");
    const input = card.querySelector("input");
    const ok = card.querySelector(".alright");
    const imgProduct = card.querySelector("img").src;

    addBtn.addEventListener("click", () => {
        // const product = {
        //     name: "Waffle",
        //     price: 50
        // };

        // cart.addItem(product);

        const name = card.parentElement.querySelector(".name-food").textContent;
        const priceText = card.parentElement.querySelector(".price").textContent;

        const price = Number(priceText.replace("$", ""));

        // نخفي الزرار
        addBtn.style.display = "none";

        // نظهر العداد
        counter.style.display = "flex";

        // علامة الصح
        ok.style.display = "block";

        // كارت فاضي
        imptyCart.classList.add("hide");

        //  المضافه المنتجات ظهور كارت 
        addItemJs.classList.add("show");

        // اضافت المنتجات في الكارت
        const item = document.createElement("div");
        item.classList.add("first-order");

        item.innerHTML = `
        <div class="column">
            <h6 class="vanilla">${name}</h6>
            <h6 class="calc">
                <span class="bold">1×</span> $${price} = $${price}
            </h6>
        </div>
        <button class="btn-x">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                <path
                d="M11.375 11.875L16.625 17.125M16.625 11.875L11.375 17.125M24.5 14.5C24.5 15.8789 24.2284 17.2443 23.7007 18.5182C23.1731 19.7921 22.3996 20.9496 21.4246 21.9246C20.4496 22.8996 19.2921 23.6731 18.0182 24.2007C16.7443 24.7284 15.3789 25 14 25C12.6211 25 11.2557 24.7284 9.98182 24.2007C8.70791 23.6731 7.55039 22.8996 6.57538 21.9246C5.60036 20.9496 4.82694 19.7921 4.29926 18.5182C3.77159 17.2443 3.5 15.8789 3.5 14.5C3.5 11.7152 4.60625 9.04451 6.57538 7.07538C8.54451 5.10625 11.2152 4 14 4C16.7848 4 19.4555 5.10625 21.4246 7.07538C23.3938 9.04451 24.5 11.7152 24.5 14.5Z"
                stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>`;

        const countEl = item.querySelector(".bold");
        const calcText = item.querySelector(".calc");

        addItemJs.appendChild(item);

        input.value = 1;

        //  إضافة المنتج للكارت
        // addItemJs.prepend(item);
        const title = addItemJs.querySelector(".storage");
        title.insertAdjacentElement("afterend", item);

        // زر الالغاء
        const btnRemove = item.querySelector(".btn-x");
        btnRemove.addEventListener("click", () => {
            // مسح العنصر
            item.remove();

            // مسح من الcart
            cart.removeItem(name);

            // تحديث العدد من العنوان
            title.textContent = `Your Cart (${cart.item.length})`;

            // رجوع للزر الاصلي
            addBtn.style.display = "flex";

            // إخفاء العداد
            counter.style.display = "none";

            // إخفاء الصح
            ok.style.display = "none";

            // رجوع الinput
            input.value = 1;

            // لو مفيش منتجات الكارت يرجع
            if (cart.item.length === 0) {
                imptyCart.classList.remove("hide");
                addItemJs.classList.remove("show");
            }

            updateTotale();
        });

        cart.addItem({ name, price, img: imgProduct });
        updateTotale();

        // عنوان الكارت وكميته
        cartTitle.textContent = `Your Cart(${cart.item.length})`;

        console.log(cart.items);

        // زر ال+
        btnPlus.addEventListener("click", () => {
            let value = Number(input.value);
            value++;

            input.value = value;

            cart.totalprice += 50;

            // تحديث السعر
            countEl.textContent = value;
            calcText.innerHTML = `
        <span class="bold">${value}</span>×
        $${price} = $${(value * price).toFixed(2)}`

            cart.totalPrice += price;
            updateTotale()
        });

        // زر ال_
        minusBtn.addEventListener('click', () => {
            let value = Number(input.value);

            if (value > 1) {
                value--;
                input.value = value;

                cart.totalprice -= 50;

                countEl.textContent = value;
                calcText.innerHTML = `
                <span class="count">${value}</span>× $${price} = $${(value * price).toFixed(2)}`;

                cart.totalPrice -= price;
                updateTotale();
            }
        });
    });

});

btnConfirm.addEventListener('click', clickToConfirm);
removeCard.addEventListener('click', clickToRemove);
getNewOrder.addEventListener('click', removeByBtn);


function clickToConvirt() {
    // clickAdd.classList.add('show');
    // show.classList.add('show');
    // added.classList.add('show');
    // none.classList.add('show');
    // card.classList.add('show');
}

// الطلب النهائي
function clickToConfirm() {
    sec.classList.add('show');
    popup.classList.add('show');
    overlay.classList.add("show");

    const container = popup.querySelector(".popup-container");

    container.innerHTML = "";

    cart.item.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("flex-added")

        div.innerHTML = `
        <div>
            <div>
                <img src="${item.img}" alt="">

                <h6 class="h6-order">
                    ${item.name} <br>
                 <span class="bold">${item.quantity || 1}×</span>
                 <span class="calc">$${item.price.toFixed(2)}</span>
                </h6>
            </div>

            <span class="calc coor-span">$${((item.quantity || 1) * item.price).toFixed(2)}</span>
        </div>
        `;

        container.appendChild(div);
    });

    const totalDiv = document.createElement("div");
        totalDiv.classList.add("flex-added", "no-bottom");

        totalDiv.innerHTML = `
        <h6 class="the-total">Order Total</h6>
        <span class="prc">$${cart.totalPrice.toFixed(2)}</span>
        `;

    container.appendChild(totalDiv);
}

// reset
const startBtn = document.querySelector(".now-order");

startBtn.addEventListener("click", () => {
    // اخفاء البوباب
    popup.classList.remove("show");
    overlay.classList.remove("show");

    // تصفير الكارت
    cart.item = [];
    cart.totalPrice = 0;

    // تحديث العنوان
    cartTitle.textContent = `Your Cart (0)`;

    // رجوع الكارت الفاضي
    imptyCart.classList.remove("hide");
    addItemJs.classList.remove("show");

    // 🟢 هنا المهم بقى
    const allCards = document.querySelectorAll(".img-relative");

    allCards.forEach(card => {
        const addBtn = card.querySelector(".btn-cart");
        const counter = card.querySelector(".abslt-add");
        const ok = card.querySelector(".alright");
        const input = card.querySelector("input");

        // رجوع كل حاجة زي الأول
        addBtn.style.display = "flex";
        counter.style.display = "none";
        ok.style.display = "none";
        input.value = 1;
    });
});

function clickToRemove() {
    sec.classList.remove('show');
    popup.classList.remove('show');
}

function removeByBtn() {
    sec.classList.remove('show');
    popup.classList.remove('show');
}

function increase() {
    document.querySelector(".no-spinner").innerHTML;
}
