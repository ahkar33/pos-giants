package com.giants.pos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

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
    public String goToDashboard() {
        return "dashboard";
    }

    @GetMapping("/logout")
    public String logOut() {
        return "sign-in";
    }

    @GetMapping("/register")
    public ModelAndView setupRegister(ModelMap model) {
        return new ModelAndView("register","userData",new UserDto());
    }

    @PostMapping("/lodge")
    public ModelAndView register(@ModelAttribute("userData")@Validated UserDto userDto, ModelMap model,BindingResult bs) {
         if(bs.hasErrors()){
            return new ModelAndView("register","userData",userDto);
        
         }
        if (!userDto.getPassword().equals(userDto.getConfirmPassword())) {
            
            model.addAttribute("error", "Passwords do not match!");
            return new ModelAndView("register","userData",userDto);
        }
        if (userService.isEmailExist(userDto.getEmail())) {
            model.addAttribute("error", "Email already exists");
            return new ModelAndView("register","userData",userDto);
        }
        userService.addUser(userDto);
        model.addAttribute("success","Registered Succcessfully!!");
      return new ModelAndView("register","userData", new UserDto());
    }

}
