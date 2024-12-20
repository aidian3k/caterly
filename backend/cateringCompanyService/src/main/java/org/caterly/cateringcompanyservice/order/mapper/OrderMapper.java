package org.caterly.cateringcompanyservice.order.mapper;

import org.caterly.cateringcompanyservice.order.api.dto.OrderDetailsDto;
import org.caterly.cateringcompanyservice.order.api.dto.OrderMealDTO;
import org.caterly.cateringcompanyservice.order.domain.client.Order;
import org.caterly.cateringcompanyservice.order.domain.client.OrderMeal;
import org.caterly.cateringcompanyservice.order.domain.client.OrderMealRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public abstract class OrderMapper {

    @Autowired
    private OrderMealRepository orderMealRepository;

    public abstract List<OrderDetailsDto> getOrderResponseDto(
            List<Order> source);

    @Mapping(target = "meals", source = "id")
    public abstract OrderDetailsDto toOrderResponseDTO(Order entity);

    public abstract OrderMealDTO toOrderMealDTO(OrderMeal entity);


    public final List<OrderMealDTO> resolveOrderMeals(final Long orderId) {
        if (orderId == null) {
            return null;
        }
        return orderMealRepository.findAllByOrderId(orderId).stream().map(
                this::toOrderMealDTO
        ).toList();
    }
}
