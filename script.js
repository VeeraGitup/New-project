const one = document.getElementById("#one");
const two = document.getElementById("#two");
const three = document.getElementById("#three");
const four = document.getElementById("#four");

const contentOne = document.querySelector('.one');
const contentTwo = document.querySelector('.two');
const contentThree = document.querySelector('.three');
const contentFour = document.querySelector('.four');



 contentTwo.style.display = "none";
    contentThree.style.display = "none";
    contentFour.style.display = "none";
    contentOne.style.display = "flex";

const Joydip = () => {
    contentOne.style.display = "block";
    contentOne.style.display = "flex";

    contentTwo.style.display = "none";
    contentThree.style.display = "none";
    contentFour.style.display = "none";
}

const Indrajit = () => {
    contentTwo.style.display = "block";
    contentTwo.style.display = "flex";

    contentOne.style.display = "none";
    contentThree.style.display = "none";
    contentFour.style.display = "none";
}

const Nayeem = () => {
    contentThree.style.display = "block";
    contentThree.style.display = "flex";

    contentOne.style.display = "none";
    contentTwo.style.display = "none";
    contentFour.style.display = "none";
}

const Ebadur = () => {
    contentFour.style.display = "block";
    contentFour.style.display = "flex";
    
    contentOne.style.display = "none";
    contentTwo.style.display = "none";
    contentThree.style.display = "none";
}