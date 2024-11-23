package org.caterly.cateringcompanyservice.offer.api;

import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferRequestDTO;
import org.caterly.cateringcompanyservice.offer.application.CateringOfferService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("")
    public ResponseEntity<CateringOfferDTO> postCateringOffer(@RequestBody CateringOfferRequestDTO requestBody) {
        return ResponseEntity.ok(cateringOfferService.add(requestBody));
    }
}
