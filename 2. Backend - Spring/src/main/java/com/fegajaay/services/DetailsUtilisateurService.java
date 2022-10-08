package com.fegajaay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.fegajaay.dao.UtilisateurRepository;
import com.fegajaay.models.DetailsUtilisateur;
import com.fegajaay.models.Utilisateur;

import java.util.Optional;

@Service
public class DetailsUtilisateurService implements UserDetailsService {

    @Autowired
    UtilisateurRepository utilisateurRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Utilisateur> utilisateur = utilisateurRepository.findByEmail(email);

        utilisateur.orElseThrow(() -> new UsernameNotFoundException("Not found: " + email));

        return utilisateur.map(DetailsUtilisateur::new).get();
    }
}
