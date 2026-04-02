package com.chr.gestor_cliente_ventas.repository;

import com.chr.gestor_cliente_ventas.model.Venta;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface VentaMapper {

    @Select("SELECT * FROM ventas")
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "clienteId", column = "cliente_id"),
            @Result(property = "monto", column = "monto"),
            @Result(property = "fecha", column = "fecha")
    })
    List<Venta> getAllVentas();

    @Select("SELECT * FROM ventas WHERE cliente_id = #{clienteId}")
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "clienteId", column = "cliente_id"),
            @Result(property = "monto", column = "monto"),
            @Result(property = "fecha", column = "fecha")
    })
    List<Venta> getVentasByClienteId(int clienteId);

    @Insert("INSERT INTO ventas(cliente_id, monto, fecha) VALUES(#{clienteId}, #{monto}, #{fecha})")
    void insertVenta(Venta venta);

    @Select("SELECT * FROM ventas WHERE id = #{id}")
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "clienteId", column = "cliente_id"),
            @Result(property = "monto", column = "monto"),
            @Result(property = "fecha", column = "fecha")
    })
    Venta getVentaById(int id);


    @Select("SELECT COUNT(id) FROM ventas")
    int countVentas();


}
