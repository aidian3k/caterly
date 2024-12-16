package org.caterly.cateringclientservice.service.impl;

import org.caterly.cateringclientservice.dto.OrderRequest;
import org.caterly.cateringclientservice.model.Order;
import org.caterly.cateringclientservice.repository.OrderRepository;
import org.caterly.cateringclientservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.caterly.cateringclientservice.service.PaymentService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final PaymentService paymentService;

    @Override
    public Order createOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setApartmentNumber(orderRequest.getApartmentNumber());
        order.setCity(orderRequest.getCity());
        order.setHouseNumber(orderRequest.getHouseNumber());
        order.setPaymentMethod(orderRequest.getPaymentMethod());
        order.setState(orderRequest.getState());
        order.setStreet(orderRequest.getStreet());
        order.setZip(orderRequest.getZip());
        order = orderRepository.save(order);
        paymentService.createPayment(order.getId(), orderRequest.getAmount());
        return order;
    }
}
