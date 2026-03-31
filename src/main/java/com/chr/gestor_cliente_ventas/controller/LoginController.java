package com.chr.gestor_cliente_ventas.controller;

import com.chr.gestor_cliente_ventas.model.User;
import com.chr.gestor_cliente_ventas.service.LoginService;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public String loginSubmit(@RequestParam String username,
                              @RequestParam String password,
                              HttpSession session) {

        if (loginService.authenticate(username, password)) {
            session.setAttribute("user", username); // guardar sesión
            return "redirect:/index.html";
        } else {
            return "redirect:/login.html?error=true";
        }
    }

    // Proteger index.html
    @GetMapping("/index.html")
    public String index(HttpSession session) {
        if (session.getAttribute("user") == null) {
            return "redirect:/login.html"; // no logueado
        }
        return "index"; // cargar index.html
    }

    // Logout
    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/login.html";
    }
}