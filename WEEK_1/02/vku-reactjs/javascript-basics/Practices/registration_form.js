// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeAllTasks();
});

function initializeAllTasks() {
    // Task 1: Change Text Content
    document.getElementById('changeTextBtn').addEventListener('click', function() {
        document.getElementById('textDisplay').textContent = 'Hello, JavaScript!';
    });

    // Task 2: Toggle CSS Class
    document.getElementById('toggleHighlightBtn').addEventListener('click', function() {
        const box = document.querySelector('.box');
        box.classList.toggle('highlight');
    });

    // Task 3: Add New List Item
    document.getElementById('addItemBtn').addEventListener('click', function() {
        const input = document.getElementById('itemInput');
        const list = document.getElementById('itemList');
        
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = input.value;
            list.appendChild(li);
            input.value = '';
        }
    });

    // Task 4: Remove Element
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('deleteBtn')) {
            e.target.parentElement.remove();
        }
    });

    // Task 5: Update Image Source
    document.getElementById('changeImageBtn').addEventListener('click', function() {
        const img = document.getElementById('mainImage');
        img.src = 'https://via.placeholder.com/200x150?text=Dog';
        img.alt = 'Dog Image';
    });

    // Task 6: Get Input Value
    document.getElementById('submitUsername').addEventListener('click', function() {
        const username = document.getElementById('usernameInput').value;
        if (username.trim() !== '') {
            alert(`Hello, ${username}!`);
        } else {
            alert('Please enter a username!');
        }
    });

    // Task 7: Event Listener on Multiple Elements
    const colorButtons = document.querySelectorAll('.colorBtn');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`You clicked: ${this.textContent}`);
        });
    });

    // Task 8: Change Background on Hover
    const hoverBox = document.querySelector('.hoverBox');
    hoverBox.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'lightblue';
    });
    hoverBox.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#f0f0f0';
    });

    // Task 9: Live Clock
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clockDisplay').textContent = `${hours}:${minutes}:${seconds}`;
    }
    updateClock();
    setInterval(updateClock, 1000);

    // Task 10: Validate Form Field
    document.getElementById('validateBtn').addEventListener('click', function() {
        const email = document.getElementById('emailInput').value;
        const errorMessage = document.getElementById('errorMessage');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email)) {
            errorMessage.textContent = '✓ Valid email!';
            errorMessage.style.color = 'green';
        } else {
            errorMessage.textContent = '✗ Invalid email format!';
            errorMessage.style.color = 'red';
        }
    });

    // Task 11: Hide Element
    document.getElementById('hideParaBtn').addEventListener('click', function() {
        const para = document.getElementById('infoPara');
        para.style.display = para.style.display === 'none' ? 'block' : 'none';
        this.textContent = para.style.display === 'none' ? 'Show Paragraph' : 'Hide Paragraph';
    });

    // Task 12: Greeting Based on Time
    function showGreeting() {
        const hour = new Date().getHours();
        let greeting;
        
        if (hour < 12) {
            greeting = 'Good Morning! 🌅';
        } else if (hour < 17) {
            greeting = 'Good Afternoon! ☀️';
        } else {
            greeting = 'Good Evening! 🌙';
        }
        
        document.getElementById('greetingText').textContent = greeting;
    }
    showGreeting();

    // Task 13: Field Border Highlight on Error
    document.getElementById('formSubmit').addEventListener('click', function() {
        const nameInput = document.getElementById('nameInput');
        const nameError = document.getElementById('nameError');
        
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
            nameError.textContent = 'Name is required!';
        } else {
            nameInput.classList.remove('error');
            nameError.textContent = '✓ Name is valid!';
            nameError.style.color = 'green';
        }
    });

    // Task 14: Disable Button After Click
    document.getElementById('onceBtn').addEventListener('click', function() {
        this.textContent = 'Already clicked!';
        this.disabled = true;
    });

    // Task 15: Textarea Character Counter
    const bioInput = document.getElementById('bioInput');
    const charCount = document.getElementById('charCount');
    
    bioInput.addEventListener('input', function() {
        const remaining = 200 - this.value.length;
        charCount.textContent = `${remaining} characters remaining`;
        charCount.style.color = remaining < 20 ? 'red' : '#666';
    });

    // Task 16: Add Colored Boxes
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

    // Task 17: Strike Through Completed Items
    const todoItems = document.querySelectorAll('#todoList li');
    todoItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('completed');
        });
    });

    // Task 18: Show/Hide Password
    document.getElementById('togglePassword').addEventListener('change', function() {
        const passwordInput = document.getElementById('passwordInput');
        passwordInput.type = this.checked ? 'text' : 'password';
    });

    // Task 19: Count Checked Checkboxes
    const optionBoxes = document.querySelectorAll('.optionBox');
    const checkedCount = document.getElementById('checkedCount');
    
    optionBoxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checked = document.querySelectorAll('.optionBox:checked').length;
            checkedCount.textContent = checked;
        });
    });

    // Task 20: Image Gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainPhoto = document.getElementById('mainPhoto');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            mainPhoto.src = this.src.replace('100x80', '300x200');
            mainPhoto.alt = this.alt;
            
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.style.borderColor = 'transparent');
            // Add active class to clicked thumbnail
            this.style.borderColor = '#667eea';
        });
    });

    // Registration Form Validation
    setupRegistrationForm();
}

