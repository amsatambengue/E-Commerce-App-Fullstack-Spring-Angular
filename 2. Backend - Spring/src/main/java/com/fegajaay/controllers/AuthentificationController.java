package com.fegajaay.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fegajaay.models.Utilisateur;

@RestController
@CrossOrigin(origins = "*")
public class AuthentificationController {
		
		@GetMapping("/connexion")
		public String connexion() {
			return "Vous êtes connectés";
		}

//		@GetMapping(produces = "application/json")
		@RequestMapping({"validerConnexion"}) 
		public Utilisateur validerConnexion() {
			return new Utilisateur(); 
		}


}

