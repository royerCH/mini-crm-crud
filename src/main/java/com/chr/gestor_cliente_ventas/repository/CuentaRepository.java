package com.chr.gestor_cliente_ventas.repository;

import com.chr.gestor_cliente_ventas.model.Cuenta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CuentaRepository extends JpaRepository<Cuenta, Long> {
}