package com.ecommerce.sopping.service;

import com.ecommerce.sopping.dto.ProductsDto;
import com.ecommerce.sopping.entity.Product;
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

    public Optional<Product> getProductById(int productId) {
        return productRepo.findById(productId);
    }

    public List<ProductsDto> getProductByKey(String key) {
        List<Product> products ;
        if (key.equals("male") || key.equals("female")){
            products= productRepo.findByGender(key);
        }else {
            products= productRepo.findByNameIgnoreCaseContaining(key);
        }
        return products.stream()
                .map(product -> new ProductsDto(product, productCategoryRepo, productSizeRepo))
                .collect(Collectors.toList());
    }
}
