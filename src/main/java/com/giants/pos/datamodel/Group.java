package com.giants.pos.datamodel;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="group_table")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false, length = 20)
    private String code;
    @Column(nullable = false, length = 50)
    private String name;
    @ManyToOne
    private Category category;
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm a")
    private LocalDateTime created_at;
    @Column(nullable = false, length = 50)
    private String created_by;
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm a")
    private LocalDateTime updated_at;
    @Column(nullable = false, length = 50)
    private String updated_by;

    @OneToMany(mappedBy = "group", orphanRemoval = true)
    private List<Stock> stocks;

    
}
