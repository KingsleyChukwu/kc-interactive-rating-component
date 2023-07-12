const mainState = document.querySelector(".main-state"),
thankyouState = document.querySelector(".thank-you-state"),
ratingBtn = document.querySelectorAll(".rating"),
submitBtn = document.querySelector(".submit");

let selectedText = document.querySelector(".selected span");

// Old code
/*
for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener("click", (e) => {
        console.log("It works!");
        if (ratingBtn[i].classList.contains("active")) {
            console.log("true");
            ratingBtn[i].classList.remove("active");
        } else {
            ratingBtn[i].classList.add("active");
            selectedText.innerText = `${ratingBtn[i].querySelector("span").innerText}`;
        }
    })

}
*/

// New code

ratingBtn.forEach((button) => {
    button.onclick = function addClass() {
        for (let i = 0; i < ratingBtn.length; i++) {
            ratingBtn[i].classList.remove("active");
        }
        button.classList.add("active");
        selectedText.innerText = `${button.querySelector("span").innerText}`;
        console.log(button);
    }
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ratingBtn.forEach((button) => {
        if (button.classList.contains("active")) {
            mainState.style.display = "none";
            thankyouState.style.display = "block";
        }
        else {
            return;
        }
    })

    setTimeout(function() {
        ratingBtn.forEach((button) => {
            button.classList.remove("active");
        })
        thankyouState.style.display = "none";
        mainState.style.display = "block";
    }, 7000)
   
})


