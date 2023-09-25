package com.gainsight.ECommerce.entity;

import jakarta.persistence.*;

@Entity
@Table(name="cart")
public class Cart {

    @Id
    @Column(name="prod_id")
    private int prodId;
    @Column(name="quantity")
    private int quantity;

    @OneToOne
    @JoinColumn(name = "prod_id")
    private Products product;

    public Cart(int prodId, int quantity) {
        this.prodId = prodId;
        this.quantity = quantity;
    }

    public Cart() {
    }

    public int getProdId() {
        return prodId;
    }

    public void setProdId(int prodId) {
        this.prodId = prodId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }
}
