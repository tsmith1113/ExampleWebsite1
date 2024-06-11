document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('userForm')) {
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const role = document.querySelector('input[name="role"]:checked').value;
            localStorage.setItem('name', name);
            localStorage.setItem('role', role);
            location.href = 'information.html';
        });
    } else {
        const name = localStorage.getItem('name');
        const role = localStorage.getItem('role');
        const contentDiv = document.getElementById('content');
        
        if (role === 'instructor') {
            contentDiv.innerHTML = `
                <h1>Welcome Instructor ${name}</h1>
                <p class="blue-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula urna et magna euismod, vel ultrices lorem condimentum.</p>
                <div class="buttons">
                    <button>1</button>
                    <button>2</button>
                </div>
            `;
        } else if (role === 'student') {
            contentDiv.innerHTML = `
                <h1>Welcome Student ${name}</h1>
                <p class="purple-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula urna et magna euismod, vel ultrices lorem condimentum.</p>
                <div class="buttons">
                    <button>1</button>
                    <button>2</button>
                </div>
            `;
        }
    }
});