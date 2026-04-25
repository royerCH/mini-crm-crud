package com.chr.gestor_cliente_ventas.controller;


import com.chr.gestor_cliente_ventas.model.Venta;
import com.chr.gestor_cliente_ventas.service.VentaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ventas")

public class VentaRestController {

    private final VentaService ventaService;

    public VentaRestController(VentaService ventaService) {
        this.ventaService = ventaService;
    }

    @GetMapping
    public List<Venta> getAllVentas() {
        return ventaService.getAllVentas();
    }

    @GetMapping("/cliente/{clienteId}")
    public List<Venta> getVentasByCliente(@PathVariable int clienteId) {
        return ventaService.getVentasByClienteId(clienteId);
    }

    @PostMapping
    public void addVenta(@RequestBody Venta venta) {
        ventaService.addVenta(venta);
    }

    @GetMapping("/{id}")
    public Venta getVentaById(@PathVariable int id) {
        return ventaService.getVentaById(id);
    }


    @GetMapping("/countventas")
    public int countVentas() {
        return ventaService.countVentas(); // Devuelve el total real
    }

    @PutMapping("/{id}")
    public void updateVenta(@PathVariable int id, @RequestBody Venta venta) {
        ventaService.updateVenta(id, venta);
    }


    @DeleteMapping("/{id}")
    public void deleteVenta(@PathVariable int id) {
        ventaService.deleteVenta(id);
    }




}

