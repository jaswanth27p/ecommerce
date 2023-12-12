package com.ecommerce.sopping.controller;

import com.ecommerce.sopping.dto.ProductsDto;
import com.ecommerce.sopping.entity.Product;
import com.ecommerce.sopping.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/product/{productId}")
    public Optional<Product> getProductById(@PathVariable int productId) {
        return productService.getProductById(productId);
    }

    @GetMapping("/products/{Key}")
    public List<ProductsDto> getProductsByKey(@PathVariable String Key) {
        return productService.getProductByKey(Key);
    }

    @GetMapping("/category/{categoryName}")
    public List<ProductsDto> getProductsByCategory(@PathVariable String categoryName) {
        return productService.getProductsByCategory(categoryName);
    }
}
