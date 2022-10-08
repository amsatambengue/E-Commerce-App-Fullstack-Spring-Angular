package com.fegajaay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fegajaay.dao.BoutiqueRepository;
import com.fegajaay.dao.UtilisateurRepository;
import com.fegajaay.models.Utilisateur;

@Service
public class UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepository;
    
    @Autowired
    BoutiqueRepository boutiqueRepository;
    

	public Utilisateur detailsUtilisateurByMail(String email) {
		Utilisateur utilisateur = utilisateurRepository.findByEmailIgnoreCase(email);
		utilisateur.setListeBoutiques(boutiqueRepository.findByUtilisateurEmail(email));
			
		return utilisateur;
	}


}
