
const view = document.querySelectorAll('.view')

view.forEach(views => {
    views.style.backgroundColor = "white";
})


const emailButton = document.getElementById('view-email')
const phoneButton = document.getElementById('view-phone')
const socialsButton = document.getElementById('view-socials')

const email = document.getElementById('email')
email.style.visibility = 'hidden';

const phone = document.getElementById('phone')
phone.style.visibility = 'hidden';

const gitHub = document.getElementById('git-hub')
gitHub.style.visibility = 'hidden';

const linkedIn = document.getElementById('linked-in')
linkedIn.style.visibility = 'hidden';

const instagram = document.getElementById('instagram')
instagram.style.visibility = 'hidden';


const emailButtonView = () => {
    if (email.style.visibility === "visible") {
        email.style.visibility = "hidden"
    } else {
        email.style.visibility = "visible"
    }

}

const phoneButtonView = () => {
    if (phone.style.visibility === "visible") {
        phone.style.visibility = "hidden"
    } else {
        phone.style.visibility = "visible"
    }

}

const socialsButtonView = () => {
    if (instagram.style.visibility === "visible") {
        instagram.style.visibility = "hidden"
        gitHub.style.visibility = "hidden"
        linkedIn.style.visibility = "hidden"
    } else {
        instagram.style.visibility = "visible"
        gitHub.style.visibility = "visible"
        linkedIn.style.visibility = "visible"
    }

}





emailButton.addEventListener("click", emailButtonView)
phoneButton.addEventListener("click", phoneButtonView)
socialsButton.addEventListener("click", socialsButtonView)
