package com.chr.gestor_cliente_ventas.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainControllers {




    @Controller
    public class MainController {

        // Interactua con la pestaña acerca del desarrollador
        @GetMapping("/developer")
        public String developer() {

            return "devroyer";
        }

    }
}
