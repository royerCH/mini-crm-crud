package com.chr.gestor_cliente_ventas.repository;

import com.chr.gestor_cliente_ventas.model.Transaccion;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

public interface TransaccionRepository extends JpaRepositoryImplementation<Transaccion, Long> {
}
