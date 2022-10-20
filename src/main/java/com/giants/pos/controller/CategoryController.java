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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.giants.pos.datamodel.Category;
import com.giants.pos.service.CategoryService;
import com.giants.pos.service.UserService;

@Controller
@RequestMapping("admin/category")
public class CategoryController {

    DecimalFormat df = new DecimalFormat("###000");
    private static int count = 1;

    @Autowired
    private UserService userService;

    @Autowired
    private CategoryService categoryService;

    @GetMapping("create")
    public String create() {
        return "category/create";
    }

    @PostMapping("create")
    public String store(String name, ModelMap m, @RequestParam(required = false) Integer id,
            RedirectAttributes redirAttr) {
        if (name.isBlank()) {
            m.put("name", "Category name is required!");
            return "category/create";
        }

        var c = categoryService.findByName(name);
        if (c != null && id == null) {
            m.put("old", name);
            m.put("name", "Category name has already existed!");
            redirAttr.addFlashAttribute("msg", true);
            return "redirect:/admin/category/list";
        }

        if (c != null && id != null) {
            if (c.getId() != id) {
                m.put("name", "Category name has already existed!");
                m.put("category", categoryService.findById(id));
                m.put("old", name);
                return "category/create";
            }
        }

        var email = SecurityContextHolder.getContext().getAuthentication().getName();
        var user = userService.findByEmail(email);

        if (id == null) {
            var category = new Category();
            category.setName(name);
            category.setCreated_at(LocalDateTime.now());
            category.setUpdated_at(LocalDateTime.now());
            category.setUpdated_by(user.getName());
            category.setCreated_by(user.getName());
            category.setCode("cat".concat(df.format(count)));
            categoryService.save(category);
            count = count + 1;
            return "redirect:/admin/category/list";
        }

        var category = categoryService.findById(id);
        category.setName(name);
        category.setUpdated_at(LocalDateTime.now());
        category.setUpdated_by(user.getName());
        categoryService.save(category);
        return "redirect:/admin/category/list";
    }

    @GetMapping("list")
    public String index(ModelMap m) {
        m.put("categories", categoryService.findAllByOrderByIdDesc());
        return "category/index";
    }

    @GetMapping("delete/{id}")
    public String destroy(@PathVariable int id) {
        categoryService.deleteById(id);
        return "redirect:/admin/category/list";
    }

    @GetMapping("edit/{id}")
    public String edit(@PathVariable int id, ModelMap m) {
        var category = categoryService.findById(id);
        m.put("category", category);
        return "category/create";
    }

}
