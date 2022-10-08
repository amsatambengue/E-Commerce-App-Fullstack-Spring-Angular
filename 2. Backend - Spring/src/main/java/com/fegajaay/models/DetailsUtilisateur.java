 package com.fegajaay.models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class DetailsUtilisateur implements UserDetails {
	/**
	 * 
	 */
	private static final long serialVersionUID = 6214642401500243583L;
	private String email;
	private String nomUtilisateur;
	private String motDepasse;
	private boolean actif;
	private List<GrantedAuthority> authorities;

    public DetailsUtilisateur(Utilisateur utilisateur) {
    	this.email = utilisateur.getEmail();
        this.nomUtilisateur = utilisateur.getNomUtilisateur();
        this.motDepasse = utilisateur.getMotDePasse();
        this.actif = utilisateur.estActif();
        System.out.println("nomUser "+nomUtilisateur);
        System.out.println("Utilisateur.getRole => " + utilisateur.getRole());
        this.authorities = Arrays.stream(("ROLE_"+utilisateur.getRole()).split(","))
													                    .map(SimpleGrantedAuthority::new)
													                    .collect(Collectors.toList());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return motDepasse;
    }
    
    public String getEmail() {
        return email;
    }

    @Override
    public String getUsername() {
        return nomUtilisateur;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return actif;
    }
}
