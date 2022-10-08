package com.fegajaay.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "produit")
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String libelle;
	private double prix;
	private String description;
	private int stock;
//	private int delaiRetour;
//	private int nbVues;
//	private int nbConsultations;
	private int noteProduit;
	@OneToOne(cascade = CascadeType.ALL)
//  @JoinColumn(name = "utilisateur")
//	@JsonIgnore
	private Categorie categorie;
    @ManyToOne
//    @JoinColumn(name="proprietaire", nullable=false)
    private Utilisateur utilisateur;
    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name="boutique", nullable=false)
    private Boutique boutique;
//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "illustrationsProduit")
//    private IllustrationsProduit illustrationsProduit;

//    @ElementCollection
//	@CollectionTable(name = "media", joinColumns = @JoinColumn(name = "boutique_id"))
//	private List<Media> illustrations;
//    @OneToMany(mappedBy="produit", cascade = CascadeType.ALL, orphanRemoval = true)
    @OneToMany(mappedBy="produit", cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
//    @JoinColumn(name = "FK_listeIllustrations", referencedColumnName = "id")
    private List<Media> illustrations;
//    @ManyToMany(cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
    
    @OrderBy("ordre")
    @OneToMany(mappedBy="produit", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY )
    private List<Couleur> couleurs;

    //Contructeurs
	public Produit(){

	}
	public Produit(long idProduit){
		this.setId(idProduit);
	}
	
	//Getters and Setters
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	public double getPrix() {
		return prix;
	}
	public void setPrix(double prix) {
		this.prix = prix;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public int getNoteProduit() {
		return noteProduit;
	}
	public void setNoteProduit(int noteProduit) {
		this.noteProduit = noteProduit;
	}
	public Categorie getCategorie() {
		return categorie;
	}
	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}
	public Utilisateur getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}
	public Boutique getBoutique() {
		return boutique;
	}
	public void setBoutique(Boutique boutique) {
		this.boutique = boutique;
	}
	public List<Media> getIllustrations() {
		return illustrations;
	}
	public void setIllustrations(List<Media> illustrations) {
		this.illustrations = illustrations;
	}
	public List<Couleur> getCouleurs() {
		return couleurs;
	}
	public void setCouleurs(List<Couleur> couleurs) {
		this.couleurs = couleurs;
	}

}
