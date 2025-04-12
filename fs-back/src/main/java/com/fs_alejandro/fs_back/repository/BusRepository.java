package com.fs_alejandro.fs_back.repository;

import com.fs_alejandro.fs_back.entity.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long> {
}
