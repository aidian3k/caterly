package org.caterly.cateringcompanyservice.offer.api;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferRequestDTO;
import org.caterly.cateringcompanyservice.offer.application.CateringOfferService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;

@RestController
@RequestMapping("/company/api/offers")
@RequiredArgsConstructor
public final class CateringOfferController {

    private final CateringOfferService cateringOfferService;

    @GetMapping("{cateringCompanyId}")
    public ResponseEntity<List<CateringOfferDTO>> getCateringOffers(
        final @PathVariable long cateringCompanyId
    ) {
        return ResponseEntity.ok(
            cateringOfferService.getAllOffers(cateringCompanyId)
        );
    }

    @PostMapping
    public ResponseEntity<CateringOfferDTO> postCateringOffer(
            final @RequestBody CateringOfferRequestDTO requestBody
    ) {
        return ResponseEntity.ok(cateringOfferService.add(requestBody));
    }

    @DeleteMapping("/{cateringCompanyId}/{foodId}")
    public ResponseEntity<Void> deleteCateringOffer(
            final @PathVariable long cateringCompanyId,
            final @PathVariable long foodId
    ) {
        cateringOfferService.delete(cateringCompanyId, foodId);
        return ResponseEntity.noContent().build();
    }
}
