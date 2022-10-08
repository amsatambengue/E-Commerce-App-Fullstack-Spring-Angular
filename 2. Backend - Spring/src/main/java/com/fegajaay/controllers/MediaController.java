package com.fegajaay.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fegajaay.dao.MediaRepository;
import com.fegajaay.models.Media;
import com.fegajaay.services.MediaService;
import com.fegajaay.services.FichierService;

@RestController
@RequestMapping("/medias")
@CrossOrigin(origins = "*")
public class MediaController {
	@Autowired
	MediaRepository mediaRepository;
	
	@Autowired
	MediaService mediaService;
	

	@GetMapping()
	public List<Media> listMedias() {
		return mediaRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Media media(@PathVariable long id) {
		return mediaRepository.getOne(id);
	}
	
	
	@PatchMapping("/{idMedia}")
	public void modifierMedia(@PathVariable long idMedia, @RequestParam String repertoire) throws IOException {
		//Supprime le fichier de la base de donnée et du système de fichier
		mediaService.remplacerLogo(idMedia, repertoire);
	}
	
	@DeleteMapping("/{idMedia}")
	public void supprimerMedia(@PathVariable long idMedia, @RequestParam String repertoire) throws IOException {
		//Supprime le fichier de la base de donnée et du système de fichier
		mediaService.supprimerMedia(idMedia, repertoire);
	}
	
	
}
