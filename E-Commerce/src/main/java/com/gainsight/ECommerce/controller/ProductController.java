package com.gainsight.ECommerce.controller;

import com.gainsight.ECommerce.entity.Products;
import com.gainsight.ECommerce.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @CrossOrigin
    @GetMapping(produces = "application/json")
    public ResponseEntity<List<Products>> getAllProducts(){
        return new ResponseEntity<List<Products>>(productService.getAllProducts(), HttpStatus.OK);
    }

    @CrossOrigin()
    @GetMapping(value="/{category}",produces = "application/json")
    public ResponseEntity<List<Products>> getProductByCategory(@PathVariable String category){
        return new ResponseEntity<List<Products>>(productService.getproductByCategory(category), HttpStatus.OK);
    }

//    @CrossOrigin
//    @GetMapping(value="/search?query=M",produces = "application/json")
//        public ResponseEntity<List<Products>> getProductByCategory(@RequestParam(value="query", required = true) String category) {
//                return new ResponseEntity<List<Products>>(productService.getproductByCategory(category),HttpStatus.OK);
//        }
}
