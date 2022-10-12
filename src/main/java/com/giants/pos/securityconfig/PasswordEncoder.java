package com.giants.pos.securityconfig;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder {
    public static void main(String[] args){
        BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
        String rawPassword="admin";
    
        String encodedPassword=encoder.encode(rawPassword);

        System.out.println(encodedPassword);
        System.out.println("admin password "+encodedPassword);

    }
}
