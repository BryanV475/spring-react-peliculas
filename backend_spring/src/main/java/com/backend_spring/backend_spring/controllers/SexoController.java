package com.backend_spring.backend_spring.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.backend_spring.backend_spring.models.Sexo;
import com.backend_spring.backend_spring.services.Sexo.SexoService;

@RestController
public class SexoController {
    @Autowired
    private SexoService sexoService;

    // Guardar
    @PostMapping("/sexos")
    public Sexo saveSexo(@Valid @RequestBody Sexo sexo) {
        return sexoService.saveSexo(sexo);
    }

    // Leer
    @GetMapping("/sexos")
    public List<Sexo> fetchSexoList() {
        return sexoService.fetchSexoList();
    }

    // Actualizar
    @PutMapping("/sexos/{id}")
    public Sexo updateSexo(@RequestBody Sexo sexo, @PathVariable("id") Long sexoId) {
        return sexoService.updateSexo(sexo, sexoId);
    }

    // Eliminar
    @DeleteMapping("/sexos/{id}")
    public String deleteSexoById(@PathVariable("id") Long sexoId) {
        sexoService.deleteSexoById(sexoId);
        return "Eliminado Exitosamente";
    }
}
