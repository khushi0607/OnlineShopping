package com.gainsight.ECommerce.repository;

import com.gainsight.ECommerce.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Products,Integer> {


    List<Products> findByProdCategoryContaining(String category);
}
