package com.giants.pos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.giants.pos.datamodel.Group;
import com.giants.pos.repository.GroupRepository;

@Service
public class GroupService {
    
    @Autowired
    private GroupRepository groupRepository;

    public Group findByName(String name) {
        return groupRepository.findByName(name);
    }

    public Group findById(Integer id) {
        return groupRepository.findById(id).orElse(null);
    }

    public void save(Group group) {
        groupRepository.save(group);
    }

    public List<Group> findAllByOrderByIdDesc() {
        return groupRepository.findAllByOrderByIdDesc();
    }

    public void deleteById(int id) {
        groupRepository.deleteById(id);
    }
}
