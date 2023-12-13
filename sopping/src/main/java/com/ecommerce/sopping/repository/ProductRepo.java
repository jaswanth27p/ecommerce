package com.ecommerce.sopping.repository;

import com.ecommerce.sopping.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p JOIN p.productCategories pc JOIN pc.category c WHERE LOWER(c.name) = LOWER(:categoryName)")
    List<Product> findByCategoryName(@Param("categoryName") String categoryName);

    List<Product> findByGenderIgnoreCase(String gender);

    @Query("SELECT p FROM Product p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :key, '%'))")
    List<Product> findByNameIgnoreCaseContaining(String key);
}
