package com.fegajaay.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fegajaay.dao.BoutiqueRepository;
import com.fegajaay.dao.ProduitRepository;
import com.fegajaay.models.Boutique;
import com.fegajaay.models.Produit;


@RestController
@RequestMapping("/boutiques")
@CrossOrigin(origins = "*") //@CrossOrigin(origins = "http://localhost:4200")
public class BoutiqueController {
	@Autowired
	private BoutiqueRepository boutiqueRepository;
	
	@Autowired
	private ProduitRepository produitRepository;
	
	@GetMapping("")
	public  List<Boutique> listerBoutiques() {

	    return boutiqueRepository.findAll();
	}
	
	@GetMapping("/{nomBoutique}")
	public Boutique detailsBoutique(@PathVariable String nomBoutique) {

	    return boutiqueRepository.findByNom(nomBoutique);
	}
	
	
	@GetMapping("/{nomBoutique}/produits")
	public List<Produit> produitsBoutique(@PathVariable String nomBoutique) {

	    return produitRepository.findByBoutiqueNom(nomBoutique);
	}
	
	@PostMapping()
	public Boutique saveBoutique(@RequestBody Boutique boutique) {
		System.out.println("POSTING BOUTIQUE (Boutique Controller - saveBoutique)");
//		System.out.println(produit.getCouleurs().iterator().next().getNom());
	    return boutiqueRepository.save(boutique);
	}
	
}
