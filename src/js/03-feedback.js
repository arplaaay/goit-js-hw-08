import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector("input[name=email]");
const textareaEl = document.querySelector("textarea[name=message]");

const FEEDBACK_KEY = "feedback-form-state";

inputEl.addEventListener("input", throttle(onEmailInputChange, 500));
textareaEl.addEventListener("input", throttle(onTextareaInputChange, 500));
formEl.addEventListener("submit", onSubmit);

let userInfo = {
    email: "",
    message: "",
}

getLocalStorageInfo();

function onEmailInputChange(evt){
    userInfo.email = evt.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(userInfo));
}

function onTextareaInputChange(evt){
    userInfo.message = evt.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(userInfo));
}

function onSubmit(evt){
    evt.preventDefault();
    evt.target.reset();

    console.log(userInfo);
    localStorage.removeItem(FEEDBACK_KEY);
}

function getLocalStorageInfo() {
    const localInfo = localStorage.getItem(FEEDBACK_KEY);
    
    if(localInfo){
        userInfo = JSON.parse(localInfo);
 
        inputEl.value = userInfo.email;
        textareaEl.value = userInfo.message;
    }
 }




