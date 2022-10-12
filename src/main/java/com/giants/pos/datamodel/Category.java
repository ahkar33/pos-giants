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
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false, length = 20)
    private String code;
    @Column(nullable = false, length = 50)
    private String name;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime created_at;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime updated_at;
    @ManyToOne
    private User created_by;
    @ManyToOne
    private User updated_by;
}
