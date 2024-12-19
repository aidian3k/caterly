package org.caterly.cateringclientservice.order.repository;

import org.caterly.cateringclientservice.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query(value = "SELECT * FROM orders "
            + "WHERE client_id = :clientId", nativeQuery = true)
    List<Order> findAllByClientId(Long clientId);
}
