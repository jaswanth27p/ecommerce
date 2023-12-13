package com.ecommerce.sopping.dto;

import com.ecommerce.sopping.entity.Product;
import com.ecommerce.sopping.repository.ProductSizeRepo;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductDto {

    private Integer productId;
    private String name;
    private String description;
    private BigDecimal price;
    private String gender;
    private Map<String, Integer> productSizes;
    private LocalDateTime createdAt;

    // No need to include associations (productCategories, productSizes) or ignore annotations

    public ProductDto(Product product , ProductSizeRepo productSizeRepo) {
        this.productId = product.getProductId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.gender = product.getGender();
        Set<Object[]> sizeAndQuantities = productSizeRepo.findSizesAndQuantitiesByProduct(product);
        this.productSizes = sizeAndQuantities.stream()
                .collect(Collectors.toMap(
                        arr -> (String) arr[0], // Size name
                        arr -> (Integer) arr[1]    // Stock quantity
                ));
        this.createdAt = product.getCreatedAt();
    }

}
