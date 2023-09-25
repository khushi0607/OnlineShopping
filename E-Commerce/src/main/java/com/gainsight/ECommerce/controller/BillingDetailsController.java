package com.gainsight.ECommerce.controller;

import com.gainsight.ECommerce.entity.BillingDetails;
import com.gainsight.ECommerce.services.BillingDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/billingDetails")
public class BillingDetailsController {

    @Autowired
    public BillingDetailsService billingDetailsService;

    @CrossOrigin
    @PostMapping(consumes = "application/json")
    public HttpStatus addBillingDetails(@RequestBody BillingDetails billingDetails){
        if(billingDetailsService.addBillingDetails(billingDetails))
            return HttpStatus.OK;
        return HttpStatus.NOT_MODIFIED;
    }

}
