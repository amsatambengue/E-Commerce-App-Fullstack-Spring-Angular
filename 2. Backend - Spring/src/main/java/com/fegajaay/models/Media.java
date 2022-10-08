package com.fegajaay.models;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "media")
public class Media {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String cheminFichier;
	private byte ordreIllustration;
	private EnumTypeMedia typeMedia;
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	private Boutique boutique;
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	private Produit produit;
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	private Utilisateur utilisateur;
	
	public Media() {};

	
	public Media(long idIllustration) {
		this.id = idIllustration;
	}
	//Getters & Setters
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCheminFichier() {
		return cheminFichier;
	}
	public void setCheminFichier(String cheminFichier) {
		this.cheminFichier = cheminFichier;
	}
	public short getOrdreIllustration() {
		return ordreIllustration;
	}
	public void setOrdreIllustration(byte ordreIllustration) {
		this.ordreIllustration = ordreIllustration;
	}
	public Boutique getBoutique() {
		return boutique;
	}
	public void setBoutique(Boutique boutique) {
		this.boutique = boutique;
	}
	public Produit getProduit() {
		return produit;
	}
	public void setProduit(Produit produit) {
		this.produit = produit;
	}
	public Utilisateur getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}
	
	
	
}
