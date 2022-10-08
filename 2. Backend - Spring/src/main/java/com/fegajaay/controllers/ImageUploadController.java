package com.fegajaay.controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fegajaay.dao.MediaRepository;
import com.fegajaay.dao.ProduitRepository;
import com.fegajaay.models.Media;
import com.fegajaay.models.Produit;
import com.fegajaay.services.FichierService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "image")
@Configuration
@PropertySource("classpath:custom.properties")
public class ImageUploadController {
	
	@Autowired
	FichierService fichierService;
	
	@Autowired
	MediaRepository mediaRepository;
	
	@Autowired
	ProduitRepository produitRepository;
    
    @GetMapping("/")
    public String index() {
        return "upload";
    }

    /*
     * FICHIERS ILLUSTRATIONS PRODUIT
     */
    @PostMapping("/illustration/ajouter")
	public String ajouterIllustration(@RequestParam("imageFile") MultipartFile file, @RequestParam("repertoireDeSauvegarde") String repertoireDeSauvegarde , @RequestParam("nomFichier") String nomFichier, @RequestParam("extension") String extension, @RequestParam("idProduit") String idProduit, RedirectAttributes redirectAttributes) {
		System.out.println("AJOUTER");
//		System.out.println(illustration.getCheminFichier());
		
		System.out.println("NOM FICHIER: "+nomFichier);

		
		//Nom sans extension de l'ancien fichier
//		nomFichier = nomFichier.substring(0,nomFichier.indexOf("."));
		
		//Repertoire de sauvegarde du fihier uploadé
	    String DOSSIER_DE_SAUVEGARDE = repertoireDeSauvegarde+"/";
	    

//	    Path fileToDeletePath = Paths.get(DOSSIER_DE_SAUVEGARDE+fichierASupprimer);
//		try {
//			Files.delete(fileToDeletePath);
//		} catch (IOException e1) {
//			// TODO Auto-generated catch block
//			e1.printStackTrace();
//		}
	    


//		Creer le repertoire de sauvegarde s'il n'existe pas
	    File repertoire = new File(repertoireDeSauvegarde);
	    if (! repertoire.exists()){
	        repertoire.mkdir();
	        // Pour créer le chemin entier en incluant les parents,
	        // Utiliser repertoire.mkdirs(); à la place
	    }
	    
		if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Veuillez selectionner le fichier à uploader");
            return "redirect:uploadStatus";
        }

        try {
            // Récupérer le fichier et le sauvegarder dans le repertoire choisi
            byte[] bytes = file.getBytes();
            Path path = Paths.get(DOSSIER_DE_SAUVEGARDE + nomFichier + extension);
            Files.write(path, bytes);
            
            //Consigner le nouveau fichier dans la base de données
            Media media = new Media();
            	//	Cette premiere approche ecrase tout le chemin
//            media.setCheminFichier(path.toString());
            	// Cette seconde approche utilise le chemin préexistant récupéré et ne change que le nom du fichier et son extensiop
            media.setCheminFichier(DOSSIER_DE_SAUVEGARDE+nomFichier + extension);
//            media.setId(Long.parseLong(idProduit));
            media.setProduit(produitRepository.findById(Long.parseLong(idProduit)));
            mediaRepository.save(media);
            
            
            redirectAttributes.addFlashAttribute("message", "Fichier uploadé avec succes :'" + file.getOriginalFilename() + "'");
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "redirect:/uploadStatus";
    }


	@PostMapping("/illustration/modifier")
	public String modifierIllustration(@RequestParam("imageFile") MultipartFile file, @RequestParam("repertoireDeSauvegarde") String repertoireDeSauvegarde, @RequestParam("nomFichier") String nomFichier, @RequestParam("extension") String extension, @RequestParam("idIllustration") String idIllustration, RedirectAttributes redirectAttributes) {
		System.out.println("MODIFICATION ILLUSTRATION ");
//		System.out.println(illustration.getCheminFichier());
		
	    //Nom complet avec extension de l'ancien fichier
		String fichierASupprimer = nomFichier;
		
		//Nom sans extension de l'ancien fichier
		nomFichier = nomFichier.substring(0,nomFichier.indexOf("."));
		
		//Repertoire de sauvegarde du fihier uploadé
	    String DOSSIER_DE_SAUVEGARDE = repertoireDeSauvegarde+"/";
	    
		//Suppression de l'ancien fichier
		fichierService.supprimerFromSys(DOSSIER_DE_SAUVEGARDE+fichierASupprimer);
//	    Path fileToDeletePath = Paths.get(DOSSIER_DE_SAUVEGARDE+fichierASupprimer);
//		try {
//			Files.delete(fileToDeletePath);
//		} catch (IOException e1) {
//			// TODO Auto-generated catch block
//			e1.printStackTrace();
//		}
	    


//		Creer le repertoire de sauvegarde s'il n'existe pas
	    File repertoire = new File(repertoireDeSauvegarde);
	    if (! repertoire.exists()){
	        repertoire.mkdir();
	        // Pour créer le chemin entier en incluant les parents,
	        // Utiliser repertoire.mkdirs(); à la place
	    }
	    
		if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Veuillez selectionner le fichier à uploader");
            return "redirect:uploadStatus";
        }

