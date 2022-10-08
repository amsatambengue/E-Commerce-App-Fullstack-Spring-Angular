package com.fegajaay.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fegajaay.models.Utilisateur;

import java.util.Optional;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long>{ // , CrudRepository<Utilisateur, Integer> 
    Optional<Utilisateur> findByEmail(String email);
//  Optional<Utilisateur> findByNomUtilisateur(String nomUtilisateur);
//	Optional<Utilisateur> findByEmail(String email); // utilisé par Details Utilisateurs Service
//    Utilisateur findByEmailIdIgnoreCase(String emailId);
    Utilisateur findByEmailIgnoreCase(String email); 
}
