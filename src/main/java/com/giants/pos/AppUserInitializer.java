package com.giants.pos;

import java.time.LocalDateTime;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.giants.pos.datamodel.Role;
import com.giants.pos.datamodel.User;
import com.giants.pos.repository.RoleRepository;
import com.giants.pos.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;

@Component
public class AppUserInitializer {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private RoleRepository roleRepo;

    @Transactional
    @EventListener(classes = ContextRefreshedEvent.class)
    public void initializeUser() {
        if(roleRepo.count() == 0){
            var role = new Role();
            role.setName("ADMIN");
            roleRepo.save(role);
        }

        if(userRepo.count() == 0) {
            var admin = new User();
            admin.setCreatedDate(LocalDateTime.now());
            admin.setEmail("admin@gmail.com");
            admin.setEnabled(true);
            admin.setFailPasswordAttempt(0);
            admin.setName("Admin");
            admin.setPassword(passwordEncoder.encode("admin"));
            admin.setRoles(Set.of(roleRepo.findById(1).get()));
            userRepo.save(admin);
        }
        
    }
}
