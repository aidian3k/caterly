package org.caterly.cateringclientservice.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderPutRequestDTO {
    private Long clientId;
    private Date dateOfPurchase;
    private String address;
    private String status;

    public final Date getDateOfPurchase() {
        return (Date) dateOfPurchase.clone();
    }

    public final void setDateOfPurchase(final Date dateOfPurchase) {
        this.dateOfPurchase = new Date(dateOfPurchase.getTime());
    }
}
