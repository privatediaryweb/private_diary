// notes.js

// Agar user login nahi hai to index.html pe redirect karo
if (!localStorage.getItem('userEmail')) {
    window.location.href = 'index.html';
}

// Note add karne ka function
function addNote() {
    var title = document.getElementById('title').value.trim();
    var content = document.getElementById('content').value.trim();
    var userEmail = localStorage.getItem('userEmail');
    var date = new Date().toLocaleDateString();
    
    if (title === '' || content === '') {
        alert('Please enter both title and content.');
        return;
    }
    
    var notes = JSON.parse(localStorage.getItem(userEmail + '_notes')) || [];
    notes.push({ title, content, date });
    localStorage.setItem(userEmail + '_notes', JSON.stringify(notes));
    
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    displayNotes();
}

// Saare notes dikhane ka function
function displayNotes() {
    var userEmail = localStorage.getItem('userEmail');
    var notes = JSON.parse(localStorage.getItem(userEmail + '_notes')) || [];
    var notesDiv = document.getElementById('notes');
    notesDiv.innerHTML = '';
    
    notes.forEach((note, index) => {
        var noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <small>${note.date}</small>
            <p>${note.content}</p>
            <div class="note-buttons">
                <button onclick="editNote(${index})">Edit</button>
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
        `;
        notesDiv.appendChild(noteDiv);
    });
}

// Note edit karne ka function
function editNote(index) {
    var userEmail = localStorage.getItem('userEmail');
    var notes = JSON.parse(localStorage.getItem(userEmail + '_notes')) || [];
    
    var note = notes[index];
    var newTitle = prompt('Edit Title:', note.title);
    var newContent = prompt('Edit Content:', note.content);
    
    if (newTitle !== null && newContent !== null) {
        notes[index].title = newTitle.trim();
        notes[index].content = newContent.trim();
        localStorage.setItem(userEmail + '_notes', JSON.stringify(notes));
        displayNotes();
    }
}

// Note delete karne ka function
function deleteNote(index) {
    var confirmDelete = confirm('Are you sure you want to delete this note?');
    if (confirmDelete) {
        var userEmail = localStorage.getItem('userEmail');
        var notes = JSON.parse(localStorage.getItem(userEmail + '_notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem(userEmail + '_notes', JSON.stringify(notes));
        displayNotes();
    }
}

// Logout karne ka function
function logout() {
    firebase.auth().signOut().then(() => {
        localStorage.removeItem('userEmail'); // Sirf login ka email hatao, notes safe rahenge
        window.location.href = 'index.html';
    }).catch((error) => {
        alert(error.message);
    });
}

// Jab page load ho to notes dikhado
window.onload = displayNotes;