package com.giants.pos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.giants.pos.dtomodel.UserDto;
import com.giants.pos.service.UserService; 

@Controller
public class HomeController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String signIn() {
        return "sign-in";
    }

    @GetMapping("/dashboard")
    public String goToDashboard(){
        return "dashboard";
    }
    @GetMapping("/logout")
    public String logOut() {
        return "sign-in";
    }

    @GetMapping("/register")
    public String setupRegister(ModelMap model) {
        model.addAttribute("userData", new UserDto());
        return "/register";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute("userData") UserDto userDto, ModelMap model) {
        if(!userDto.getPassword().equals(userDto.getConfirmPassword())){
            model.addAttribute("userData", userDto);
            model.addAttribute("error", "Passwords do not match!");
            return "/register";
        }
        userService.addUser(userDto);
        return "redirect:/";
    }

}
