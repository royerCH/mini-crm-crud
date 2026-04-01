package com.chr.gestor_cliente_ventas.controller;

import com.chr.gestor_cliente_ventas.service.LoginService;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    // Mostrar login
    @GetMapping("/login")
    public String loginPage() {
        return "login"; // templates/login.html
    }

    // Procesar login
    @PostMapping("/login")
    public String loginSubmit(@RequestParam String username,
                              @RequestParam String password,
                              HttpSession session, Model model) {

        if (loginService.authenticate(username, password)) {
            session.setAttribute("user", username); // guardamos usuario en sesión
            model.addAttribute("username", username);
            return "redirect:/index"; // redirige al dashboard
        } else {
            return "redirect:/login?error=true"; // redirige con mensaje de error
        }
    }

    // Proteger index
    @GetMapping("/index")
    public String index(HttpSession session, Model model) {
        Object user = session.getAttribute("user");
        if (user == null) {
            return "redirect:/login";
        }
        model.addAttribute("username", user); // enviamos a la vista
        return "index"; // Thymeleaf procesará templates/index.html
    }
    // Logout
    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/login"; // cerrar sesión y volver al login
    }
}

