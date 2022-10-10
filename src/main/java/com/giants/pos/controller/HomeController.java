package com.giants.pos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {


    @GetMapping("/")
    public String sayHi() {
        return "/sign-in";
    }

    @GetMapping("/register")
    public String register() {
        return "/register";
    }


}
