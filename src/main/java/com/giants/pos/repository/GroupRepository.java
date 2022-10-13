package com.giants.pos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.giants.pos.datamodel.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Integer> {

    List<Group> findAllByOrderByIdDesc();

    Group findByName(String name);
    
}
