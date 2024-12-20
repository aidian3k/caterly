package org.caterly.cateringclientservice.order.api.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.caterly.cateringclientservice.model.Client;

import java.time.LocalDate;

@Entity
@Table(name = "orders")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate dateOfPurchase;

    @Enumerated(EnumType.STRING)
    private OrderState state;

    private String address;

    private String paymentMethod;

    private String review;

    private Integer rating;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    private Client client;

    /**
     * Returns a copy of the client object.
     *
     * @return a copy of the client object
     */
    public Client getClient() {
        return client == null ? null : new Client(client);
    }
}
