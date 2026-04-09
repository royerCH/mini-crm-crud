console.log("hola mundo, haciendo pruebas para comprobar que responda el JS")


// consumoapiusers.js

function cargarAPI() {
    fetch('/api/demo/users')
        .then(resp => resp.json())
        .then(data => {
            console.log('Datos recibidos:', data);
            const container = document.getElementById('apiDemoContent');
            container.innerHTML = '';
            data.forEach(u => {
                const card = document.createElement('div');
                card.className = 'col-md-4';
                card.innerHTML = `
                    <div class="card shadow-sm p-3 mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${u.name}</h5>
                            <p class="card-text"><strong>Email:</strong> ${u.email}</p>
                            <p class="card-text"><strong>Username:</strong> ${u.username}</p>
                            <p class="card-text"><strong>Website:</strong> <a href="http://${u.website}" target="_blank">${u.website}</a></p>
                        </div>
                    </div>`;
                container.appendChild(card);
            });
        })
        .catch(err => {
            console.error('Error al consumir API:', err);
            document.getElementById('apiDemoContent').innerHTML = '<p class="text-danger text-center mt-3">Error al cargar datos</p>';
        });
}

// Asociar botón al evento
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnCargarAPI');
    if(btn) btn.addEventListener('click', cargarAPI);
});