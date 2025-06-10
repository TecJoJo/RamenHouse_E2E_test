import { createMealViaAPI, IMealCreation } from "./createMealViaAPI";


const defaultMeals = [
    {
        name: "CypressTestMeal1",
        isFeatured: false,
        BasePrice: 100,
        Discount: 0.3,
        description: "This is a test meal created by Cypress using API",
        imgPath: "imgs/andres-rodriguez-So4EHYeShUM-unsplash.jpg"
    },
    {
        name: "CypressTestMeal2",
        isFeatured: true,
        BasePrice: 150,
        Discount: 0.2,
        description: "This is another test meal created by Cypress using API",
        imgPath: "imgs/cera-muV_8wy4mzw-unsplash.jpg"
    },
    {
        name: "CypressTestMeal3",
        isFeatured: false,
        BasePrice: 120,
        Discount: 0.1,
        description: "This is yet another test meal created by Cypress using API",
        imgPath: "imgs/debbie-tea-LO7rNP0LRro-unsplash.jpg"
    },
    {
        name: "CypressTestMeal4",
        isFeatured: true,
        BasePrice: 200,
        Discount: 0.5,
        description: "This is a fourth test meal created by Cypress using API",
        imgPath: "imgs/orijit-chatterjee-wEBg_pYtynw-unsplash.jpg"
    },
    {
        name: "CypressTestMeal5",
        isFeatured: false,
        BasePrice: 180,
        Discount: 0.25,
        description: "This is a fifth test meal created by Cypress using API",
        imgPath: "imgs/sj-GZe_M6TUJ_k-unsplash.jpg"
    },
    {
        name: "CypressTestMeal6",
        isFeatured: true,
        BasePrice: 220,
        Discount: 0.15,
        description: "This is a sixth test meal created by Cypress using API",
        imgPath: "imgs/xiyuan-du-LUfsqd0GgKg-unsplash.jpg"
    }
]


export const seedMealsViaAPI = (meals: IMealCreation[] = defaultMeals) => {
    meals.forEach(meal => {
        createMealViaAPI(meal);
    });
};
