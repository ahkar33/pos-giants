package com.giants.pos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/stock")
public class StockController {

    @GetMapping("create")
    public String create(){
        return "stock/create";
    }
    
}
