const num = document.querySelector('#helpNum');
const txt = document.querySelector('#helpTxt');
const img = document.querySelector('#helpImg');
const btn1 = document.querySelector('#back');
const btn2 = document.querySelector('#next');

const textOne = "Lorem 1 dolor sit amet consectetur adipisicing elit. \
Repudiandae, 1 provident vel praesentium voluptatem tenetur 1 temporibus \
laudantium blanditiis itaque dolorem!";
const textTwo = "Lorem 2 dolor sit amet consectetur adipisicing elit. \
Repudiandae, 2 provident vel praesentium voluptatem tenetur 2 temporibus \
laudantium blanditiis itaque dolorem!";
const textThree = "Lorem 3 dolor sit amet consectetur adipisicing elit. \
Repudiandae, 3 provident vel praesentium voluptatem tenetur 3 temporibus \
laudantium blanditiis itaque dolorem!";
const textFour = "Lorem 4 dolor sit amet consectetur adipisicing elit. \
Repudiandae, 4 provident vel praesentium voluptatem tenetur 4 temporibus \
laudantium blanditiis itaque dolorem!";

const imgOne = "/public/images/help1.png";
const imgTwo = "/public/images/help2.png";
const imgThree = "/public/images/help3.png";
const imgFour = "/public/images/help4.png";


btn2.addEventListener('click', (e) => {
    switch (num.innerText) {
        case "I":
            txt.innerText = textTwo;
            img.src = imgTwo;
            num.innerText = "II";
            btn1.removeAttribute('hidden');
            break
        case "II":
            txt.innerText = textThree;
            img.src = imgThree;
            num.innerText = "III";
            break
        case "III":
            txt.innerText = textFour;
            img.src = imgFour;
            num.innerText = "IV";
            btn2.innerText = "START"
            btn2.href = "/pickMyMeal";
            e.preventDefault()
            break
    }
})

btn1.addEventListener('click', () => {
    switch (num.innerText) {
        case "II":
            txt.innerText = textOne;
            img.src = imgOne;
            num.innerText = "I";
            btn1.setAttribute('hidden', "");
            break
        case "III":
            txt.innerText = textTwo;
            img.src = imgTwo;
            num.innerText = "II";
            break
        case "IV":
            txt.innerText = textThree;
            img.src = imgThree;
            num.innerText = "III";
            btn2.innerText = "NEXT"
            btn2.href = "#";
            break
    }
})
