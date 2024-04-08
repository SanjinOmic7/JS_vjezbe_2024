const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];
let currentIndex = 0;

const changeColor = () => {
    document.body.style.backgroundColor = boje[currentIndex];
    currentIndex = (currentIndex + 1) % boje.length;
};

document.getElementById("changeColorBtn").addEventListener("click", changeColor);
