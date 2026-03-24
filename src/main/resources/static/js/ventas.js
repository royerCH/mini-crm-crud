console.log("estas en ventas ");
const form = document.getElementById('ventaForm');
const ventaIdInput = document.getElementById('ventaId');
const clienteIdInput = document.getElementById('clienteId');
const montoInput = document.getElementById('monto');
const fechaInput = document.getElementById('fecha');
const cancelBtn = document.getElementById('cancelEdit');
const tableBody = document.getElementById('ventasTableBody');

// Cargar todas las ventas
async function loadVentas() {
    const res = await fetch('/api/ventas');
    const ventas = await res.json();
    tableBody.innerHTML = '';
    ventas.forEach(v => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${v.id}</td>
            <td>${v.clienteId}</td>
            <td>${v.monto}</td>
            <td>${new Date(v.fecha).toLocaleString()}</td>
            <td>
                <button onclick="editVenta(${v.id})" class="btn btn-warning btn-sm">Editar</button>
                <button onclick="deleteVenta(${v.id})" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

// Guardar o actualizar venta
form.addEventListener('submit', async e => {
    e.preventDefault();
    const venta = {
        clienteId: parseInt(clienteIdInput.value),
        monto: parseFloat(montoInput.value),
        fecha: fechaInput.value ? new Date(fechaInput.value).toISOString() : null
    };
    if (ventaIdInput.value) {
        await fetch(`/api/ventas/${ventaIdInput.value}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(venta)
        });
    } else {
        await fetch('/api/ventas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(venta)
        });
    }
    form.reset();
    ventaIdInput.value = '';
    loadVentas();
});

// Editar venta
async function editVenta(id) {
    const res = await fetch(`/api/ventas/${id}`);
    const venta = await res.json();
    ventaIdInput.value = venta.id;
    clienteIdInput.value = venta.clienteId;
    montoInput.value = venta.monto;
    fechaInput.value = venta.fecha ? new Date(venta.fecha).toISOString().slice(0,16) : '';
}

// Cancelar edición
cancelBtn.addEventListener('click', () => {
    form.reset();
    ventaIdInput.value = '';
});

// Eliminar venta
async function deleteVenta(id) {
    if (confirm('¿Seguro que quieres eliminar esta venta?')) {
        await fetch(`/api/ventas/${id}`, { method: 'DELETE' });
        loadVentas();
    }
}

// Cargar ventas al inicio
loadVentas();