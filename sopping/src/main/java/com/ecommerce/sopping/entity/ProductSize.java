package com.ecommerce.sopping.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "product_sizes")
public class ProductSize {
    @EmbeddedId
    private ProductSizeId id;

    @ManyToOne
    @JoinColumn(name = "product_id", insertable = false, updatable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "size_id", insertable = false, updatable = false)
    private Size size;

    @Column(name = "stock_quantity", nullable = false)
    private Integer stockQuantity;

    // Constructors, getters, setters, and other methods
}
