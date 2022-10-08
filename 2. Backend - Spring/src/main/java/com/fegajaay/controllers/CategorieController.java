package com.fegajaay.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fegajaay.dao.CategorieRepository;
import com.fegajaay.dao.MediaRepository;
import com.fegajaay.dao.ProduitRepository;
import com.fegajaay.models.Categorie;
import com.fegajaay.models.Media;
import com.fegajaay.models.Produit;
import com.fegajaay.services.ProduitService;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "*") 
//@CrossOrigin(origins = "http://localhost:4200")
public class CategorieController {

	
	@Autowired
	CategorieRepository categorieRepository;
	
	@GetMapping()
	public List<Categorie> listerCategories() {
	    return categorieRepository.findAll();
	}
	
	@GetMapping("/{nomCategorie}")
	public Categorie detailsCategorie(@PathVariable String nomCategorie) {
	    return categorieRepository.findByNom(nomCategorie);
	}
	
	

	
		
}
