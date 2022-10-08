package com.fegajaay.models;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table()
public class Couleur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;   
    @Enumerated(EnumType.STRING)
    private CouleurEnum nom;
    private boolean disponible;
    private byte ordre;
	   
    @JsonProperty(access = Access.WRITE_ONLY)
    @ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(nullable = false, updatable = false, insertable = true) //nullable = false, updatable = false, insertable = true "sinon en fonction de l'implémentation le fereign key produit va se retrouve null a chaque update"
    private Produit produit;

    //Contructeurs
	public Couleur(){
	}
	
	public Couleur(CouleurEnum nom){
		this.setNom(nom);
	}
	
	
    //Getters & Setters
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	

	public CouleurEnum getNom() {
		return nom;
	}

	public void setNom(CouleurEnum nom) {
		this.nom = nom;
	}

//	@JsonIgnore
	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	public boolean isDisponible() {
		return disponible;
	}

	public void setDisponible(boolean disponible) {
		this.disponible = disponible;
	}

	public byte getOrdre() {
		return ordre;
	}

	public void setOrdre(byte ordre) {
		this.ordre = ordre;
	}   

	
}
