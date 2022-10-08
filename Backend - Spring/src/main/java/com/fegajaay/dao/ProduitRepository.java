package com.fegajaay.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fegajaay.models.Media;
import com.fegajaay.models.Produit;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long>{ // , CrudRepository<Utilisateur, Integer> 
//    Optional<Utilisateur> findByEmail(String email);
	Produit findById(long id);
	List<Produit> findByBoutiqueNom(String nomBoutique);
//	findByBoutiqueName();
	
	@Query("SELECT cheminFichier FROM Media WHERE produit = :idProduit")
	List<Media> illustrationsProduit(long idProduit);
	   
	@Query("SELECT cheminFichier FROM Media WHERE produit = 6")
	List<Media> testIllustrationsProduit();
	   
	
}
