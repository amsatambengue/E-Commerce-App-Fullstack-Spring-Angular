package com.fegajaay.dao;

import org.springframework.data.repository.CrudRepository;

import com.fegajaay.models.ConfirmationToken;

public interface ConfirmationTokenRepository extends CrudRepository<ConfirmationToken, String> {
    ConfirmationToken findByConfirmationToken(String confirmationToken);
}
