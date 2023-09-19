package com.gainsight.ECommerce.services;

import com.gainsight.ECommerce.entity.Products;
import com.gainsight.ECommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    //Get data from database
    public List<Products> getAllProducts(){
        return productRepository.findAll();
    }

    public List<Products> getproductByCategory(String category){
        return null;
    }

    //

}
