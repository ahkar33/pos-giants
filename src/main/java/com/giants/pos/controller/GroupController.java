package com.giants.pos.controller;

import java.text.DecimalFormat;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.giants.pos.datamodel.Group;
import com.giants.pos.service.CategoryService;
import com.giants.pos.service.GroupService;
import com.giants.pos.service.UserService;

@Controller
@RequestMapping("admin/group")
public class GroupController {

    DecimalFormat df = new DecimalFormat("###000");
    private static int count = 1;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private GroupService groupService;

    @Autowired
    private UserService userService;

    @GetMapping("create")
    public String create(ModelMap m){
        return "group/create";
    }

    @PostMapping("create")
    public String store(String name, Integer category, @RequestParam(required = false) Integer id, ModelMap m){
        m.put("old", name);
        if(name.isBlank()){
            m.put("name", "Group Name is required!");
            return "group/create";
        }

        if(category == null){
            m.put("category", "Category is required!");
            return "group/create";
        }

        var g = groupService.findByName(name);
        if(g != null && id == null){
            m.put("old", name);
            m.put("name", "Group Name has already existed!");
            return "group/create";
        }

        if(g != null && id != null){
            if(g.getId() != id){
                m.put("old", name);
                m.put("name", "Group Name has already existed!");
                m.put("group", groupService.findById(id));
                return "group/create";
            }
        }

        var c = categoryService.findById(category);

        if(c == null){
            m.put("category", "Please select valid category!");
            return "group/create";
        }

        var email = SecurityContextHolder.getContext().getAuthentication().getName();
        var user = userService.findByEmail(email);

        if(id == null){
            var group = new Group();
            group.setCategory(c);
            group.setCode("gp".concat(df.format(count)));
            group.setCreated_at(LocalDateTime.now());
            group.setCreated_by(user.getName());
            group.setName(name);
            group.setUpdated_at(LocalDateTime.now());
            group.setUpdated_by(user.getName());
            groupService.save(group);
            count = count + 1;
            return "redirect:/admin/group/create";
        }
        
        var group = groupService.findById(id);
        group.setCategory(c);
        group.setName(name);
        group.setUpdated_at(LocalDateTime.now());
        group.setUpdated_by(user.getName());
        groupService.save(group);
        return "redirect:/admin/group/list";
    }

    @GetMapping("list")
    public String index(ModelMap m){
        m.put("groups", groupService.findAllByOrderByIdDesc());
        return "group/index";
    }

    @GetMapping("delete/{id}")
    public String destroy(@PathVariable int id){
        groupService.deleteById(id);
        return "redirect:/admin/group/list";
    }
    
    @GetMapping("edit/{id}")
    public String edit(@PathVariable int id, ModelMap m){
        m.put("group", groupService.findById(id));
        return "group/create";
    }

    @ModelAttribute
    public void addAttributes(ModelMap m) {
        m.put("categories", categoryService.findAll());
    }
}
