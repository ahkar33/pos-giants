package com.giants.pos.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.giants.pos.datamodel.User;
import com.giants.pos.dtomodel.UserDto;
import com.giants.pos.repository.RoleRepository;
import com.giants.pos.repository.UserRepository;

@Service
public class UserService {
   
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public void addUser(UserDto userDto) {
        User user = new User();
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setCreatedDate(LocalDateTime.now());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.getRoles().add(roleRepository.findByName("SALEPERSON"));
        user.setEnabled(true);
        user.setFailPasswordAttempt(0);
        userRepository.save(user);
    }

    public boolean isEmailExist(String email) {
        return userRepository.existsByEmail(email);
    }

}
