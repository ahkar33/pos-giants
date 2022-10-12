package com.giants.pos.dtomodel;

import java.util.HashSet;
import java.util.Set;

import com.giants.pos.datamodel.Role;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
    private Long id;    
    private String email;
    private String name;
    private String password;
    private String confirmPassword;
    private Set<Role> roles = new HashSet<>(); 
}
