package com.chr.gestor_cliente_ventas.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class ConsumoAPIService {

    private final RestTemplate restTemplate;

    public ConsumoAPIService(RestTemplate restTemplate){
            this.restTemplate = restTemplate;
    }
    public List<Map<String, Object>> getUsers() {
        String url = "https://jsonplaceholder.typicode.com/users";
        List<Map<String, Object>> response = restTemplate.getForObject(url, List.class);
        return response;
    }

}
