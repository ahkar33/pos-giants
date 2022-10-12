package com.giants.pos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.giants.pos.datamodel.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    
}
