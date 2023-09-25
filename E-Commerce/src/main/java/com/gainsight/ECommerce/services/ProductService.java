package com.gainsight.ECommerce.services;

import com.gainsight.ECommerce.entity.Products;
import com.gainsight.ECommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    //Get data from database
    public List<Products> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Products> getproductByCategory(String category) {
        List<Products> result = new ArrayList<>();
        List<Products> allprod = getAllProducts();
        for (Products p : allprod) {
            Pattern pattern = Pattern.compile("\\b" + Pattern.quote(category) + "\\b", Pattern.CASE_INSENSITIVE);
            Matcher matcher = pattern.matcher(p.getProdCategory());
            if(matcher.find())
                result.add(p);
        }
        return result;
    }




}
