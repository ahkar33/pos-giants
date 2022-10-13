package com.giants.pos.datamodel;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Stock {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false, length = 20)
    private String code;
    @Column(nullable = false, length = 50)
    private String name;
    @Column(length = 255)
    private String description;
    @Column(nullable = false)
    private int price;
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm a")
    private LocalDateTime created_at;
    @Column(nullable = false, length = 50)
    private String created_by;
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm a")
    private LocalDateTime updated_at;
    @Column(nullable = false, length = 50)
    private String updated_by;

    @ManyToOne
    private Group group;
}
