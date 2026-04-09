package com.chr.gestor_cliente_ventas;

import com.chr.gestor_cliente_ventas.service.LoginService;
import com.chr.gestor_cliente_ventas.model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		// Levanta el contexto de Spring
		SpringApplication.run(Application.class, args);

	}

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}