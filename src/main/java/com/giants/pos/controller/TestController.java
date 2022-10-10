package com.giants.pos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {

    @GetMapping("/hi")
    public String sayHi() {
        return "hi";
    }

}
