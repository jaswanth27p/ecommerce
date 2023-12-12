package com.ecommerce.sopping.repository;

import com.ecommerce.sopping.entity.Product;
import com.ecommerce.sopping.entity.ProductSize;
import com.ecommerce.sopping.entity.ProductSizeId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface ProductSizeRepo extends JpaRepository<ProductSize, ProductSizeId> {
    @Query("SELECT ps.size.name, ps.stockQuantity FROM ProductSize ps WHERE ps.product = :product")
    Set<Object[]> findSizesAndQuantitiesByProduct(Product product);
}

