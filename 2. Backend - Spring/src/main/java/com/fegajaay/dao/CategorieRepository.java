package com.fegajaay.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fegajaay.models.Categorie;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Long>{ 
//    
	Categorie findById(long idCategorie);
	Categorie findByNom(String nomCategorie);
}
