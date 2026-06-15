package com.chr.gestor_cliente_ventas.service;


import com.chr.gestor_cliente_ventas.model.Cuenta;
import com.chr.gestor_cliente_ventas.repository.CuentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CuentaService {

    @Autowired
    private CuentaRepository cuentaRepository;

    public Cuenta crearCuenta(Cuenta cuenta){

        return cuentaRepository.save(cuenta);


    }


    public List<Cuenta> listar(){
        return cuentaRepository.findAll();
    }

    public long count(){
        return cuentaRepository.count();
    }



}

