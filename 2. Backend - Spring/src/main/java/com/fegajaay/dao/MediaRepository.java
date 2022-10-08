package com.fegajaay.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fegajaay.models.Media;
import com.fegajaay.models.Produit;

@Repository
public interface MediaRepository extends JpaRepository<Media, Long>{ 
	Media findById(long idMedia);
	List<Media> findByProduitId(long idProduit);
	List<Media> findByProduit(Produit produit);
//	List<Media> findByProduit(Produit produit);
//	List<Media> findAllByProduitId(long idProduit);

	
	
//  @Query("SELECT t.title FROM Todo t where t.id = :id") 
    @Query("SELECT m.cheminFichier FROM Media m where m.produit.id = :id") 
    List<String> findIllustrations(@Param("id") Long id);
	
//	@Query("SELECT cheminFichier FROM Media ")
//	List<Media> illustrationsProduit();

//	public static final String FIND_MEDIAS = "SELECT chemin_fichier FROM Media WHERE Produit = 6";
//
//	@Query(value = FIND_MEDIAS, nativeQuery = true)
//	public List<Media> finMedia();
}
