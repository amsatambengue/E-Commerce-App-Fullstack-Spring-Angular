package com.fegajaay.models;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "boutique")
public class Boutique {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="boutique_id")
    private Media logo;
	private String nom;
	private String slogan;
	private String description;
	private int nbProduits;
	private int noteBoutique;
	private String telephone;
	private String whatsapp;

    @ManyToOne
//    @JoinColumn(name="proprietaire", nullable=false)
    private Utilisateur utilisateur;
	
	//Getters & Setters
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public Media getLogo() {
		return logo;
	}
	public void setLogo(Media logo) {
		this.logo = logo;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getSlogan() {
		return slogan;
	}
	public void setSlogan(String slogan) {
		this.slogan = slogan;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getNbProduits() {
		return nbProduits;
	}
	public void setNbProduits(int nbProduits) {
		this.nbProduits = nbProduits;
	}
	public int getNoteBoutique() {
		return noteBoutique;
	}
	public void setNoteBoutique(int noteBoutique) {
		this.noteBoutique = noteBoutique;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getWhatsapp() {
		return whatsapp;
	}
	public void setWhatsapp(String whatsapp) {
		this.whatsapp = whatsapp;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}


	//Generé par VP
	public void updateNbProduits() {
		throw new UnsupportedOperationException();
	}


	public void supprimer() {
		throw new UnsupportedOperationException();
	}

	public void update() {
		throw new UnsupportedOperationException();
	}
	
	
}