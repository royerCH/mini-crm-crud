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

}


