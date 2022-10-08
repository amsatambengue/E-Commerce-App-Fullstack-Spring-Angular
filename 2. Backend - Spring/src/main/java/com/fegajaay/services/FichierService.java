package com.fegajaay.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.fegajaay.dao.MediaRepository;
import com.fegajaay.models.Boutique;
import com.fegajaay.models.Media;

@Service
public class FichierService {

    @Autowired
    MediaRepository mediaRepository;

	public void supprimerFromBD(Media illustration) {
		//Suppression de la base de données
		mediaRepository.delete(illustration);
	}
	
	public void supprimerFromSys(String cheminFichier) {
		//suppression du systeme de fichiers
	    Path cheminFicheierASupprimer = Paths.get(cheminFichier);
		try {
			Files.delete(cheminFicheierASupprimer);
		} catch (IOException e1) {
			e1.printStackTrace();
		}	
	}
	
	
	//Copie de fichier
	public static void copyFileUsingStream(File source, File dest) throws IOException {
	    InputStream is = null;
	    OutputStream os = null;
	    try {
	        is = new FileInputStream(source);
	        os = new FileOutputStream(dest);
	        byte[] buffer = new byte[1024];
	        int length;
	        while ((length = is.read(buffer)) > 0) {
	            os.write(buffer, 0, length);
	        }
	    } finally {
	        is.close();
	        os.close();
	    }
	}

}
