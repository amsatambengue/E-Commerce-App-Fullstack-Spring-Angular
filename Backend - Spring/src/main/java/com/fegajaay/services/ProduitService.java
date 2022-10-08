package com.fegajaay.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fegajaay.dao.MediaRepository;
import com.fegajaay.dao.ProduitRepository;
import com.fegajaay.models.Media;
import com.fegajaay.models.Produit;

@Service
public class ProduitService {

    @Autowired
    ProduitRepository produitRepository;
    
    @Autowired
    MediaRepository mediaRepository;

	public Produit detailsProduit(long id) {
			Produit produit = produitRepository.findById(id);
			
			List<Media> illustrationsProduit = mediaRepository.findByProduitId(id);			
//			produit.setIllustrations(illustrationsProduit);
			System.out.println("Nombre d'illustrations du produit "+produit.getId()+" :"+illustrationsProduit.size());
			System.out.println("Categorie: "+produit.getCategorie().nom);
		return produit;
	}
	
	public Produit saveProduit(Produit produit) {
//		List<Media> illustrationsProduit = mediaRepository.findByProduit(produit);			
//		produit.setIllustrations(illustrationsProduit);
		
	return produitRepository.save(produit);
}

	public Produit updateProduit(Produit produit) {
		return produitRepository.save(produit);
	}


}
