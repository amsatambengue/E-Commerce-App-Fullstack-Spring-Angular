package com.fegajaay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.annotation.Order;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fegajaay.config.SecurityConfig;

@Order(1)
//@Configuration
//@EnableWebSecurity
//@EnableOAuth2Sso
@SpringBootApplication
@RestController
//@EnableJpaRepositories(basePackageClasses = UtilisateurRepository.class)
public class FegajapiApplication extends SecurityConfig{
	public static void main(String[] args) {
		SpringApplication.run(FegajapiApplication.class, args);
	}
	
//	@RequestMapping("/user")
//	public Principal user(Principal principal) {
//		System.out.println("PRINCIPAL: "+principal.getName());
//		return principal;
//	}

	//SUPPRESS/ POUR TEST ONLY
//    @Bean
//	CommandLineRunner init(UtilisateurRepository utilisateurRepository) {
//	    return args -> {
//	        Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
//	        	Utilisateur utilisateur = new Utilisateur(name.toLowerCase() + "@fegajaay.com");
//	        	utilisateurRepository.save(utilisateur);
//	        });
//	        utilisateurRepository.findAll().forEach(System.out::println);
//	    };
//	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/getLoggedInUser", method = RequestMethod.GET, headers = "Accept=application/json")
	public void getLoggedInUser() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if (principal instanceof UserDetails) {
		  String username = ((UserDetails)principal).getUsername();
			System.out.println("getLoggedInUser I: "+username);

		} else {
		  String username = principal.toString();
			System.out.println("getLoggedInUser II: "+username);

		}
	}
	
}
