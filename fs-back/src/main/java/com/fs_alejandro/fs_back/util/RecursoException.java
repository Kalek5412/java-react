package com.fs_alejandro.fs_back.util;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RecursoException extends RuntimeException{
    public RecursoException(String mensaje){
        super(mensaje);
    }
}