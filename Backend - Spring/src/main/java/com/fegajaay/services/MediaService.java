package com.fegajaay.services;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fegajaay.dao.MediaRepository;
import com.fegajaay.models.Media;
import com.fegajaay.utils.Utils;

@Service
public class MediaService {

    @Autowired
    FichierService fichierService;
    
    @Autowired
    MediaRepository mediaRepository;

	public void supprimerMedia(long idMedia, String repertoire) {
		Media media = mediaRepository.findById(idMedia);
		String cheminFichier = media.getCheminFichier();
		String fichierASupprimer = cheminFichier.substring(cheminFichier.lastIndexOf("/"), cheminFichier.length());

		//Suppression (du fichier) de la base de données
		fichierService.supprimerFromBD(new Media(idMedia));
		
		//suppression (du fichier) du drive
		fichierService.supprimerFromSys(repertoire+"/"+fichierASupprimer);
	}
	
	//ici il ne s'agit que de remplacer le logo par le fichier logo par defaut prédéfini
	public void remplacerLogo(long idMedia, String repertoire) throws IOException {
		String logoBoutiqueParDefaut = Utils.logoBoutiqueParDefaut;
		
		Media media = mediaRepository.findById(idMedia);
		String cheminFichier = media.getCheminFichier();
		String fichierASupprimer = cheminFichier.substring(cheminFichier.lastIndexOf("/")+1, cheminFichier.length());

		System.out.println("FICHIER A SUPPRIMER: ");
		System.out.println(fichierASupprimer);	
		System.out.println(repertoire);	
		
		//Suppression (du fichier) de la base de données
//		fichierService.supprimerFromBD(new Media(idMedia));
		
		
		//suppression (du fichier) du drive
		fichierService.supprimerFromSys(repertoire+"/"+fichierASupprimer);
		
		//copy fichier par defaut dans le repertoire de la boutique
		String nomNouveauFichier = logoBoutiqueParDefaut.substring(logoBoutiqueParDefaut.lastIndexOf("/")+1, logoBoutiqueParDefaut.length()); //pris en compte parceque l'extension peut changer
        System.out.println("NOM NOUVEAU FICHIER ::::::::");
        System.out.println(logoBoutiqueParDefaut.lastIndexOf("\\"));
        System.out.println(nomNouveauFichier);
		File source = new File(logoBoutiqueParDefaut);
        File dest = new File(repertoire+"/"+nomNouveauFichier);
        Files.copy(source.toPath(), dest.toPath(), StandardCopyOption.REPLACE_EXISTING);
        
        System.out.println("CHEMIN BASE DE DONNEES ANCIEN:");
        System.out.println(cheminFichier);

        
        System.out.println("CHEMIN BASE DE DONNEES NOUVEAU:");
        String nouveauCheminMedia = cheminFichier.substring(0, cheminFichier.lastIndexOf("/")+1)+"logo.png";
        System.out.println(nouveauCheminMedia);

		//consigner nouveau fichier dans la base de données
        media.setCheminFichier(nouveauCheminMedia);
        mediaRepository.save(media);
	}
}
