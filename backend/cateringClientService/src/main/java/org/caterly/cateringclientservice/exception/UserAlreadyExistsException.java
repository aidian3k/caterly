package org.caterly.cateringclientservice.exception;

public final class UserAlreadyExistsException extends RuntimeException {
    public UserAlreadyExistsException(final String email) {
        super(String.format("User with email %s already exists", email));
    }
}
