package com.chr.gestor_cliente_ventas.repository;


import com.chr.gestor_cliente_ventas.model.Cliente;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ClienteMapper{

    @Select("SELECT * FROM clientes")
    List<Cliente> getAllClientes();

    @Select("SELECT * FROM clientes WHERE id = #{id}")
    Cliente getClienteById(int id);

    @Insert("INSERT INTO clientes(nombre, correo, telefono) VALUES(#{nombre}, #{correo}, #{telefono})")
    void insertCliente(Cliente cliente);

    @Update("UPDATE clientes SET nombre=#{nombre}, correo=#{correo}, telefono=#{telefono} WHERE id=#{id}")
    void updateCliente(Cliente cliente);

    @Delete("DELETE FROM clientes WHERE id=#{id}")
    void deleteCliente(int id);

    @Select("SELECT COUNT(*) FROM clientes")
    int countClientes();


}
