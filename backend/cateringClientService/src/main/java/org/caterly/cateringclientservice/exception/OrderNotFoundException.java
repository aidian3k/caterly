package org.caterly.cateringclientservice.exception;

public final class OrderNotFoundException extends RuntimeException {
    public OrderNotFoundException(final long orderId) {
        super(String.format("Order with id %s could not be found", orderId));
    }
}
