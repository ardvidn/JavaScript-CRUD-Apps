let selectedRow = null;

// alert
function alerts(fill, className) {
  const newDiv = document.createElement("div");
  newDiv.className = `${className}`;

  newDiv.appendChild(document.createTextNode(fill));
  const alertsId = document.querySelector("#alerts");
  alertsId.appendChild(newDiv);

  setTimeout(() => document.querySelector(".alerts").remove(), 3000);
}

// clear field
function clearField() {
  document.querySelector("#activities").value = "";
}

// Add Data
document.querySelector(".activities-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // get value from field
  const activities = document.querySelector("#activities").value;
  console.log(activities);

  // validate form-fill, add data
  if (activities == "") {
    alerts("please fill in the field provided", "alerts");
  } else {
    if (selectedRow == null) {
      const cardDiv = document.createElement("div");
      cardDiv.className = `card md:w-[400px] lg:w-[500px] lg:h-[70px] lg:text-xl hover:shadow-xl columns-2`;

      cardDiv.innerHTML = `
                            <p class="my-auto w-full px-4 lg:my-auto text-third">${activities}</p>
                            <a href="#" class="my-auto pr-2">
                            <button id="edit" class="bg-black text-third button lg:text-lg edit">Edit</button>
                            </a>
                            <a href="#" class="my-auto pr-4">
                            <button id="delete" class="bg-first text-third button lg:text-lg delete">Delete</button>
                            </a>
                            `;
      const cardList = document.querySelector("#cardList");
      cardList.appendChild(cardDiv);
      selectedRow = null;
      alerts("New list added!!!", "alerts");
    } else {
      selectedRow.children[0].textContent = activities;
      selectedRow = null;
      alerts("Activities edited", "alerts");
    }
    clearField();
  }
});

// edit data
const editButton = document.querySelector("#cardList");
editButton.addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#activities").value = selectedRow.children[0].textContent;
  }
});

// Delete Data
const deleteButton = document.querySelector("#cardList");
deleteButton.addEventListener("click", (e) => {
  target = e.target;
  console.log(target);
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    alerts("Your task has been delete, Congratulation!!!", "alerts");
  }
});
