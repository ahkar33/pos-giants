package com.giants.pos.controller;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DefaultController {
    @RequestMapping("/default")
    public String defaultAfterLogin(HttpServletRequest request) {
        Collection<? extends GrantedAuthority> authorities;
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        authorities = auth.getAuthorities();
        String myRole = authorities.toArray()[0].toString();
        String admin = "ADMIN";
        if (myRole.equals(admin)) {
            return "redirect:/dashboard";
        }
        
       else if(myRole.equals("SALESPERSON")) {
            return "redirect:/salesperson/dashboard";
        }
        else return "redirect:/";
       
    }     
}