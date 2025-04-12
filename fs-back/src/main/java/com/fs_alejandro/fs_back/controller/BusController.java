package com.fs_alejandro.fs_back.controller;

import com.fs_alejandro.fs_back.entity.Bus;
import com.fs_alejandro.fs_back.service.BusServiceImpl;
import com.fs_alejandro.fs_back.util.RecursoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/buses")
@CrossOrigin(origins = "*")
public class BusController {

    @Autowired
    private BusServiceImpl busService;

    @GetMapping("/")
    public List<Bus> listar(){
        return busService.listar();
    }

    @GetMapping("/page/{page}")
    public Page<Bus> index(@PathVariable Integer page){
        return busService.listarBuses(PageRequest.of(page,3));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> listarBusId(@PathVariable Long id){
        if(!busService.existeId(id)){
            throw  new RecursoException("no se encontro el bus ");
        }
        Optional<Bus> bus= busService.buscarPorId(id);
        return new ResponseEntity(bus, HttpStatus.OK);
    }
}
