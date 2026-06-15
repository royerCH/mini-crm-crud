package com.chr.gestor_cliente_ventas.model;

import jakarta.persistence.*;


import java.math.BigDecimal;
import java.time.LocalDateTime;



@Entity
@Table(name = "cuentas")
public class Cuenta {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "numero_cuenta")
        private String numeroCuenta;

        private BigDecimal saldo;

        private String estado;

        @Column(name = "cliente_id")
        private Long clienteId;

        @Column(name = "fecha_creacion")
        private LocalDateTime fechaCreacion;

        @Column(name = "fecha_actualizacion")
        private LocalDateTime fechaActualizacion;

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public String getNumeroCuenta() {
                return numeroCuenta;
        }

        public void setNumeroCuenta(String numeroCuenta) {
                this.numeroCuenta = numeroCuenta;
        }

        public BigDecimal getSaldo() {
                return saldo;
        }

        public void setSaldo(BigDecimal saldo) {
                this.saldo = saldo;
        }

        public String getEstado() {
                return estado;
        }

        public void setEstado(String estado) {
                this.estado = estado;
        }

        public Long getClienteId() {
                return clienteId;
        }

        public void setClienteId(Long clienteId) {
                this.clienteId = clienteId;
        }

        public LocalDateTime getFechaCreacion() {
                return fechaCreacion;
        }

        public void setFechaCreacion(LocalDateTime fechaCreacion) {
                this.fechaCreacion = fechaCreacion;
        }

        public LocalDateTime getFechaActualizacion() {
                return fechaActualizacion;
        }

        public void setFechaActualizacion(LocalDateTime fechaActualizacion) {
                this.fechaActualizacion = fechaActualizacion;
        }
}