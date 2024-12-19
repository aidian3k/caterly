package org.caterly.cateringclientservice.order.repository;

import org.caterly.cateringclientservice.order.entity.OrderMeal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface OrderMealRepository extends JpaRepository<OrderMeal, UUID> {
    @Query(value = "SELECT * FROM order_meals "
            + "WHERE order_id = :orderId", nativeQuery = true)
    List<OrderMeal> findAllByOrderId(Long orderId);
}
