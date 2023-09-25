package com.gainsight.ECommerce.services;

import com.gainsight.ECommerce.entity.BillingDetails;
import com.gainsight.ECommerce.repository.BillingDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BillingDetailsService {

    @Autowired
    BillingDetailsRepository billingDetailsRepository;

    public boolean addBillingDetails(BillingDetails billingDetails){
        BillingDetails b= billingDetailsRepository.save(billingDetails);
        return b!=null;
    }

}
