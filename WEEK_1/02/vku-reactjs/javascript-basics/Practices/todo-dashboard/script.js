// Global Variables
let todos = [];
let notes = [];
let currentFilter = 'all';
let editingItem = null;

// Note Colors Palette
const NOTE_COLORS = [
    'note-color-1', 'note-color-2', 'note-color-3', 'note-color-4',
    'note-color-5', 'note-color-6', 'note-color-7', 'note-color-8'
];

// DOM Elements
const elements = {
    // Todo elements
    todoInput: document.getElementById('todoInput'),
    addTodoBtn: document.getElementById('addTodoBtn'),
    todoList: document.getElementById('todoList'),
    todoError: document.getElementById('todoError'),
    totalTasks: document.getElementById('totalTasks'),
    completedTasks: document.getElementById('completedTasks'),
    
    // Note elements
    noteInput: document.getElementById('noteInput'),
    addNoteBtn: document.getElementById('addNoteBtn'),
    notesContainer: document.getElementById('notesContainer'),
    noteError: document.getElementById('noteError'),
    
    // Clock and theme
    clock: document.getElementById('clock'),
    greeting: document.getElementById('greeting'),
    themeToggle: document.getElementById('themeToggle'),
    
    // Modal elements
    editModal: document.getElementById('editModal'),
    modalTitle: document.getElementById('modalTitle'),
    editInput: document.getElementById('editInput'),
    saveEdit: document.getElementById('saveEdit'),
    cancelEdit: document.getElementById('cancelEdit'),
    modalClose: document.getElementById('modalClose')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadFromLocalStorage();
    setupEventListeners();
    startClock();
    updateGreeting();
    renderTodos();
    renderNotes();
    updateStats();
}

// Event Listeners Setup
function setupEventListeners() {
    // Todo event listeners
    elements.addTodoBtn.addEventListener('click', addTodo);
    elements.todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTodo();
    });
    
    // Note event listeners
    elements.addNoteBtn.addEventListener('click', addNote);
    elements.noteInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addNote();
    });
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setFilter(this.dataset.filter);
        });
    });
    
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Modal event listeners
    elements.modalClose.addEventListener('click', closeModal);
    elements.cancelEdit.addEventListener('click', closeModal);
    elements.saveEdit.addEventListener('click', saveEditedItem);
    
    // Close modal when clicking outside
    elements.editModal.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && elements.editModal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Todo Functions
function addTodo() {
    const text = elements.todoInput.value.trim();
    
    if (!validateInput(text, elements.todoError, 'Please enter a task!')) {
        return;
    }
    
    const todo = {
        id: generateId(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    todos.push(todo);
    elements.todoInput.value = '';
    hideError(elements.todoError);
    
    renderTodos();
    updateStats();
    saveToLocalStorage();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
    updateStats();
    saveToLocalStorage();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
        updateStats();
        saveToLocalStorage();
    }
}

function editTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        openEditModal('Edit Task', todo.text, 'todo', id);
    }
}

function renderTodos() {
    const filteredTodos = getFilteredTodos();
    elements.todoList.innerHTML = '';
    
    if (filteredTodos.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.className = 'empty-message';
        emptyMessage.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                ${getEmptyMessage()}
            </div>
        `;
        elements.todoList.appendChild(emptyMessage);
        return;
    }
    
    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="todo-checkbox" 
                ${todo.completed ? 'checked' : ''} 
                onchange="toggleTodo('${todo.id}')"
            >
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <div class="todo-actions">
                <button class="edit-btn" onclick="editTodo('${todo.id}')" title="Edit task">✏️</button>
                <button class="btn-danger" onclick="deleteTodo('${todo.id}')" title="Delete task">🗑️</button>
            </div>
        `;
        elements.todoList.appendChild(li);
    });
}

function getFilteredTodos() {
    switch (currentFilter) {
        case 'completed':
            return todos.filter(todo => todo.completed);
        case 'incomplete':
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

function getEmptyMessage() {
    switch (currentFilter) {
        case 'completed':
            return '🎉 No completed tasks yet. Mark some tasks as done!';
        case 'incomplete':
            return '✅ Great job! All tasks are completed!';
        default:
            return '📝 No tasks yet. Add your first task above!';
    }
}

function setFilter(filter) {
    currentFilter = filter;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    
    renderTodos();
}

function updateStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    
    elements.totalTasks.textContent = total;
    elements.completedTasks.textContent = completed;
}

// Note Functions
function addNote() {
    const text = elements.noteInput.value.trim();
    
    if (!validateInput(text, elements.noteError, 'Please enter a note!')) {
        return;
    }
    
    const note = {
        id: generateId(),
        text: text,
        color: getRandomNoteColor(),
        createdAt: new Date().toISOString()
    };
    
    notes.push(note);
    elements.noteInput.value = '';
    hideError(elements.noteError);
    
    renderNotes();
    saveToLocalStorage();
}

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    renderNotes();
    saveToLocalStorage();
}

function editNote(id) {
    const note = notes.find(n => n.id === id);
    if (note) {
        openEditModal('Edit Note', note.text, 'note', id);
    }
}

