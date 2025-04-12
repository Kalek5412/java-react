package com.fs_alejandro.fs_back.service;

import com.fs_alejandro.fs_back.entity.Bus;
import com.fs_alejandro.fs_back.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;
@Service
public class BusServiceImpl {

    @Autowired
    private BusRepository busRepository;

    public List<Bus> listar(){
        return busRepository.findAll();
    }

    public Page<Bus> listarBuses(Pageable pageable){
        return busRepository.findAll(pageable);
    }



    public Optional<Bus> buscarPorId(Long id) {
        return busRepository.findById(id);
    }


    public Bus save(Bus bus) {
        return busRepository.save(bus);
    }

    public boolean existeId(Long id) {
        return busRepository.existsById(id);
    }


}
