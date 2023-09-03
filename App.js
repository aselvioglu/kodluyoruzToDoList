let yapilacakDOM = document.querySelector("#task");
let ulDOM = document.querySelector("#list");
let addButton = document.querySelector("#addButton");
let deleteButton = document.querySelector("#deleteButton");
let isaretleButton= document.querySelector("#isaretleButton");
let successToast = document.querySelector(".toast.success");
let errorToast = document.querySelector(".toast.error");

addButton.addEventListener("click", addElement);
deleteButton.addEventListener("click", deleteElement);
isaretleButton.addEventListener("click",isaretleElement);

// Function to show a toast message
function showToast(message) {
    let toastBody = successToast.querySelector(".toast-body");
    toastBody.textContent = message;
    let toastInstance = new bootstrap.Toast(successToast);
    toastInstance.show();
}

function addElement() {
    let yapilacak = yapilacakDOM.value; // Capture the input value here
    if (yapilacak.trim() !== "") { // Check if the input is not empty or just spaces
        let liDOM = document.createElement("li");
        liDOM.textContent = yapilacak;
        ulDOM.appendChild(liDOM);
        yapilacakDOM.value = "";
    showToast("Listeye eklendi.");
} else {
    showToast("Listeye boş ekleme yapamazsınız!");
}
}

function deleteElement() {
    let yapilanlar = ulDOM.querySelectorAll("li"); // Get all list items

    if (yapilanlar.length === 0) {
        alert("Liste boş. Silecek bir öğe yok.");
        return; // Exit the function if there are no list items
    }

    let inputValue = yapilacakDOM.value.trim().toLowerCase(); // Convert input to lowercase
    let deleted = false; // A flag to check if an item was deleted

    yapilanlar.forEach(item => {
        if (item.textContent.trim().toLowerCase() === inputValue) { // Convert item text to lowercase
            item.remove();
            yapilacakDOM.value = "";
            deleted = true;
        }
    });

    if (!deleted) {
        showToast("Silmek istediğiniz öğe bulunamadı.");
    }
}

function isaretleElement() {
    let yapilanlar = ulDOM.querySelectorAll("li"); // Get all list items

    if (yapilanlar.length === 0) {
        alert("Liste boş. İsaretlenecek öğe yok.");
        return; // Exit the function if there are no list items
    }

    let inputValue = yapilacakDOM.value.trim().toLowerCase(); // Convert input to lowercase
    let isaretli = false; // A flag to check if an item was marked

    yapilanlar.forEach(item => {
        if (item.textContent.trim().toLowerCase() === inputValue) { // Convert item text to lowercase
            item.style.color = "green"; // Change the text color to red
            yapilacakDOM.value = "";
            isaretli = true;
        }
    });

    if (!isaretli) {
        alert("İsaretlemek istediğiniz öğe bulunamadı.");
    }
}
