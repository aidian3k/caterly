package org.caterly.cateringclientservice.order.mapper;

import org.caterly.cateringclientservice.meals.domain.MealEntity;
import org.caterly.cateringclientservice.meals.domain.MealRepository;
import org.caterly.cateringclientservice.model.Client;
import org.caterly.cateringclientservice.order.dto.OrderMealDTO;
import org.caterly.cateringclientservice.order.dto.OrderPostRequestDTO;
import org.caterly.cateringclientservice.order.dto.OrderResponseDTO;
import org.caterly.cateringclientservice.order.entity.Order;
import org.caterly.cateringclientservice.order.entity.OrderMeal;
import org.caterly.cateringclientservice.order.repository.OrderMealRepository;
import org.caterly.cateringclientservice.repository.ClientRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public abstract class OrderMapper {
    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private OrderMealRepository orderMealRepository;


    @Mapping(target = "client", ignore = true)
    @Mapping(target = "id", ignore = true)
    public abstract Order toOrderEntity(OrderPostRequestDTO dto);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "meal", source = "dto.mealId")
    public abstract OrderMeal toOrderMealEntity(Order order, OrderMealDTO dto);

    @Mapping(target = "clientId", source = "client.id")
    @Mapping(target = "meals", source = "id")
    public abstract OrderResponseDTO toOrderResponseDTO(Order entity);

    @Mapping(target = "mealId", source = "meal.id")
    public abstract OrderMealDTO toOrderMealDTO(OrderMeal entity);


    public final Client resolveClient(final Long clientId) {
        if (clientId == null) {
            return null;
        }
        return clientRepository.findById(clientId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Client not found for ID: " + clientId
                ));
    }

    public final MealEntity resolveMeal(final Long mealId) {
        if (mealId == null) {
            return null;
        }
        return mealRepository.findById(mealId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Meal not found for ID: " + mealId
                ));
    }

    public final List<OrderMealDTO> resolveOrderMeals(final Long orderId) {
        if (orderId == null) {
            return null;
        }
        return orderMealRepository.findAllByOrderId(orderId).stream().map(
                this::toOrderMealDTO
        ).toList();
    }
}
