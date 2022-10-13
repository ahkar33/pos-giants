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

    public Group getGroupByName(String name) {
        return groupRepository.findByName(name);
    }

    public Group getGroupById(int id) {
        return groupRepository.findById(id).orElse(null);
    }

    public void deleteGroupById(int id) {
        groupRepository.deleteById(id);
    }

    public void addGroup(Group group) {
        groupRepository.save(group);
    }

    public List<Group> getAllByDescId() {
        return groupRepository.findAllByOrderByIdDesc();
    }

}
