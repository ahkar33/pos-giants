package com.giants.pos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.giants.pos.datamodel.Category;
import com.giants.pos.repository.CategoryRepository;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category findByName(String name) {
        return categoryRepository.findByName(name);
    }

    public Category findById(Integer id) {
        return categoryRepository.findById(id).get();
    }

    public List<Category> findAllByOrderByIdDesc() {
        return categoryRepository.findAllByOrderByIdDesc();
    }

    public void deleteById(int id) {
        categoryRepository.deleteById(id);
    }

    public void save(Category category) {
        categoryRepository.save(category);
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }
    
}
