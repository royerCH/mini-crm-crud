package com.chr.gestor_cliente_ventas.controller;

import com.chr.gestor_cliente_ventas.model.Cliente;
import com.chr.gestor_cliente_ventas.model.Venta;
import com.chr.gestor_cliente_ventas.repository.ClienteMapper;
import com.chr.gestor_cliente_ventas.repository.VentaMapper;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.util.List;

@RestController
public class ReporteController {

    private final ClienteMapper clienteMapper;
    private final VentaMapper ventaMapper;

    public ReporteController(ClienteMapper clienteMapper, VentaMapper ventaMapper) {
        this.clienteMapper = clienteMapper;
        this.ventaMapper = ventaMapper;
    }

    @GetMapping("/report/pdf")
    public ResponseEntity<InputStreamResource> generatePdf() throws IOException, DocumentException {
        String filePath = "reports/ReporteGeneral.pdf";

        // Crear carpeta si no existe
        File dir = new File("reports");
        if (!dir.exists()) dir.mkdirs();

        // Obtiene los datos reales de la base de datos
        int totalClientes = clienteMapper.countClientes();
        int totalVentas = ventaMapper.countVentas();
        List<Cliente> clientes = clienteMapper.getAllClientes();
        List<Venta> ventas = ventaMapper.getAllVentas();

        // Crear documento PDF
        Document document = new Document();
        PdfWriter.getInstance(document, new FileOutputStream(filePath));
        document.open();
        document.add(new Paragraph("Resumen mensual de clientes y ventas"));
        document.add(new Paragraph("Total de Clientes: " + totalClientes));
        document.add(new Paragraph("Total de Ventas: " + totalVentas));
        document.add(new Paragraph(" "));

        document.add(new Paragraph("Clientes:"));
        for (Cliente c : clientes) {
            document.add(new Paragraph("- " + c.getNombre() + " | " + c.getCorreo() + " | " + c.getTelefono()));
        }

        document.add(new Paragraph(" "));
        document.add(new Paragraph("Ventas:"));
        for (Venta v : ventas) {
            // Obtener nombre del cliente correspondiente
            Cliente cliente = clienteMapper.getClienteById(v.getClienteId());
            document.add(new Paragraph("- ID Venta: " + v.getId() + " | Monto: " + v.getMonto() + " | Cliente: " + cliente.getNombre() + " | Fecha: " + v.getFecha()));
        }

        document.close();

        // Preparar archivo para descargar
        File pdfFile = new File(filePath);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(pdfFile));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=ReporteGeneral.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .contentLength(pdfFile.length())
                .body(resource);
    }
}