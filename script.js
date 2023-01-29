const txtInput = document.querySelector('.inputs input'),
checkBtn = document.querySelector('.inputs button'),
infoTxt = document.querySelector('.info-txt');
let filterInput;
checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> is not a plaindrome`
    }
   infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome`
   console.log(infoTxt);
});
txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    console.log(filterInput);
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
});
