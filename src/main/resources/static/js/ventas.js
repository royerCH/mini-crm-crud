
console.log("Buscando número de ventas...");

document.addEventListener('DOMContentLoaded', () => {

    // --- Dashboard: total de ventas ---
    const totalElemVentas = document.getElementById('totalVentas');
    if (totalElemVentas) {
        fetch('/api/ventas/countventas')
            .then(res => res.text())
            .then(total => {
                totalElemVentas.textContent = total;
                console.log("Número de ventas cargado:", total);
            })
            .catch(err => console.error("Error cargando total de ventas:", err));
    }

    // --- Página de ventas: tabla y formulario ---
    const form = document.getElementById('ventaForm');
    const cancelBtn = document.getElementById('cancelEdit');
    const tableBody = document.getElementById('ventasTableBody');
    const ventaIdInput = document.getElementById('ventaId');
    const clienteIdInput = document.getElementById('clienteId');
    const montoInput = document.getElementById('monto');
    const fechaInput = document.getElementById('fecha');

    // Solo ejecutar si estamos en ventas.html
    if (tableBody && form) {

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
                    <td>${new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(v.monto)}</td>
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

        // Cancelar edición
        cancelBtn?.addEventListener('click', () => {
            form.reset();
            ventaIdInput.value = '';
        });

        // Inicializar tabla
        loadVentas();
    }
});

// --- Funciones globales para editar y eliminar ventas ---
async function editVenta(id) {
    const ventaIdInput = document.getElementById('ventaId');
    const clienteIdInput = document.getElementById('clienteId');
    const montoInput = document.getElementById('monto');
    const fechaInput = document.getElementById('fecha');

    const res = await fetch(`/api/ventas/${id}`);
    const venta = await res.json();
    ventaIdInput.value = venta.id;
    clienteIdInput.value = venta.clienteId;
    montoInput.value = venta.monto;
    fechaInput.value = venta.fecha ? new Date(venta.fecha).toISOString().slice(0,16) : '';
}

async function deleteVenta(id) {
    if (confirm('¿Seguro que quieres eliminar esta venta?')) {
        await fetch(`/api/ventas/${id}`, { method: 'DELETE' });
        const tableBody = document.getElementById('ventasTableBody');
        if (tableBody) {
            // refresca tabla
            const res = await fetch('/api/ventas');
            const ventas = await res.json();
            tableBody.innerHTML = '';
            ventas.forEach(v => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${v.id}</td>
                    <td>${v.clienteId}</td>
                    <td>${new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(v.monto)}</td>
                    <td>${new Date(v.fecha).toLocaleString()}</td>
                    <td>
                        <button onclick="editVenta(${v.id})" class="btn btn-warning btn-sm">Editar</button>
                        <button onclick="deleteVenta(${v.id})" class="btn btn-danger btn-sm">Eliminar</button>
                    </td>
                `;
                tableBody.appendChild(tr);
            });
        }
    }
}
