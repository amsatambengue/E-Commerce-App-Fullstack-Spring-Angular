package com.fegajaay.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.fegajaay.models.RoleEnum;
import com.fegajaay.utils.Utils;

@Order(2)
@Configuration
//@Configuration
//@EnableOAuth2Sso
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    	auth.inMemoryAuthentication()
    		.withUser("amsatus")
    		  .password("satus")
    		  .roles(RoleEnum.ADMIN.toString());

        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	http.cors(); //to avoid this message from the browser inspect tool: 'http://localhost:8080/connexion' from origin 'http://localhost:4200' has been blocked by CORS policy
    	http.csrf().disable();
    	http.authorizeRequests()
                .antMatchers("/admin").hasRole(RoleEnum.ADMIN.toString())
                .antMatchers("/clientfg").hasAnyRole(RoleEnum.ADMIN.toString(), RoleEnum.CLIENTFG.toString())
                .antMatchers("/connexion").hasAnyRole(RoleEnum.ADMIN.toString(), RoleEnum.CLIENTFG.toString())
                .antMatchers("/google-login").authenticated()

                .antMatchers("/").permitAll()
                
                // Landing pages for a new user
                .antMatchers("/register").permitAll()
                .antMatchers("/utilisateurs").permitAll()
                .antMatchers("/facebook-login").permitAll()
                .antMatchers("/forwardLogin").permitAll()
                .antMatchers("/getLoggedInUser").permitAll()
                .antMatchers("/confirm").permitAll()
                .and()
                	.oauth2Login()
                .and()
                	.formLogin()
                .and()
                	.httpBasic()
                //Les deux lignes suivantes permettent de créer sa propre page de login
//                			.loginPage("/connexion")
//                			.permitAll()
                
                ;


        http.logout().logoutSuccessUrl(Utils.urlServeurFrontEnd);
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
    

}
