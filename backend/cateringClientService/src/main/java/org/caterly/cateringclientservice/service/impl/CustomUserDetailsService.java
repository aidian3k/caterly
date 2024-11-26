package org.caterly.cateringclientservice.service.impl;

import org.caterly.cateringclientservice.model.Client;
import org.caterly.cateringclientservice.repository.ClientRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final ClientRepository clientRepository;

    public CustomUserDetailsService(final ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public final UserDetails loadUserByUsername(final String email)
            throws UsernameNotFoundException {
        Client client = clientRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found"));
        return new User(
                client.getEmail(),
                client.getPassword(),
                List.of(new SimpleGrantedAuthority(client.getRole()))
        );
    }
}
