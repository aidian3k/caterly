package org.caterly.cateringclientservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.dto.ClientRegistrationRequest;
import org.caterly.cateringclientservice.dto.Role;
import org.caterly.cateringclientservice.exception.UserAlreadyExistsException;
import org.caterly.cateringclientservice.model.Client;
import org.caterly.cateringclientservice.repository.ClientRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.caterly.cateringclientservice.service.ClientService;

@Service
@RequiredArgsConstructor
public final class ClientServiceImpl implements ClientService {
    private final ClientRepository clientRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Client register(final ClientRegistrationRequest request) {
        if (clientRepository.findByEmail(request.getEmail()).isPresent()) {
                    throw new UserAlreadyExistsException(request.getEmail());
        }

        Client client = Client.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .city(request.getCity())
                .piggyBankMoney(0)
                .role(Role.ROLE_USER.name())
                .build();

        return clientRepository.save(client);
    }

    @Override
    public Client getClientByEmail(final String email) {
        return clientRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found"));
    }
}

