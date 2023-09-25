package com.gainsight.ECommerce.repository;

import com.gainsight.ECommerce.entity.BillingDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillingDetailsRepository extends JpaRepository<BillingDetails,Integer> {
}
