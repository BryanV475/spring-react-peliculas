package com.backend_spring.backend_spring.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.backend_spring.backend_spring.models.Genero;
import com.backend_spring.backend_spring.services.Genero.GeneroService;

@RestController
public class GeneroController {
    @Autowired
    private GeneroService generoService;

    // Guardar
    @PostMapping("/generos")
    public Genero saveGenero(@Valid @RequestBody Genero genero) {
        return generoService.saveGenero(genero);
    }

    // Leer
    @GetMapping("/generos")
    public List<Genero> fetchGeneroList() {
        return generoService.fetchGeneroList();
    }

    // Actualizar
    @PutMapping("/generos/{id}")
    public Genero updateGenero(@RequestBody Genero genero, @PathVariable("id") Long generoId) {
        return generoService.updateGenero(genero, generoId);
    }

    // Eliminar
    @DeleteMapping("/generos/{id}")
    public String deleteGeneroById(@PathVariable("id") Long generoId) {
        generoService.deleteGeneroById(generoId);
        return "Eliminado Exitosamente";
    }
}
