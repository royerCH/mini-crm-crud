package com.chr.gestor_cliente_ventas.controller;

import com.chr.gestor_cliente_ventas.model.Cliente;
import com.chr.gestor_cliente_ventas.model.Venta;
import com.chr.gestor_cliente_ventas.repository.ClienteMapper;
import com.chr.gestor_cliente_ventas.repository.VentaMapper;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.util.List;

@RestController
public class ReporteExcelController {

    private final ClienteMapper clienteMapper;
    private final VentaMapper ventaMapper;

    public ReporteExcelController(ClienteMapper clienteMapper, VentaMapper ventaMapper) {
        this.clienteMapper = clienteMapper;
        this.ventaMapper = ventaMapper;
    }

    @GetMapping("/report/excel")
    public ResponseEntity<InputStreamResource> generateExcel() throws IOException {
        String filePath = "reports/ReporteGeneral.xlsx";

        // Crear carpeta si no existe
        File dir = new File("reports");
        if (!dir.exists()) dir.mkdirs();

        List<Cliente> clientes = clienteMapper.getAllClientes();
        List<Venta> ventas = ventaMapper.getAllVentas();

        // Crear workbook
        Workbook workbook = new XSSFWorkbook();

        // Hoja de clientes
        Sheet sheetClientes = workbook.createSheet("Clientes");
        int rowNum = 0;
        Row headerRow = sheetClientes.createRow(rowNum++);
        headerRow.createCell(0).setCellValue("Nombre");
        headerRow.createCell(1).setCellValue("Correo");
        headerRow.createCell(2).setCellValue("Teléfono");
        headerRow.createCell(3).setCellValue("Celda de prueba");

        for (Cliente c : clientes) {
            Row row = sheetClientes.createRow(rowNum++);
            row.createCell(0).setCellValue(c.getNombre());
            row.createCell(1).setCellValue(c.getCorreo());
            row.createCell(2).setCellValue(c.getTelefono());
        }

        // Hoja de ventas
        Sheet sheetVentas = workbook.createSheet("Ventas");
        rowNum = 0;
        Row headerVentas = sheetVentas.createRow(rowNum++);
        headerVentas.createCell(0).setCellValue("ID Venta");
        headerVentas.createCell(1).setCellValue("Monto");
        headerVentas.createCell(2).setCellValue("Cliente");
        headerVentas.createCell(3).setCellValue("Fecha");
        headerVentas.createCell(4).setCellValue("Celda de prueba ");

        for (Venta v : ventas) {
            Cliente cliente = clienteMapper.getClienteById(v.getClienteId());
            Row row = sheetVentas.createRow(rowNum++);
            row.createCell(0).setCellValue(v.getId());
            row.createCell(1).setCellValue(v.getMonto());
            row.createCell(2).setCellValue(cliente.getNombre());
            row.createCell(3).setCellValue(v.getFecha().toString());
        }

        // Guardar archivo
        FileOutputStream fos = new FileOutputStream(filePath);
        workbook.write(fos);
        workbook.close();
        fos.close();

        InputStreamResource resource = new InputStreamResource(new FileInputStream(new File(filePath)));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=ReporteGeneral.xlsx")
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .contentLength(new File(filePath).length())
                .body(resource);
    }
}