package com.chr.gestor_cliente_ventas.controller;

import com.chr.gestor_cliente_ventas.repository.VentaMapper;
import com.chr.gestor_cliente_ventas.service.LoginService;
import com.chr.gestor_cliente_ventas.service.VentaService;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class LoginController {

    private final LoginService loginService;
    private final VentaService ventaService;

    public LoginController(LoginService loginService, VentaService ventaService) {
        this.loginService = loginService;
        this.ventaService = ventaService;
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
        int totalVentas = ventaService.countVentas();
        model.addAttribute("username", user);
        model.addAttribute("totalVentas", totalVentas);

        return "index"; // aquí thymeleaf procesa los datos a la vista
    }
    // Logout
    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/login"; // cerrar sesión y volver al login
    }
    @GetMapping("/consumoapiusers")
    public String consumoApiUsersPage() {
        return "consumoapiusers"; // archivo Thymeleaf en templates/
    }








}

