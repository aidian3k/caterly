package org.caterly.cateringclientservice.service;

import org.caterly.cateringclientservice.model.Payment;

public interface PaymentService {

    Payment createPayment(Long orderId, Double amount);
}
