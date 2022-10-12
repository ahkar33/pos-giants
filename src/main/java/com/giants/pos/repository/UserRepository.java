package com.giants.pos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import com.giants.pos.datamodel.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
   public User findByEmail(String email);
}
