package org.caterly.cateringcompanyservice.offer.api;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferDTO;
import org.caterly.cateringcompanyservice.offer.api.dto.CateringOfferRequest;
import org.caterly.cateringcompanyservice.offer.application.CateringOfferService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/offers")
@RequiredArgsConstructor
public final class CateringOfferController {

    private final CateringOfferService cateringOfferService;

    @GetMapping
    public ResponseEntity<List<CateringOfferDTO>> getCateringOffers(
        final @RequestBody @Valid CateringOfferRequest request
    ) {
        return ResponseEntity.ok(cateringOfferService.getAllOffers(request));
    }
}
