package com.fegajaay.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.User;
import org.springframework.social.facebook.connect.FacebookConnectionFactory;
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
public class SocialFacebookController {

	@Autowired
	private UtilisateurRepository utilisateurRepository;
	
	private FacebookConnectionFactory factory = new FacebookConnectionFactory("1217978751890185","b64e5a5bbe884e6eac9f78a052d6af16");

	
	@GetMapping(value = "/facebook-login")
	public String producer() {

		OAuth2Operations operations = factory.getOAuthOperations();
		OAuth2Parameters params = new OAuth2Parameters();

		params.setRedirectUri(Utils.urlServeurBackend+"/forward-login-facebook");
		params.setScope("email,public_profile");

		String url = operations.buildAuthenticateUrl(params);
		System.out.println("The URL is: " + url);
		return "redirect:" + url;

	}

	@GetMapping(value = "/forward-login-facebook")
	public String prodducer(@RequestParam("code") String authorizationCode) {
		OAuth2Operations operations = factory.getOAuthOperations();
		AccessGrant accessToken = operations.exchangeForAccess(authorizationCode, Utils.urlServeurBackend+"/forward-login-facebook",null);

		Connection<Facebook> connection = factory.createConnection(accessToken);
		Facebook facebook = connection.getApi();
		String[] fields = { "id", "email", "first_name", "last_name" };
		User userProfile = facebook.fetchObject("me", User.class, fields);
		
		Utilisateur utilisateurFacebook= new Utilisateur();

		utilisateurFacebook.setActif(true);
		utilisateurFacebook.setEmail(userProfile.getEmail());
		utilisateurFacebook.setPrenom(userProfile.getFirstName());
		utilisateurFacebook.setNom(userProfile.getLastName());
		utilisateurFacebook.setRole(RoleEnum.CLIENTFG);
		
		
		System.out.println("EMAIL FACEBOOK: "+utilisateurFacebook.getEmail());
		System.out.println("PRENNOM FACEBOOK: "+utilisateurFacebook.getPrenom());
		System.out.println("NOM FACEBOOK: "+utilisateurFacebook.getNom());
		
		
		
		Utilisateur utilisateurExistant = utilisateurRepository.findByEmailIgnoreCase(utilisateurFacebook.getEmail());
		
		//Si l'utilisateur existe
	    if(utilisateurExistant != null)
	      {
	    	utilisateurFacebook.setId(utilisateurExistant.getId());
	      }
	      	utilisateurRepository.save(utilisateurFacebook);

		return "redirect:"+Utils.urlServeurFrontEnd+"/social-login?email="+utilisateurFacebook.getEmail();

	}

}