// Calculator Functions
let currentInput = '0';
let operator = null;
let previousInput = null;
let waitingForOperand = false;

function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}

function appendNumber(num) {
    if (waitingForOperand) {
        currentInput = num;
        waitingForOperand = false;
    } else {
        currentInput = currentInput === '0' ? num : currentInput + num;
    }
    updateDisplay();
}

function appendOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (previousInput === null) {
        previousInput = inputValue;
    } else if (operator) {
        const currentValue = previousInput || 0;
        const newValue = performCalculation(currentValue, inputValue, operator);

        currentInput = String(newValue);
        previousInput = newValue;
        updateDisplay();
    }

    waitingForOperand = true;
    operator = nextOperator;
}

function calculate() {
    const inputValue = parseFloat(currentInput);

    if (previousInput !== null && operator) {
        const newValue = performCalculation(previousInput, inputValue, operator);
        currentInput = String(newValue);
        previousInput = null;
        operator = null;
        waitingForOperand = true;
        updateDisplay();
    }
}

function performCalculation(firstValue, secondValue, operator) {
    switch (operator) {
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case '*':
            return firstValue * secondValue;
        case '/':
            return secondValue !== 0 ? firstValue / secondValue : 0;
        default:
            return secondValue;
    }
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    waitingForOperand = false;
    updateDisplay();
}

function deleteChar() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

// Registration Form Validation
function setupRegistrationForm() {
    const form = document.getElementById('registrationForm');
    const bioTextarea = document.getElementById('bio');
    const bioCounter = document.getElementById('bioCounter');

    // Bio character counter
    bioTextarea.addEventListener('input', function() {
        const length = this.value.length;
        bioCounter.textContent = `${length}/300 characters`;
        bioCounter.style.color = length > 250 ? 'red' : '#666';
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
        });
        document.querySelectorAll('input, select, textarea').forEach(field => {
            field.classList.remove('error');
        });

        // Validate Full Name
        const fullName = document.getElementById('fullName').value.trim();
        if (fullName.length < 3) {
            showError('fullName', 'Full name must be at least 3 characters long');
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate Password
        const password = document.getElementById('password').value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            showError('password', 'Password must be at least 8 characters with letters and numbers');
            isValid = false;
        }

        // Validate Confirm Password
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            showError('confirmPassword', 'Passwords do not match');
            isValid = false;
        }

        // Validate Phone
        const phone = document.getElementById('phone').value.trim();
        const phoneRegex = /^\d{10,}$/;
        if (!phoneRegex.test(phone)) {
            showError('phone', 'Phone number must contain only digits and be at least 10 digits long');
            isValid = false;
        }

        // Validate Gender
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            showError('gender', 'Please select a gender');
            isValid = false;
        }

        // Validate Date of Birth
        const dob = new Date(document.getElementById('dob').value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        if (age < 18) {
            showError('dob', 'You must be at least 18 years old');
            isValid = false;
        }

        // Validate Country
        const country = document.getElementById('country').value;
        if (!country) {
            showError('country', 'Please select a country');
            isValid = false;
        }

        // Validate Hobbies
        const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
        if (hobbies.length === 0) {
            showError('hobbies', 'Please select at least one hobby');
            isValid = false;
        }

        // Validate Profile Picture (if selected)
        const profilePicture = document.getElementById('profilePicture');
        if (profilePicture.files.length > 0) {
            const file = profilePicture.files[0];
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!allowedTypes.includes(file.type)) {
                showError('profilePicture', 'Please upload a valid image file (JPG, JPEG, PNG)');
                isValid = false;
            }
        }

        if (isValid) {
            alert('✅ Registration successful! All validations passed.');
            form.reset();
            bioCounter.textContent = '0/300 characters';
        } else {
            alert('❌ Please fix the errors in the form before submitting.');
        }
    });
}

function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(fieldName + 'Error');
    
    field.classList.add('error');
    errorElement.textContent = message;
}

// Initialize calculator display
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
});
