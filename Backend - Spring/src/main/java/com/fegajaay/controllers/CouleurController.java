package com.fegajaay.controllers;

import java.util.ArrayList;
import java.util.EnumSet;
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
import com.fegajaay.dao.CouleurRepository;
import com.fegajaay.dao.MediaRepository;
import com.fegajaay.dao.ProduitRepository;
import com.fegajaay.models.Categorie;
import com.fegajaay.models.Couleur;
import com.fegajaay.models.CouleurEnum;
import com.fegajaay.models.Media;
import com.fegajaay.models.Produit;
import com.fegajaay.services.ProduitService;

@RestController
@RequestMapping("/couleurs")
@CrossOrigin(origins = "*") 
//@CrossOrigin(origins = "http://localhost:4200")
public class CouleurController {

	
	@Autowired
	CouleurRepository couleurRepository;
	
	@GetMapping()
	public List<Couleur> listerCouleurs() {
	    return couleurRepository.findAll();
	}
	
	@GetMapping("/{nomCouleur}")
	public Couleur detailsCategorie(@PathVariable String nomCouleur) {
	    return couleurRepository.findByNom(nomCouleur);
	}
	
	@GetMapping("/paletteCouleurs")
	public List<Couleur> paletteCouleurs() {
		//La liste des enumerations couleur disponibles
		EnumSet<CouleurEnum> enumerationsCouleurs = EnumSet.allOf( CouleurEnum.class);
		
		//transformation des "enumérations couleurs" en "couleurs" effectives et ajout à une liste de couleurs
		List<Couleur> couleursFromEnumerationsCouleur = new ArrayList();
		for(CouleurEnum couleur : enumerationsCouleurs) {
			couleursFromEnumerationsCouleur.add(new Couleur(couleur));
		}
		
	    return 	couleursFromEnumerationsCouleur;
	}
	

	
		
}
