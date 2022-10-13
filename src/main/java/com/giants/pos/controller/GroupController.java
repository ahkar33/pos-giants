package com.giants.pos.controller;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.giants.pos.datamodel.Category;
import com.giants.pos.datamodel.Group;
import com.giants.pos.repository.CategoryRepository;
import com.giants.pos.repository.GroupRepository;
import com.giants.pos.repository.UserRepository;

@Controller
@RequestMapping("admin/group")
public class GroupController {

    DecimalFormat df = new DecimalFormat("###000");
    private static int count = 1;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("create")
    public String create(ModelMap m){
        return "group/create";
    }

    @PostMapping("create")
    public String store(String name, Integer category, Integer id, ModelMap m){
        m.put("old", name);
        if(name.isBlank()){
            m.put("name", "Group Name is required!");
            return "group/create";
        }

        if(category == null){
            m.put("category", "Category is required!");
            return "group/create";
        }

        var g = groupRepository.findByName(name);
        if(g != null && g.getId() != id){
            m.put("name", "Group Name has already existed!");
            return "group/create";
        }

        var c = categoryRepository.findById(category);

        if(!c.isPresent()){
            m.put("category", "Please select valid category!");
            return "group/create";
        }

        var email = SecurityContextHolder.getContext().getAuthentication().getName();
        var user = userRepository.findByEmail(email);

        if(id == null){
            var group = new Group();
            group.setCategory(c.get());
            group.setCode("gp".concat(df.format(count)));
            group.setCreated_at(LocalDateTime.now());
            group.setCreated_by(user.getName());
            group.setName(name);
            group.setUpdated_at(LocalDateTime.now());
            group.setUpdated_by(user.getName());
            groupRepository.save(group);
            count = count + 1;
            return "redirect:/admin/group/create";
        }
        
        var group = groupRepository.findById(id).get();
        group.setCategory(c.get());
        group.setName(name);
        group.setUpdated_at(LocalDateTime.now());
        group.setUpdated_by(user.getName());
        groupRepository.save(group);
        return "redirect:/admin/group/list";
    }

    @GetMapping("list")
    public String index(ModelMap m){
        m.put("groups", groupRepository.findAllByOrderByIdDesc());
        return "group/index";
    }

    @GetMapping("delete/{id}")
    public String destroy(@PathVariable int id){
        groupRepository.deleteById(id);
        return "redirect:/admin/group/list";
    }
    
    @GetMapping("edit/{id}")
    public String edit(@PathVariable int id, ModelMap m){
        m.put("group", groupRepository.findById(id).get());
        return "group/create";
    }

    @ModelAttribute
    public void addAttributes(ModelMap m) {
        m.put("categories", categoryRepository.findAll());
    }
}
