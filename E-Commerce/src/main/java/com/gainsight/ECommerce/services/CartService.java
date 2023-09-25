package com.gainsight.ECommerce.services;

import com.gainsight.ECommerce.entity.Cart;
import com.gainsight.ECommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    public boolean addProduct(Cart cartItem){
        Cart c= cartRepository.save(cartItem);
        return c!=null;
    }

    public boolean removeProduct(int productId){
        long count=cartRepository.count();
        cartRepository.deleteById(productId);
        return count>cartRepository.count();
    }

    public List<Cart> getAllCartProducts(){
        List<Cart> listCart = cartRepository.findAll();
        if(listCart!=null)
            return listCart;
        return null;
    }

    public boolean modifyCart(Cart cart){
        Cart c= cartRepository.save(cart);
        return c!=null;
    }

    //function to calculate the total price of products in cart
    public Long totalPrice(){
        long total=0;
        List<Cart> listCart = cartRepository.findAll();
        for(Cart i:listCart){
            total+=i.getProduct().getProdPrice()*i.getQuantity();
        }
        return total;
    }

    //service to delete cart details after making purchase
    public boolean deleteCartdetails(){
        cartRepository.deleteAll();
        return cartRepository.count()==0;
    }

}
