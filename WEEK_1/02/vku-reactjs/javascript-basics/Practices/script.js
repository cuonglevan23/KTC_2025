document.addEventListener("DOMContentLoaded", function () {
  initializeAllTasks();
});
function initializeAllTasks() {
  // Task 1: Change Text Content
  document
    .getElementById("changeTextBtn")
    .addEventListener("click", function () {
      document.getElementById("textDisplay").textContent = "Hello, JavaScript!";
    });
  // Task 2: Change Background Color
  document
    .getElementById("toggleHighlightBtn")
    .addEventListener("click", function () {
      const box = document.querySelector(".box");
      box.classList.toggle("highlight");
    });
  // Task 3: Add New List Item
  document.getElementById("addItemBtn").addEventListener("click", function () {
    const input = document.getElementById("newIemInput");
    const list = document.getElementById("itemList");

    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  });

  // Task 4: Remove Last List Item
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
      e.target.parentElement.remove();
    }
  });
  // Task 5: Change Image Source
  document
    .getElementById("changeImageBtn")
    .addEventListener("click", function () {
      const img = document.getElementById("dynamicImage");
      img.src =
        "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482784zzu/anh-mo-ta.png";
      img.alt = "New Image Description";
    });
  // Task 6: Get Input Value
  document.getElementById("getInputBtn").addEventListener("click", function () {
    const input = document.getElementById("inputField");
    alert("Input Value: " + input.value);
  });
  // Task 7: Event Listener on multiple Elements
  const buttons = document.querySelectorAll(".eventBtn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Button clicked: " + this.textContent);
    });
  });
  // Task 8: Change Background Color on Hover
  const hoverBox = document.querySelector(".hoverBox");
  hoverBox.addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightblue";
  });
  hoverBox.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
  // Task 9 Live Clock
  function updateClock() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById(
      "clockDisplay"
    ).textContent = `${hours}:${minutes}:${seconds}`;
  }
  updateClock();

  // Cập nhật mỗi giây
  setInterval(updateClock, 1000);
  // Task 10: Form Validation
  document.getElementById("validateBtn").addEventListener("click", function () {
    const emailInput = document.getElementById("emailInput");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailInput.value)) {
      alert("Erorr.");
    } else if (emailInput.value === "") {
      alert("Please fill out all fields.");
    } else {
      alert("Form submitted successfully!");
    }
  });
  // Task 11: Hide/Show Element
  document.getElementById("hideBtn").addEventListener("click", function () {
    const element = document.getElementById("hideText");
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
  // task 12: Greeting Based on Time
  function greetBasedOnTime() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById(
      "greetingMessage"
    ).textContent += `${hours}:${minutes}:${seconds}`;
  }
  greetBasedOnTime();
  // task 13: Field Border Highlight on Error
  document.getElementById("formSubmit").addEventListener("click", function () {
    const inputField = document.getElementById("nameInput");
    if (inputField.value.trim() === "") {
      inputField.style.border = "2px solid red";
      document.getElementById("nameError").textContent =
        "Please fill out this field.";

       
    } else {
      inputField.style.border = "2px solid green";
        document.getElementById("nameError").textContent = "Form submitted successfully!";
     
    }
  }
  );
    // task 14: Disable Button After Click
    document.getElementById("disableBtn").addEventListener("click", function () {
    this.disabled = true;
    document.getElementById("disableMessage").textContent =
      "Button has been disabled.";
  });
  // task 15: TextArea Character Count
  document
    .getElementById("bioInput")
    .addEventListener("input", function () {
      const charCount = this.value.length;
      document.getElementById("charCount").textContent =
        "Character Count: " + charCount;
    });
  // task 16: Toggle Class on Click
   document.getElementById('addBoxBtn').addEventListener('click', function() {
        const container = document.getElementById('boxContainer');
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        const box = document.createElement('div');
        box.className = 'colored-box';
        box.style.backgroundColor = randomColor;
        box.addEventListener('click', function() {
            this.remove();
        });
        
        container.appendChild(box);
    });
    // task 17: Strike Through Completed Items
    document.querySelectorAll('.strikeBtn').forEach(function(button) {
        button.addEventListener('click', function() {
            const listItem = this.parentElement;
            listItem.style.textDecoration = 'line-through';
            listItem.style.color = 'gray';
        });
    }
  );        

}
