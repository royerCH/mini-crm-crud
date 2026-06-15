package com.chr.gestor_cliente_ventas.controller;


import com.chr.gestor_cliente_ventas.model.Cuenta;
import com.chr.gestor_cliente_ventas.service.CuentaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/cuentas")
public class CuentaController {

    private final CuentaService cuentaService;

    public CuentaController(CuentaService cuentaService) {
        this.cuentaService = cuentaService;
    }

    @PostMapping
    public ResponseEntity<Cuenta> crear(@RequestBody Cuenta cuenta) {
        return ResponseEntity.ok(cuentaService.crearCuenta(cuenta));
    }

    @GetMapping
    public List<Cuenta> listar(){
        return cuentaService.listar();
    }


    @GetMapping("/count")
    public long count(){
        return cuentaService.count();
    }

}


