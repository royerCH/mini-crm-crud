package com.chr.gestor_cliente_ventas.service;

import com.chr.gestor_cliente_ventas.model.User;
import com.chr.gestor_cliente_ventas.repository.UserMapper;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final UserMapper userMapper;

    public LoginService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public boolean authenticate(String username, String password) {
        User user = userMapper.findByUsername(username);
        return user != null && user.getPassword().equals(password); // texto plano
    }

    public User getUser(String username) {
        return userMapper.findByUsername(username);
    }
}