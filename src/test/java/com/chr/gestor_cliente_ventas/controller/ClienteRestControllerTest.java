package com.chr.gestor_cliente_ventas.controller;


import com.chr.gestor_cliente_ventas.service.ClienteService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.*;
        import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class ClienteRestControllerTest {

    private MockMvc mockMvc;
    private ClienteService clienteService;

    @BeforeEach
    void setUp() {
        clienteService = mock(ClienteService.class);
        ClienteRestController controller = new ClienteRestController(clienteService);
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    void deleteCliente_NoVentas_Returns200() throws Exception {
        when(clienteService.deleteClienteIfNoVentas(1)).thenReturn(true);

        mockMvc.perform(delete("/api/clientes/1"))
                .andExpect(status().isOk())
                .andExpect(content().string("Cliente eliminado correctamente."));
    }
}