package com.giants.pos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giants.pos.datamodel.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    
}
