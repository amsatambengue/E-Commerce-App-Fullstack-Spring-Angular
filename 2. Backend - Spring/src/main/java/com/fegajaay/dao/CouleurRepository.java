package com.fegajaay.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fegajaay.models.Couleur;

@Repository
public interface CouleurRepository extends JpaRepository<Couleur, Long>{ 
//    
	Couleur findById(long idCouleur);
	Couleur findByNom(String nomCouleur);
//	@Query("SELECT * FROM Release_date_type a LEFT JOIN cache_media b on a.id=b.id")
	List<Couleur> findByProduitId(long idProduit);

}
