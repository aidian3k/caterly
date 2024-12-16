package org.caterly.cateringclientservice.service.impl;

import org.caterly.cateringclientservice.model.Payment;
import org.caterly.cateringclientservice.repository.PaymentRepository;
import org.caterly.cateringclientservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;
    @Override
    public Payment createPayment(Long orderId, Double amount) {
        Payment payment = new Payment();
        payment.setOrderId(orderId);
        payment.setAmount(amount);
        return paymentRepository.save(payment);
    }
}
