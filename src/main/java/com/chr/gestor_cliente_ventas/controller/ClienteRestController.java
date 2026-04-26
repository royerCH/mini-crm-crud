package com.chr.gestor_cliente_ventas.controller;

import com.chr.gestor_cliente_ventas.model.Cliente;
import com.chr.gestor_cliente_ventas.service.ClienteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/clientes")
public class ClienteRestController {
    private final ClienteService clienteService;


    public ClienteRestController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping
    public List<Cliente> getAllClientes() {
        return clienteService.getAllClientes();
    }

    @GetMapping("/{id}")
    public Cliente getCliente(@PathVariable int id) {
        return clienteService.getClienteById(id);
    }

    @PostMapping
    public void addCliente(@RequestBody Cliente cliente) {
        clienteService.addCliente(cliente);
    }

    @PutMapping("/{id}")
    public void updateCliente(@PathVariable int id, @RequestBody Cliente cliente) {
        cliente.setId(id);
        clienteService.updateCliente(cliente);
    }

    /*
    @DeleteMapping("/{id}")
    public void deleteCliente(@PathVariable int id) {
        clienteService.deleteCliente(id);
    }
    método original
    */

    // corregir método delete


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCliente(@PathVariable int id) {
        boolean eliminado = clienteService.deleteClienteIfNoVentas(id);
        if (eliminado) {
            return ResponseEntity.ok("Cliente eliminado correctamente.");
        } else {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("No se puede eliminar: primero borra las ventas asociadas.");
        }
    }


    @GetMapping("/count")
    public int countClientes() {
        return clienteService.getAllClientes().size(); // O tu Mapper countClientes()
    }
}




