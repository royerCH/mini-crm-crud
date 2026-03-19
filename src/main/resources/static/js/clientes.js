
const form = document.getElementById('clienteForm');
const clienteIdInput = document.getElementById('clienteId');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const telefonoInput = document.getElementById('telefono');
const cancelBtn = document.getElementById('cancelEdit');
const tableBody = document.getElementById('clientesTableBody');

async function loadClientes() {
    const res = await fetch('/api/clientes');
    const clientes = await res.json();
    tableBody.innerHTML = '';
    clientes.forEach(c => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${c.id}</td>
            <td>${c.nombre}</td>
            <td>${c.correo}</td>
            <td>${c.telefono}</td>
            <td>
                <button onclick="editCliente(${c.id})">Editar</button>
                <button onclick="deleteCliente(${c.id})">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    const cliente = {
        nombre: nombreInput.value,
        correo: correoInput.value,
        telefono: telefonoInput.value
    };
    if (clienteIdInput.value) {
        await fetch(`/api/clientes/${clienteIdInput.value}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        });
    } else {
        await fetch('/api/clientes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        });
    }
    form.reset();
    clienteIdInput.value = '';
    loadClientes();
});

async function editCliente(id) {
    const res = await fetch(`/api/clientes/${id}`);
    const cliente = await res.json();
    clienteIdInput.value = cliente.id;
    nombreInput.value = cliente.nombre;
    correoInput.value = cliente.correo;
    telefonoInput.value = cliente.telefono;
}

cancelBtn.addEventListener('click', () => {
    form.reset();
    clienteIdInput.value = '';
});

async function deleteCliente(id) {
    if (confirm('¿Seguro que quieres eliminar este cliente?')) {
        await fetch(`/api/clientes/${id}`, { method: 'DELETE' });
        loadClientes();
    }
}

loadClientes();