        try {
            // Récupérer le fichier et le sauvegarder dans le repertoire choisi
            byte[] bytes = file.getBytes();
            Path path = Paths.get(DOSSIER_DE_SAUVEGARDE + nomFichier + extension);
            Files.write(path, bytes);
            
            //Consigner le nouveau fichier dans la base de données
            Long idMedia = Long.parseLong(idIllustration);
            Media media = mediaRepository.findById(idMedia).get();
            	//	Cette premiere approche ecrase tout le chemin
//            media.setCheminFichier(path.toString());
            	// Cette seconde approche utilise le chemin préexistant récupéré et ne chang que le nom du fichier et son extensiop
            media.setCheminFichier(media.getCheminFichier().substring(0, media.getCheminFichier().lastIndexOf("/"))+"/"+nomFichier + extension);
            mediaRepository.save(media);
            
            
            redirectAttributes.addFlashAttribute("message", "Fichier uploadé avec succes :'" + file.getOriginalFilename() + "'");
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "redirect:/uploadStatus";
    }
	
    /*
     * FICHIERS LOGO BOUTIQUES
     */
	@PostMapping("/logo/modifier")
//	`${this.postString}/logo/${this.typeUpload}?repertoireDeSauvegarde=${this.repertoireDeSauvegarde}&nomFichier=${this.nouveauNomFichier}&extension=${this.extensionFichier}&idLogo=${this.boutique.logo.id}`;
	public String modifierLogo(@RequestParam("imageFile") MultipartFile file, @RequestParam("repertoireDeSauvegarde") String repertoireDeSauvegarde, @RequestParam("nomFichier") String nomFichier, @RequestParam("extension") String extension, @RequestParam("idLogo") String idLogo, RedirectAttributes redirectAttributes) {
		System.out.println("LOGO BOUTIQUE ");
//		System.out.println(illustration.getCheminFichier());
		
	    //Nom complet avec extension de l'ancien fichier
		String fichierASupprimer = nomFichier;
		
		//Nom sans extension de l'ancien fichier
		nomFichier = nomFichier.substring(0,nomFichier.indexOf("."));
		
		//Repertoire de sauvegarde du fihier uploadé
	    String DOSSIER_DE_SAUVEGARDE = repertoireDeSauvegarde+"/";
	    System.out.println("Dossier de Sauvegarde: ");
	    System.out.println(DOSSIER_DE_SAUVEGARDE);
	    
		//Suppression de l'ancien fichier
		fichierService.supprimerFromSys(DOSSIER_DE_SAUVEGARDE+fichierASupprimer);
//	    Path fileToDeletePath = Paths.get(DOSSIER_DE_SAUVEGARDE+fichierASupprimer);
//		try {
//			Files.delete(fileToDeletePath);
//		} catch (IOException e1) {
//			// TODO Auto-generated catch block
//			e1.printStackTrace();
//		}
	    


//		Creer le repertoire de sauvegarde s'il n'existe pas
	    File repertoire = new File(repertoireDeSauvegarde);
	    if (! repertoire.exists()){
	        repertoire.mkdir();
	        // Pour créer le chemin entier en incluant les parents,
	        // Utiliser repertoire.mkdirs(); à la place
	    }
	    
		if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Veuillez selectionner le fichier à uploader");
            return "redirect:uploadStatus";
        }

        try {
            // Récupérer le fichier et le sauvegarder dans le repertoire choisi
            byte[] bytes = file.getBytes();
            Path path = Paths.get(DOSSIER_DE_SAUVEGARDE + nomFichier + extension);
            Files.write(path, bytes);
            
            //Consigner le nouveau fichier dans la base de données
            Long idMedia = Long.parseLong(idLogo);
            Media media = mediaRepository.findById(idMedia).get();
            	//	Cette premiere approche ecrase tout le chemin
//            media.setCheminFichier(path.toString());
            	// Cette seconde approche utilise le chemin préexistant récupéré et ne chang que le nom du fichier et son extensiop
            media.setCheminFichier(media.getCheminFichier().substring(0, media.getCheminFichier().lastIndexOf("/"))+"/"+nomFichier + extension);
            mediaRepository.save(media);
            
            
            redirectAttributes.addFlashAttribute("message", "Fichier uploadé avec succes :'" + file.getOriginalFilename() + "'");
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "redirect:/uploadStatus";
    }
	
	
	
	
    @GetMapping("/uploadStatus")
    public String uploadStatus() {
        return "uploadStatus";
    }

}


	


