package com.fegajaay.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.social.connect.Connection;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.connect.GoogleConnectionFactory;
import org.springframework.social.oauth2.AccessGrant;
import org.springframework.social.oauth2.OAuth2Operations;
import org.springframework.social.oauth2.OAuth2Parameters;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.fegajaay.dao.UtilisateurRepository;
import com.fegajaay.models.RoleEnum;
import com.fegajaay.models.Utilisateur;
import com.fegajaay.utils.Utils;


@Controller
public class SocialGoogleController {

	@Autowired
	private UtilisateurRepository utilisateurRepository;
	
	private GoogleConnectionFactory factory = new GoogleConnectionFactory("260465992692-m5iggm7tak3btgsn443hh7b2q5m01bfl.apps.googleusercontent.com",
			"oz-AaUw5JjSDMXiJVZx4w6AL");

	Utilisateur utilisateurGoogle = new Utilisateur();

	
	@GetMapping(value = "/google-login")
	public String producer() {

		OAuth2Operations operations = factory.getOAuthOperations();
		OAuth2Parameters params = new OAuth2Parameters();

		params.setRedirectUri(Utils.urlServeurBackend+"/forward-login-google");
		params.setScope("profile email");

		String url = operations.buildAuthenticateUrl(params);
		System.out.println("The URL is: " + url);
		return "redirect:" + url;

	}

	@RequestMapping(value = "/forward-login-google")
	public String prodducer(@RequestParam("code") String authorizationCode) {
		
		
		OAuth2Operations operations = factory.getOAuthOperations();
		AccessGrant accessToken = operations.exchangeForAccess(authorizationCode, Utils.urlServeurBackend+"/forward-login-google",null);

		Connection<Google> connection = factory.createConnection(accessToken);
		Google google = connection.getApi();
		String[] fields = { "id", "email", "nom", "prenom" };
		
		
		
		System.out.println("EMAIL GOOGLE: "+google.userOperations().getUserInfo().getEmail().toString());
		System.out.println("PRENOM GOOGLE: "+google.userOperations().getUserInfo().getFirstName().toString());
		System.out.println("NOM GOOGLE: "+google.userOperations().getUserInfo().getLastName().toString());

		
		//GET LOGGED IN USER
//		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//		String username;
//		if (principal instanceof UserDetails) {
//		  username = ((UserDetails)principal).getUsername();
//		} else {
//		  username = principal.toString();
//
//		}
//		System.out.println("MOY LOLOU: "+username);
//		ModelAndView model = new ModelAndView("details");
//		model.addObject("user", userProfile);
//		
		utilisateurGoogle.setActif(true);
		utilisateurGoogle.setEmail(google.userOperations().getUserInfo().getEmail().toString());
		utilisateurGoogle.setPrenom(google.userOperations().getUserInfo().getFirstName().toString());
		utilisateurGoogle.setNom(google.userOperations().getUserInfo().getLastName().toString());
		utilisateurGoogle.setRole(RoleEnum.CLIENTFG);;
		
		Utilisateur utilisateurExistant = utilisateurRepository.findByEmailIgnoreCase(utilisateurGoogle.getEmail());
		
		//Si l'utilisateur existe
	    if(utilisateurExistant != null)
	      {
	    	utilisateurGoogle.setId(utilisateurExistant.getId());
	      }
	      	utilisateurRepository.save(utilisateurGoogle);
		
		return "redirect:"+Utils.urlServeurFrontEnd+"/social-login?email="+utilisateurGoogle.getEmail();
	}
	


}
