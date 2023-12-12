package com.ecommerce.sopping.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "product_categories")
public class ProductCategory {
    @EmbeddedId
    private ProductCategoryId id;

    @ManyToOne
    @JoinColumn(name = "product_id", insertable = false, updatable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "category_id", insertable = false, updatable = false)
    private Category category;

    // Constructors, getters, setters, and other methods
}
