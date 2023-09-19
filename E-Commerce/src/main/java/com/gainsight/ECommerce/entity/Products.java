package com.gainsight.ECommerce.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="products")
public class Products {

    @Id
    @Column(name="prod_id")
    private int prodId;
    @Column(name="prod_name")
    private String prodName;
    @Column(name="prod_desc")
    private String prodDesc;
    @Column(name="prod_rating")
    private double prodRating;
    @Column(name="prod_price")
    private double prodPrice;
    @Column(name="prod_category")
    private String prodCategory;


    public Products(){}

    public Products(int prodId, String prodName, String prodDesc, double prodRating, double prodPrice) {
        this.prodId = prodId;
        this.prodName = prodName;
        this.prodDesc = prodDesc;
        this.prodRating = prodRating;
        this.prodPrice = prodPrice;
    }

    public int getProdId() {
        return prodId;
    }

    public void setProdId(int prodId) {
        this.prodId = prodId;
    }

    public String getProdName() {
        return prodName;
    }

    public void setProdName(String prodName) {
        this.prodName = prodName;
    }

    public String getProdDesc() {
        return prodDesc;
    }

    public void setProdDesc(String prodDesc) {
        this.prodDesc = prodDesc;
    }

    public double getProdRating() {
        return prodRating;
    }

    public void setProdRating(double prodRating) {
        this.prodRating = prodRating;
    }

    public double getProdPrice() {
        return prodPrice;
    }

    public void setProdPrice(double prodPrice) {
        this.prodPrice = prodPrice;
    }

    public String getProdCategory() {
        return prodCategory;
    }

    public void setProdCategory(String prodCategory) {
        this.prodCategory = prodCategory;
    }
}
