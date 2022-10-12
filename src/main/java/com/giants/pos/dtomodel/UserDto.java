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

    // @NotEmpty(message = "Email cannot be empty")
    private String email;

    // @NotEmpty(message = "Name cannot be empty")
    // @Size(min=5, max=250, message = "Minimum 5 characters and Maximum 250 characters")
    private String name;

    // @NotEmpty(message = "Password cannot be empty")
    // @Min(value = 8, message = "Your password must be at least 8 characters")
    private String password;

    // @NotEmpty(message = "Confirm Password cannot be empty")
    // @Min(value = 8, message = "Your password must be at least 8 characters")
    private String confirmPassword;

    private Set<Role> roles = new HashSet<>(); 

}
