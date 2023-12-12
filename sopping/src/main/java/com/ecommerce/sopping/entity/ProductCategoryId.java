package com.ecommerce.sopping.entity;

import jakarta.persistence.*;
import java.io.Serializable;

@Embeddable
public class ProductCategoryId implements Serializable {

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}
