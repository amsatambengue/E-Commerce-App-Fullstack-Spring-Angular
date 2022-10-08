package com.fegajaay.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fegajaay.models.Boutique;

@Repository
public interface BoutiqueRepository extends JpaRepository<Boutique, Long> {
    Boutique findByNom(String nom);
    List <Boutique> findByUtilisateurEmail(String email);
}
