package com.ecommerce.sopping.repository;

import com.ecommerce.sopping.entity.Product;
import com.ecommerce.sopping.entity.ProductCategory;
import com.ecommerce.sopping.entity.ProductCategoryId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface ProductCategoryRepo extends JpaRepository<ProductCategory, ProductCategoryId> {

    @Query("SELECT pc.category.name FROM ProductCategory pc WHERE pc.product = :product")
    Set<String> findCategoryNamesByProduct(Product product);
}

