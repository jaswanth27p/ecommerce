package com.ecommerce.sopping.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ecommerce.sopping.entity.Product;
import com.ecommerce.sopping.repository.ProductCategoryRepo;
import com.ecommerce.sopping.repository.ProductSizeRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductsDto {

    private Integer productId;
    private String name;
    private String imageUrl;
    private String color;
    private BigDecimal price;
    private Set<String> productCategories;
    private Map<String, Integer> productSizes;
    private Double averageRating;

    public ProductsDto(Product product, ProductCategoryRepo productCategoryRepo, ProductSizeRepo productSizeRepo) {
        this.productId = product.getProductId();
        this.name = product.getName();
        this.imageUrl = extractFirstImageUrlFromDescription(product.getDescription());
        this.color = extractValueFromDescription(product.getDescription(), "color", String.class);
        this.price = product.getPrice();
        this.productCategories = productCategoryRepo.findCategoryNamesByProduct(product);

        Set<Object[]> sizeAndQuantities = productSizeRepo.findSizesAndQuantitiesByProduct(product);
        this.productSizes = sizeAndQuantities.stream()
                .collect(Collectors.toMap(
                        arr -> (String) arr[0], // Size name
                        arr -> (Integer) arr[1]    // Stock quantity
                ));

        this.averageRating = extractAverageRating(product.getDescription());
    }

    private <T> T extractValueFromDescription(String description, String key, Class<T> valueType) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, Object> descriptionMap = objectMapper.readValue(description, Map.class);

            Object value = descriptionMap.get(key);
            if (valueType.isInstance(value)) {
                return valueType.cast(value);
            }
        } catch (Exception e) {
            e.printStackTrace(); // Handle the exception according to your needs
        }
        return null;
    }
    private String extractFirstImageUrlFromDescription(String description) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, Object> descriptionMap = objectMapper.readValue(description, Map.class);

            Object value = descriptionMap.get("image_urls");
            if (value instanceof List) {
                List<String> imageUrls = (List<String>) value;
                if (!imageUrls.isEmpty()) {
                    return imageUrls.get(0);
                }
            }
        } catch (Exception e) {
            e.printStackTrace(); // Handle the exception according to your needs
        }
        return null;
    }
    private Double extractAverageRating(String description) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, Object> descriptionMap = objectMapper.readValue(description, Map.class);

            Object ratingObject = descriptionMap.get("rating");
            if (ratingObject instanceof Map) {
                Map<String, Object> ratingMap = (Map<String, Object>) ratingObject;
                Object averageObject = ratingMap.get("average");
                if (averageObject instanceof Double) {
                    return (Double) averageObject;
                }
            }
        } catch (Exception e) {
            e.printStackTrace(); // Handle the exception according to your needs
        }
        return null;
    }

    // Add methods if needed
}
