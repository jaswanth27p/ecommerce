package com.ecommerce.sopping.controller;

import com.ecommerce.sopping.dto.ProductDto;
import com.ecommerce.sopping.dto.ProductsDto;
import com.ecommerce.sopping.exeception.NoProductsFoundException;
import com.ecommerce.sopping.exeception.ProductNotFoundException;
import com.ecommerce.sopping.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> getProductById(@PathVariable int productId) {
        try {
            Optional<ProductDto> productDtoOptional = productService.getProductById(productId);
            return productDtoOptional.map(productDto -> ResponseEntity.ok().body(productDto))
                    .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
        } catch (ProductNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing the request");
        }
    }

    @GetMapping("/productsByGender/{gender}")
    public ResponseEntity<?> getProductsByGender(@PathVariable String gender) {
        try {
            List<ProductsDto> products = productService.getProductByGender(gender);
            if (products.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            return ResponseEntity.ok().body(products);
        } catch (NoProductsFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing the request");
        }
    }

    @GetMapping("/productsByKey/{Key}")
    public ResponseEntity<?> getProductsByKey(@PathVariable String Key) {
        try {
            List<ProductsDto> products = productService.getProductsByKey(Key);
            if (products.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            return ResponseEntity.ok().body(products);
        } catch (NoProductsFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing the request");
        }
    }

    @GetMapping("/category/{categoryName}")
    public ResponseEntity<?> getProductsByCategory(@PathVariable String categoryName) {
        try {
            List<ProductsDto> products = productService.getProductsByCategory(categoryName);
            if (products.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            return ResponseEntity.ok().body(products);
        } catch (NoProductsFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing the request");
        }
    }
}
