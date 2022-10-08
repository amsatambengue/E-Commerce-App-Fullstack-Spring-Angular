package com.fegajaay.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fegajaay.dao.BoutiqueRepository;
import com.fegajaay.dao.ConfirmationTokenRepository;
import com.fegajaay.dao.UtilisateurRepository;
import com.fegajaay.models.Boutique;
import com.fegajaay.models.ConfirmationToken;
import com.fegajaay.models.Utilisateur;
import com.fegajaay.services.EmailSenderService;
import com.fegajaay.services.UtilisateurService;
import com.fegajaay.utils.Utils;


@RestController
@CrossOrigin(origins = "*") //@CrossOrigin(origins = "http://localhost:4200")
public class UtilisateurController {
    
	@Autowired
	private UtilisateurRepository utilisateurRepository;
	
	@Autowired
	private BoutiqueRepository boutiqueRepository;
	
	@Autowired
	private UtilisateurService utilisateurService;

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

    @Autowired
    private EmailSenderService emailSenderService;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
	
	@GetMapping("/utilisateurs")
	public List<Utilisateur> listerUtilisateurs() {
	    return utilisateurRepository.findAll();
	}
	
    @RequestMapping(value="/utilisateurs", method = RequestMethod.POST)
    public String ajouterUtilisateur(@RequestBody Utilisateur utilisateur){
    	
	    String reponse;
	    Utilisateur mailUtilisateurExistant = utilisateurRepository.findByEmailIgnoreCase(utilisateur.getEmail());
	    
	    if(mailUtilisateurExistant  != null)
	      {
	          reponse = "This email already exists!";
	      }
	    else {
	        reponse = "Cool, this email doesn't exist in database";
//	        reponse = "Mail utilisateur a sauvegarder: "+utilisateur.getEmail();
	        
	        utilisateur.setMotDePasse(passwordEncoder.encode(utilisateur.getMotDePasse()));
	        utilisateurRepository.save(utilisateur);
	        
			ConfirmationToken confirmationToken = new ConfirmationToken(utilisateur);

			confirmationTokenRepository.save(confirmationToken);

			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(utilisateur.getEmail());
			mailMessage.setSubject("Terminez votre inscription!");
			mailMessage.setFrom("fegajaay@gmail.com");
			mailMessage.setText("Pour confirmer votre compte, veuillez cliquer ici : "
					+ Utils.urlServeurBackend+"/confirmer-compte?token=" + confirmationToken.getConfirmationToken());

			emailSenderService.sendEmail(mailMessage);

			reponse = reponse + "email sent.";
	
	    }
    	return reponse;
    }
    
	@GetMapping("/utilisateurs/{email}")
	public Utilisateur detailsUtilisateur(@PathVariable String email) {
	    return utilisateurService.detailsUtilisateurByMail(email);
	}
	
	@GetMapping("/utilisateurs/{email}/boutiques")
	public  List <Boutique> listeBoutiquesUtilisateur(@PathVariable String email) {
		System.out.println("BOUTIQUES UTILISATEURS");
		System.out.println(boutiqueRepository.findByUtilisateurEmail(email).toString());
	    return boutiqueRepository.findByUtilisateurEmail(email);
	}
    
    @RequestMapping(value="/confirmer-compte", method= {RequestMethod.GET, RequestMethod.POST})
    public String confirmUserAccount(@RequestParam("token")String confirmationToken)
    {
    	String reponse;
        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        if(token != null)
        {
            Utilisateur utilisateur= utilisateurRepository.findByEmailIgnoreCase(token.getUtilisateur().getEmail());
            utilisateur.setActif(true);
            utilisateurRepository.save(utilisateur);
            reponse = "accountVerified";
        }
        else
        {
        	reponse = "Le compte est déjà vérifié oubien le lien est invalide ou cassé!";
            
        }

        return reponse;
    }
    


//	@RequestMapping("/login")
//		public boolean login(@RequestBody Utilisateur utilisateur) {
//		    return utilisateur.getNomUtilisateur().equals("user") && utilisateur.getMotDePasse().equals("password");
//		}
//	
//	@RequestMapping("/user")
//		public Principal user(HttpServletRequest request) {
//		    String authToken = request.getHeader("Authorization")
//		      .substring("Basic".length()).trim();
//		    return () ->  new String(Base64.getDecoder()
//		      .decode(authToken)).split(":")[0];
//		}
	
    

}