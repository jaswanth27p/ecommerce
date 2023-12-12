package com.ecommerce.sopping.entity;

import jakarta.persistence.*;

import java.io.Serializable;

@Embeddable
public class ProductSizeId implements Serializable {

    @Column(name = "product_id")
    private Integer productId;

    @Column(name = "size_id")
    private Integer sizeId;

}
