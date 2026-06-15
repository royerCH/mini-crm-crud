package com.chr.gestor_cliente_ventas.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "transacciones")
public class Transaccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal monto;

    private String tipo;
    // DEPOSITO, RETIRO, TRANSFERENCIA

    @Column(updatable = false)
    private LocalDateTime fecha;

    // 🔗 Relación con Cuenta (JPA side)
    @ManyToOne
    @JoinColumn(name = "cuenta_id")
    private Cuenta cuenta;

    // 🔧 opcional: constructor automático de fecha
    @PrePersist
    public void prePersist() {
        this.fecha = LocalDateTime.now();
    }

    // getters y setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getMonto() {
        return monto;
    }

    public void setMonto(BigDecimal monto) {
        this.monto = monto;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

    public Cuenta getCuenta() {
        return cuenta;
    }

    public void setCuenta(Cuenta cuenta) {
        this.cuenta = cuenta;
    }
}