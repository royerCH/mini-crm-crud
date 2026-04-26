package com.chr.gestor_cliente_ventas.service;
import com.chr.gestor_cliente_ventas.model.Cliente;
import com.chr.gestor_cliente_ventas.repository.ClienteMapper;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClienteService {


    private final ClienteMapper clienteMapper;

    public ClienteService(ClienteMapper clienteMapper) {
        this.clienteMapper = clienteMapper;
    }

    public List<Cliente> getAllClientes() {
        return clienteMapper.getAllClientes();
    }

    public Cliente getClienteById(int id) {
        return clienteMapper.getClienteById(id);
    }

    public void addCliente(Cliente cliente) {
        clienteMapper.insertCliente(cliente);
    }

    public void updateCliente(Cliente cliente) {
        clienteMapper.updateCliente(cliente);
    }

    public void deleteCliente(int id) {
        clienteMapper.deleteCliente(id);
    }


    /**
            * Borra un cliente solo si no tiene ventas asociadas.
     * @param id id del cliente
     * @return true si se borró, false si tiene ventas o no existe
     */
    public boolean deleteClienteIfNoVentas(int id) {
        Cliente cliente = clienteMapper.getClienteById(id);
        if (cliente == null) return false; // cliente no existe

        System.out.println("Cliente encontrado: " + cliente.getNombre());

        // contar ventas reales del cliente
        int countVentas = clienteMapper.countVentasByClienteId(id);
        System.out.println("Ventas asociadas: " + countVentas);

        if (countVentas > 0) {
            return false; // tiene ventas, no borrar
        }

        clienteMapper.deleteCliente(id);
        System.out.println("Cliente borrado: " + id);
        return true; // borrado exitoso
    }




}


