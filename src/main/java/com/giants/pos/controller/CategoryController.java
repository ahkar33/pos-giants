package com.giants.pos.controller;

import java.text.DecimalFormat;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.giants.pos.datamodel.Category;
import com.giants.pos.repository.CategoryRepository;
import com.giants.pos.repository.UserRepository;

@Controller
@RequestMapping("admin/category")
public class CategoryController {

    DecimalFormat df = new DecimalFormat("###000");
    private static int count = 1;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("create")
    public String create(){
        return "category/create";
    }

    @PostMapping("create")
    public String store(String name, ModelMap m){
        if(name.isBlank()){
            m.put("name", "Category name is required!");
            return "category/create";
        }
        var email = SecurityContextHolder.getContext().getAuthentication().getName();
        var user = userRepository.findByEmail(email);
        var category = new Category();
        category.setName(name);
        category.setCreated_at(LocalDateTime.now());
        category.setUpdated_at(LocalDateTime.now());
        category.setUpdated_by(user.getName());
        category.setCreated_by(user.getName());
        category.setCode("cat".concat(df.format(count)));
        categoryRepository.save(category);
        count = count+1;
        return "redirect:/admin/category/create";
    }

    @GetMapping("list")
    public String index(ModelMap m){
        m.put("categories", categoryRepository.findAllByOrderByIdDesc());
        return "category/index";
    }
    
}
