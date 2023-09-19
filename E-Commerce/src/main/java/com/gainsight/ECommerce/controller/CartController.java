package com.gainsight.ECommerce.controller;

import com.gainsight.ECommerce.entity.Cart;
import com.gainsight.ECommerce.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @CrossOrigin
    @PostMapping(consumes="application/json")
    public HttpStatus addProduct(@RequestBody Cart cart){
        if(cartService.addProduct(cart))
            return HttpStatus.OK;
        return HttpStatus.NOT_MODIFIED;
    }

    @CrossOrigin
    @DeleteMapping("/{productId}")
    public HttpStatus deleteProductById(@PathVariable int productId){
        if(cartService.removeProduct(productId))
            return HttpStatus.OK;
        return HttpStatus.NOT_MODIFIED;
    }

    @CrossOrigin
    @GetMapping(produces = "application/json")
    public List<Cart> getAllCartProducts(){
        return cartService.getAllCartProducts();
    }

}
