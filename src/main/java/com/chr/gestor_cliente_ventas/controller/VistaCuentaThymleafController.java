package com.chr.gestor_cliente_ventas.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VistaCuentaThymleafController {


    @GetMapping("/financiera/cuentasbancarias")
    public String mostrarVistaCuentaBAncaria(){

        return "vistacuentasbancarias";
    }

}
