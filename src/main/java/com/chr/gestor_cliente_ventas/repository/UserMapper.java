package com.chr.gestor_cliente_ventas.repository;


import com.chr.gestor_cliente_ventas.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {


    @Select("SELECT * FROM usuarios WHERE username = #{username}")
    User findByUsername(String username);
}

