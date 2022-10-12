package com.giants.pos.securityconfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.giants.pos.datamodel.User;
import com.giants.pos.repository.UserRepository;

public class UserDetailsServiceImpl implements UserDetailsService {
 
    @Autowired
     UserRepository userRepository;
     
    @Override
    public UserDetails loadUserByUsername(String userEmail)
            throws UsernameNotFoundException {
        User user = userRepository.findByEmail(userEmail);
         
        if (user == null) {
            throw new UsernameNotFoundException("Could not find user");
        }
         
        return new MyUserDetails(user);
    }
 
}