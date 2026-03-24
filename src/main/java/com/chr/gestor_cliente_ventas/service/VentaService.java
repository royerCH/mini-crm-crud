package com.chr.gestor_cliente_ventas.service;

import com.chr.gestor_cliente_ventas.model.Venta;
import com.chr.gestor_cliente_ventas.repository.VentaMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@Service
public class VentaService {


    private final VentaMapper ventaMapper;

    public VentaService(VentaMapper ventaMapper) {
        this.ventaMapper = ventaMapper;
    }

    public List<Venta> getAllVentas() {
        return ventaMapper.getAllVentas();
    }

    public List<Venta> getVentasByClienteId(int clienteId) {
        return ventaMapper.getVentasByClienteId(clienteId);
    }

    public void addVenta(Venta venta) {
        ventaMapper.insertVenta(venta);
    }

    @GetMapping("/{id}")
    public Venta getVentaById(@PathVariable int id) {
        return ventaMapper.getVentaById(id);
    }


}

