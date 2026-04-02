
// --- Elementos del formulario de clientes ---
const form = document.getElementById('clienteForm');
const clienteIdInput = document.getElementById('clienteId');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const telefonoInput = document.getElementById('telefono');
const cancelBtn = document.getElementById('cancelEdit');
const tableBody = document.getElementById('clientesTableBody');

// --- Cargar clientes en clientes.html ---
async function loadClientes() {
    if (!tableBody) return; // Solo corre si estamos en clientes.html

    try {
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
                    <button class="btn btn-warning btn-sm me-1" onclick="editCliente(${c.id})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteCliente(${c.id})">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    } catch (error) {
        console.error("Error al cargar clientes:", error);
    }
}

// --- Agregar o editar cliente ---
form?.addEventListener('submit', async e => {
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
    loadTotalClientesDashboard(); // Actualiza el total en dashboard
});

// --- Editar cliente ---
async function editCliente(id) {
    const res = await fetch(`/api/clientes/${id}`);
    const cliente = await res.json();
    clienteIdInput.value = cliente.id;
    nombreInput.value = cliente.nombre;
    correoInput.value = cliente.correo;
    telefonoInput.value = cliente.telefono;
}

// --- Cancelar edición ---
cancelBtn?.addEventListener('click', () => {
    form.reset();
    clienteIdInput.value = '';
});

// --- Eliminar cliente ---
async function deleteCliente(id) {
    if (confirm('¿Seguro que quieres eliminar este cliente?')) {
        await fetch(`/api/clientes/${id}`, { method: 'DELETE' });
        loadClientes();
        loadTotalClientesDashboard(); // Actualiza el total en dashboard
    }
}

// --- Cargar total de clientes en dashboard/index ---
async function loadTotalClientesDashboard() {
    const totalElem = document.getElementById('totalClientes');
    if (!totalElem) return; // Solo corre si existe la tarjeta en el DOM

    try {
        const res = await fetch('/api/clientes/count'); // tu endpoint existente
        const total = await res.text(); // devuelve número plano
        totalElem.textContent = total;
    } catch (error) {
        console.error("Error al cargar total de clientes:", error);
    }
}

// --- Inicialización ---
document.addEventListener('DOMContentLoaded', () => {
    loadClientes();              // Solo en clientes.html
    loadTotalClientesDashboard(); // Solo en index/dashboard
});
