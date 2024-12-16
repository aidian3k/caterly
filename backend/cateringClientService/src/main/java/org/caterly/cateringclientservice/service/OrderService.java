package org.caterly.cateringclientservice.service;


import org.caterly.cateringclientservice.dto.OrderRequest;
import org.caterly.cateringclientservice.model.Order;

public interface OrderService {

    Order createOrder(OrderRequest orderRequest);
}
