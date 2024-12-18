package org.caterly.cateringclientservice.service;

import org.caterly.cateringclientservice.model.Client;
import org.caterly.cateringclientservice.dto.ClientRegistrationRequest;

public interface ClientService {
    Client register(ClientRegistrationRequest request);
    Client getClientByEmail(String email);
}