function renderNotes() {
    elements.notesContainer.innerHTML = '';
    
    if (notes.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.style.cssText = `
            grid-column: 1 / -1; 
            text-align: center; 
            padding: 2rem; 
            color: var(--text-secondary);
        `;
        emptyMessage.innerHTML = '📌 No notes yet. Create your first sticky note!';
        elements.notesContainer.appendChild(emptyMessage);
        return;
    }
    
    notes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.className = `note-item ${note.color}`;
        noteDiv.innerHTML = `
            <div class="note-text">${escapeHtml(note.text)}</div>
            <button class="note-delete" onclick="deleteNote('${note.id}')" title="Delete note">&times;</button>
        `;
        
        // Add double-click to edit
        noteDiv.addEventListener('dblclick', () => editNote(note.id));
        
        elements.notesContainer.appendChild(noteDiv);
    });
}

function getRandomNoteColor() {
    return NOTE_COLORS[Math.floor(Math.random() * NOTE_COLORS.length)];
}

// Clock and Greeting Functions
function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    elements.clock.textContent = `${hours}:${minutes}:${seconds}`;
    updateGreeting();
}

function updateGreeting() {
    const hour = new Date().getHours();
    let greeting, icon;
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Good morning';
        icon = '🌅';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
        icon = '☀️';
    } else if (hour >= 18 && hour < 22) {
        greeting = 'Good evening';
        icon = '🌆';
    } else {
        greeting = 'Good night';
        icon = '🌙';
    }
    
    elements.greeting.textContent = `${greeting} ${icon}`;
}

// Theme Functions
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Update theme toggle icon
    const themeIcon = elements.themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeIcon = elements.themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Modal Functions
function openEditModal(title, currentText, type, id) {
    elements.modalTitle.textContent = title;
    elements.editInput.value = currentText;
    editingItem = { type, id };
    
    elements.editModal.classList.add('show');
    elements.editInput.focus();
    elements.editInput.select();
}

function closeModal() {
    elements.editModal.classList.remove('show');
    editingItem = null;
    elements.editInput.value = '';
}

function saveEditedItem() {
    const newText = elements.editInput.value.trim();
    
    if (!newText) {
        alert('Please enter some text!');
        return;
    }
    
    if (editingItem.type === 'todo') {
        const todo = todos.find(t => t.id === editingItem.id);
        if (todo) {
            todo.text = newText;
            renderTodos();
        }
    } else if (editingItem.type === 'note') {
        const note = notes.find(n => n.id === editingItem.id);
        if (note) {
            note.text = newText;
            renderNotes();
        }
    }
    
    saveToLocalStorage();
    closeModal();
}

// Local Storage Functions
function saveToLocalStorage() {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('notes', JSON.stringify(notes));
    } catch (error) {
        console.error('Failed to save to localStorage:', error);
    }
}

function loadFromLocalStorage() {
    try {
        const savedTodos = localStorage.getItem('todos');
        const savedNotes = localStorage.getItem('notes');
        
        if (savedTodos) {
            todos = JSON.parse(savedTodos);
        }
        
        if (savedNotes) {
            notes = JSON.parse(savedNotes);
        }
        
        loadTheme();
    } catch (error) {
        console.error('Failed to load from localStorage:', error);
        todos = [];
        notes = [];
    }
}

// Utility Functions
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function validateInput(text, errorElement, message) {
    if (!text) {
        showError(errorElement, message);
        return false;
    }
    
    hideError(errorElement);
    return true;
}

function showError(element, message) {
    element.textContent = message;
    element.classList.add('show');
    
    // Auto-hide error after 5 seconds
    setTimeout(() => {
        hideError(element);
    }, 5000);
}

function hideError(element) {
    element.classList.remove('show');
    element.textContent = '';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Drag and Drop Functions (Bonus Feature)
function enableDragAndDrop() {
    // This is a bonus feature that could be implemented
    // for reordering todos and notes
    console.log('Drag and drop feature could be implemented here');
}

// Export/Import Functions (Bonus Feature)
function exportData() {
    const data = {
        todos: todos,
        notes: notes,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'dashboard-data.json';
    link.click();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.todos && Array.isArray(data.todos)) {
                todos = data.todos;
            }
            
            if (data.notes && Array.isArray(data.notes)) {
                notes = data.notes;
            }
            
            renderTodos();
            renderNotes();
            updateStats();
            saveToLocalStorage();
            
            alert('Data imported successfully!');
        } catch (error) {
            alert('Failed to import data. Please check the file format.');
            console.error('Import error:', error);
        }
    };
    
    reader.readAsText(file);
}

// Performance Optimization: Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to add todo
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && document.activeElement === elements.todoInput) {
        addTodo();
        e.preventDefault();
    }
    
    // Ctrl/Cmd + Shift + Enter to add note
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Enter' && document.activeElement === elements.noteInput) {
        addNote();
        e.preventDefault();
    }
    
    // Ctrl/Cmd + D to toggle theme
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        toggleTheme();
        e.preventDefault();
    }
});

// Initialize drag and drop on load
document.addEventListener('DOMContentLoaded', function() {
    enableDragAndDrop();
});

// Console log for debugging
console.log('📋 Interactive To-Do & Notes Dashboard loaded successfully!');
console.log('🎯 Features: Todo management, Sticky notes, Live clock, Theme switcher, Local storage');
console.log('⌨️ Keyboard shortcuts:');
console.log('  - Ctrl/Cmd + Enter: Add todo');
console.log('  - Ctrl/Cmd + Shift + Enter: Add note');
console.log('  - Ctrl/Cmd + D: Toggle theme');
console.log('  - Escape: Close modal');
console.log('  - Double-click note: Edit note');
