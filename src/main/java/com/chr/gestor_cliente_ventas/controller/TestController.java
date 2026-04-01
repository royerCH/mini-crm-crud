package com.chr.gestor_cliente_ventas.controller;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController {

    @GetMapping("/")
    public String home() {
        return "<h1>Escribir la siguiente dirección en la URL para acceder al sistema: http://localhost:8080/login</h1>";
    }

}
