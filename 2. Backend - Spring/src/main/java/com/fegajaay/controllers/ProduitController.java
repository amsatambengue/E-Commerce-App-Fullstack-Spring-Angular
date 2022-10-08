package com.fegajaay.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fegajaay.dao.CouleurRepository;
import com.fegajaay.dao.MediaRepository;
import com.fegajaay.dao.ProduitRepository;
import com.fegajaay.models.Couleur;
import com.fegajaay.models.Media;
import com.fegajaay.models.Produit;
import com.fegajaay.services.ProduitService;

@RestController
@RequestMapping("/produits")
@CrossOrigin(origins = "*") 
//@CrossOrigin(origins = "http://localhost:4200")
public class ProduitController {
	
	@Autowired
	ProduitRepository produitRepository;
	
	@Autowired
	ProduitService produitService;
	
	@Autowired
	MediaRepository mediaRepository;
	
//	@Autowired
//	InstanceCouleurRepository instanceCouleurRepository;
	
	@Autowired
	CouleurRepository couleurRepository;
	
//	@GetMapping("/produits")
//	public List<Produit> detailsProduit() {
//
//	    return produitService.listeProduits();
//	}
	
	@GetMapping()
	public List<Produit> listerProduits() {
	    return produitRepository.findAll();
	}
	
	@PostMapping()
	public Produit saveProduit(@RequestBody Produit produit) {
		System.out.println("POSTING PRODUCT (Produit Controller - saveProduit)");
//		System.out.println(produit.getCouleurs().iterator().next().getNom());
	    return produitService.saveProduit(produit);
	}
	
	@PatchMapping()
	public Produit updateProduit(@RequestBody Produit produit) {
		System.out.println("POSTING PRODUIT (Produit Controller - updateProduit)");
//		System.out.println(produit.getCouleurs().iterator().next().getNom());
	    return produitService.updateProduit(produit);
	}
	
	@GetMapping("/{id}")
	public Produit detailsProduit(@PathVariable long id) {
		Produit produit = produitService.detailsProduit(id);
		
//		//La liste des enumerations couleur disponibles
//		EnumSet<CouleurEnum> enumerationsCouleurs = EnumSet.allOf( CouleurEnum.class);
//		//La liste des couleurs du produit
//		List<Couleur> couleursProduit = produit.getCouleurs();
//		
//		//transformation des "enumérations couleurs" en "couleurs" effectives et ajout à une liste de couleurs
//		int ordreCouleur = 0;
//		List<Couleur> couleursFromEnumerationsCouleur = new ArrayList();
//		for(CouleurEnum couleur : enumerationsCouleurs) {
//			couleursFromEnumerationsCouleur.add(new Couleur(couleur));
//		}
//		System.out.println("COULEURS couleursFromEnumerationsCouleur ");
//		System.out.println(couleursFromEnumerationsCouleur.toString());
//		
////		Merging des deux liste de couleurs
////		couleursFromEnumerationsCouleur.removeAll(couleursProduit);
//		couleursProduit.addAll(couleursFromEnumerationsCouleur);    //Merge both lists
//		
//		for(Couleur couleur : couleursProduit) {
//			System.out.println("COULEURS PRODUIT ");
//			System.out.println(couleur);
//		}
//		
////		Collections.sort(couleurs, couleurs);
//		for (Couleur couleur : couleurs) {
//			System.out.println(couleur.getNom());
//			if (couleur.getNom()==CouleurEnum.BLANC) {
//				couleur.setOrdre((byte) 3);
//			}
//
//		} 
				
	    return produit;
	}
	
	@GetMapping("/{id}/medias")
	public List<Media> mediasProduit(@PathVariable long id) {
	    return mediaRepository.findByProduitId(id);
	}
	
	@GetMapping("/{id}/couleurs") //instancesCouleur
	public List<Couleur> instancesCouleurProduit(@PathVariable long id) {
	    return couleurRepository.findByProduitId(id);
	}
	
//	@GetMapping("/test")
//	public List<Media> test() {
//
//	    return mediaRepository.findByProduitId(6);
//		
//	}
//	
//	@GetMapping("/testt")
//	public String testt() {
//	    return "Yes siiiir";
//	}


	
}
