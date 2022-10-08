package com.fegajaay.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "utilisateur")
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String prenom;
    private String telephone;
    private String email;
    private String noteVendeur;
    private String nomUtilisateur;
    private String motDePasse;
    private boolean actif;
    private RoleEnum role;
	@JsonIgnore
    @OneToMany(mappedBy="utilisateur", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Boutique> listeBoutiques = new ArrayList<Boutique>();

    //Constructors
    public Utilisateur(){
    	
    }
    public Utilisateur(String email, String motDePasse){
    	this.email = email;
    	this.motDePasse = motDePasse;
    }

    
	public Utilisateur(int id, String nom, String prenom, String telephone, String email, String emailId,
			String noteVendeur, String nomUtilisateur, String motDePasse, boolean actif, RoleEnum role) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.telephone = telephone;
		this.email = email;
		this.noteVendeur = noteVendeur;
		this.nomUtilisateur = nomUtilisateur;
		this.motDePasse = motDePasse;
		this.actif = actif;
		this.role = role;
	}
	//Getters and Setters
    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNoteVendeur() {
		return noteVendeur;
	}

	public void setNoteVendeur(String noteVendeur) {
		this.noteVendeur = noteVendeur;
	}

	public String getNomUtilisateur() {
		return nomUtilisateur;
	}

	public void setNomUtilisateur(String nomUtilisateur) {
		this.nomUtilisateur = nomUtilisateur;
	}

	public String getMotDePasse() {
		return motDePasse;
	}

	public void setMotDePasse(String motDePasse) {
		this.motDePasse = motDePasse;
	}

	public boolean estActif() {
		return actif;
	}

	public void setActif(boolean actif) {
		this.actif = actif;
	}

	public RoleEnum getRole() {
		return role;
	}

	public void setRole(RoleEnum role) {
		this.role = role;
	}
	public List<Boutique> getListeBoutiques() {
		return listeBoutiques;
	}
	public void setListeBoutiques(List<Boutique> listeBoutiques) {
		this.listeBoutiques = listeBoutiques;
	}
	

}
