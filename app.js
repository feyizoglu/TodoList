const todo = document.querySelector("#task");
const list = document.querySelector("#list");

const allLi = document.querySelectorAll("li");

allLi.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("checked");
  }); //Listedeki elemanlar tamamlandığında tik konulması
  
  let removeBtn = document.createElement("span");
  removeBtn.classList.add("close");
  let txt = document.createTextNode("\u00D7");
  removeBtn.appendChild(txt);
  e.appendChild(removeBtn);
  removeBtn.addEventListener("click", removeItem);

  function removeItem() {
    let answer = window.confirm("Are you sure you want to delete this item?");
    if (answer) {
      e.remove();
    }
  }
});

function newElement() { //index.html'de tanımlanan fonksiyonu dolduruyoruz.
  if (todo.value == "" || !todo.value.trim()) {
    $(`.error`).toast("show");
  } else {
    let newli = document.createElement("li");
    newli.innerHTML = todo.value;
    $(`.success`).toast("show");
    list.appendChild(newli);
    let removeBtn = document.createElement("span");
    removeBtn.classList.add("close");
    let txt = document.createTextNode("\u00D7");
    removeBtn.appendChild(txt);

    newli.appendChild(removeBtn);
    removeBtn.addEventListener("click", removeItem);

    function removeItem() {
      let answer = window.confirm("Are you sure you want to delete this item?");
      if (answer) {
        newli.remove();
      }
    }

    newli.addEventListener("click",() => {
        newli.classList.toggle("checked");
      });
    
  }
  todo.value = "";
}
