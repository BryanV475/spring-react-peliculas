package com.backend_spring.backend_spring.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="actorpeliculas")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ActorPelicula {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long act_id;
    private Long pel_id;
    private String papel;
}