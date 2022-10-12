package com.giants.pos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import com.giants.pos.datamodel.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users,Long>{
   public Users findByEmail(String email);
}
