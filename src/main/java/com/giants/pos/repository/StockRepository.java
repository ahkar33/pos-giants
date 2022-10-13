package com.giants.pos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.giants.pos.datamodel.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer> {
    
}
