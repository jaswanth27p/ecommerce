/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext } from "react";

const productsContext = createContext();

export function useProducts() {
  return useContext(productsContext);
}

export function ProductsContext({ children }) {
  // Simulate fetching products from an API
  const products = {
    MEN: {
      products: {
        1: {
          id: 1,
          name: "Product A",
          color: ["black"],
          category:[1,2,3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 100,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: false },
            { name: "LG", inStock: true },
            { name: "XL", inStock: false },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        2: {
          id: 2,
          name: "Product B",
          color: ["black"],
          category:[1,2,3,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 150,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: false },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: false },
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        3: {
          id: 3,
          name: "Product C",
          color: ["white"],
          category:[2,3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 150,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: false },
            { name: "SM", inStock: false },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        4: {
          id: 4,
          name: "Product D",
          color: ["blue"],
          category:[1,2,3,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 200,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: false},
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        5: {
          id: 5,
          name: "Product E",
          color: ["purple"],
          category:[1,2,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 120,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: false },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
      },
    },
    WOMEN: {
      products: {
        6: {
          id: 6,
          name: "Product X",
          color: ["black"],
          category:[2,3,4],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 50,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: false },
            { name: "MD", inStock: false },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        7: {
          id: 7,
          name: "Product Y",
          color: ["black"],
          category:[1,2,3,4],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 75,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: false },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: false },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        8: {
          id: 8,
          name: "Product Z",
          color: ["blue"],
          category:[1,3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 100,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: false },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: false},
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        9: {
          id: 9,
          name: "Product W",
          color: ["white"],
          category:[1,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 75,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: false },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        10: {
          id: 10,
          name: "Product V",
          color: ["green"],
          category:[1,2,3,4],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 75,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: false },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: false },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
      },
    },
    KIDS: {
      products: {
        11: {
          id: 11,
          name: "Product P",
          color: ["black"],
          category:[1,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 50,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: false },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        12: {
          id: 12,
          name: "Product Q",
          color: ["white"],
          category:[2,3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 70,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: false },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        13: {
          id: 13,
          name: "Product R",
          color: ["blue"],
          category:[1,2,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 50,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: false},
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        14: {
          id: 14,
          name: "Product S",
          color: ["green"],
          category:[1,2,3],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 75,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
      },
    },
    TOP: {
      products: {
        3: {
          id: 3,
          name: "Product C",
          color: ["black"],
          category:[3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 150,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        13: {
          id: 13,
          name: "Product R",
          color: ["black"],
          category:[1,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 50,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        9: {
          id: 9,
          name: "Product W",
          color: ["black"],
          category:[1,2,3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 75,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        2: {
          id: 2,
          name: "Product B",
          color: ["black"],
          category:[1,2,3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 150,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
      },
    },
    BEST: {
      products: {
        13: {
          id: 13,
          name: "Product R",
          color: ["black"],
          category:[1,2,3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 50,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        14: {
          id: 14,
          name: "Product S",
          color: ["black"],
          category:[1,2,3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 75,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        1: {
          id: 1,
          name: "Product A",
          color: ["black"],
          category:[1,2,3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 100,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
        2: {
          id: 2,
          name: "Product B",
          color: ["black"],
          category:[1,2,3,4,5],
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          price: 150,
          rating: [4, 124],
          sizes: [
            { name: "XS", inStock: true },
            { name: "SM", inStock: true },
            { name: "MD", inStock: true },
            { name: "LG", inStock: true },
            { name: "XL", inStock: true },
            { name: "2XL", inStock: true },
            
          ],
          discription: {
            about:
              "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: 'Black'. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
            highlight: [
              "Hand cut and sewn locally",
              "Dyed with our proprietary colors",
              "Pre-washed & pre-shrunk",
              "Ultra-soft 100% cotton",
            ],
            details:
              "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
          },
        },
      },
    },
  };

  return (
    <productsContext.Provider value={{ products }}>
      {children}
    </productsContext.Provider>
  );
}
