package com.chr.gestor_cliente_ventas.controller;

import com.chr.gestor_cliente_ventas.service.ConsumoAPIService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ConsumoAPIController {

    private final ConsumoAPIService consumoAPIService;

    public ConsumoAPIController(ConsumoAPIService consumoAPIService){
        this.consumoAPIService = consumoAPIService;
    }

    @GetMapping("/api/demo/users")
    public List<Map<String, Object>> getUsers() {
        return consumoAPIService.getUsers();
    }



}
