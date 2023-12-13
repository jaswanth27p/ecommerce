package com.ecommerce.sopping.service;

import com.ecommerce.sopping.dto.ProductDto;
import com.ecommerce.sopping.dto.ProductsDto;
import com.ecommerce.sopping.entity.Product;
import com.ecommerce.sopping.exeception.NoProductsFoundException;
import com.ecommerce.sopping.exeception.ProductNotFoundException;
import com.ecommerce.sopping.repository.ProductCategoryRepo;
import com.ecommerce.sopping.repository.ProductRepo;
import com.ecommerce.sopping.repository.ProductSizeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private ProductCategoryRepo productCategoryRepo;

    @Autowired
    private ProductSizeRepo productSizeRepo;

    public List<ProductsDto> getProductsByCategory(String categoryName) {
        List<Product> products = productRepo.findByCategoryName(categoryName);
        return products.stream()
                .map(product -> new ProductsDto(product, productCategoryRepo, productSizeRepo))
                .collect(Collectors.toList());
    }

    public Optional<ProductDto> getProductById(int productId) {
        Optional<Product> productOptional = productRepo.findById(productId);
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            ProductDto productDto = new ProductDto(product, productSizeRepo);
            return Optional.of(productDto);
        } else {
            throw new ProductNotFoundException("Product not found");
        }
    }

    public List<ProductsDto> getProductsByKey(String key) {
        List<Product> products = productRepo.findByNameIgnoreCaseContaining(key);
        if (products.isEmpty()) {
            throw new NoProductsFoundException("No products found for the given key");
        }
        return products.stream()
                .map(product -> new ProductsDto(product, productCategoryRepo, productSizeRepo))
                .collect(Collectors.toList());
    }

    public List<ProductsDto> getProductByGender(String gender) {
        List<Product> products = productRepo.findByGenderIgnoreCase(gender);
        if (products.isEmpty()) {
            throw new NoProductsFoundException("No products found for the given gender");
        }
        return products.stream()
                .map(product -> new ProductsDto(product, productCategoryRepo, productSizeRepo))
                .collect(Collectors.toList());
    }
}
