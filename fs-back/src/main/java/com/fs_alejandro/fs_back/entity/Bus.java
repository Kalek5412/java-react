package com.fs_alejandro.fs_back.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Entity
@Table(name = "buses")
@Data

public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String numero;
    @Column(unique = true)
    private String placa;
    @Temporal(TemporalType.DATE)
    private Date createAt;
    private String caracteristica;
    @ManyToOne
    @JoinColumn(name = "marca_id")
    private Marca marca;

    @PrePersist
    public  void  prePresist(){
        createAt=new Date();
    }
}
