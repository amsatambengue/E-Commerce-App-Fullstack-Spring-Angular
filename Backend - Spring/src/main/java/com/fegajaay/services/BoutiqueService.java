package com.fegajaay.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fegajaay.dao.BoutiqueRepository;
import com.fegajaay.models.Boutique;

@Service
public class BoutiqueService {

    @Autowired
    BoutiqueRepository boutiqueRepository;

    public List<Boutique> listerProduitsBoutique(String nomBoutique) {
    	List<Boutique> boutiques = new ArrayList<>();
    	
    	
    	return boutiques;
    }
}
