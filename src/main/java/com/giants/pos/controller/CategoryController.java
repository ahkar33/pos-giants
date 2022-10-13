package com.giants.pos.controller;

import java.text.DecimalFormat;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public String store(String name, ModelMap m, Integer id){
        if(name.isBlank()){
            m.put("name", "Category name is required!");
            return "category/create";
        }

        var c = categoryRepository.findByName(name);
        if(c != null){
            m.put("old", name);
            m.put("name", "Category name has already existed!");
            return "category/create";
        }

        var email = SecurityContextHolder.getContext().getAuthentication().getName();
        var user = userRepository.findByEmail(email);

        if(id == null){
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

        var category = categoryRepository.findById(id).get();
        category.setName(name);
        category.setUpdated_at(LocalDateTime.now());
        category.setUpdated_by(user.getName());
        categoryRepository.save(category);
        return "redirect:/admin/category/list";
    }

    @GetMapping("list")
    public String index(ModelMap m){
        m.put("categories", categoryRepository.findAllByOrderByIdDesc());
        return "category/index";
    }

    @GetMapping("delete/{id}")
    public String destroy(@PathVariable int id){
        categoryRepository.deleteById(id);
        return "redirect:/admin/category/list";
    }

    @GetMapping("edit/{id}")
    public String edit(@PathVariable int id, ModelMap m){
        var category = categoryRepository.findById(id).get();
        m.put("category", category);
        return "category/create";
    }
    
}
