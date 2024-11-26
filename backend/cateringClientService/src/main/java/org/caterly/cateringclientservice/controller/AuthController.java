package org.caterly.cateringclientservice.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.dto.ClientRegistrationRequest;
import org.caterly.cateringclientservice.dto.LoginRequest;
import org.caterly.cateringclientservice.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/client/auth")
@RequiredArgsConstructor
public final class AuthController {

    private final AuthenticationManager authenticationManager;
    private final ClientService clientService;

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestBody final ClientRegistrationRequest request) {
        clientService.register(request);
        return ResponseEntity.ok("Created");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(
            @RequestBody final LoginRequest loginRequest,
            final HttpServletRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getPassword())
            );
            SecurityContextHolder
                    .getContext().setAuthentication(authentication);

            HttpSession session = request.getSession(true);
            session.setAttribute("SPRING_SECURITY_CONTEXT",
                    SecurityContextHolder.getContext());

            System.out.println("Session ID after login: " + session.getId());
            System.out.println("SecurityContext in session: "
                    + session.getAttribute("SPRING_SECURITY_CONTEXT"));

            return ResponseEntity.ok("Login successful");
        } catch (AuthenticationException ex) {
            return ResponseEntity.status(
                    HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

}

