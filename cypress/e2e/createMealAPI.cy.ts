import { loginViaAPI } from "../utils/api/loginViaAPI";
import { createMealViaAPI } from "../utils/api/createMealViaAPI";
describe("Create Meal API", () => {
    beforeEach(() => loginViaAPI());

    it("Create a meal in the RamenHouse content management system using API", () => {
        createMealViaAPI({
            name: "MealCreateViaAPIRequest",
            isFeatured: false,
            BasePrice: 100,
            Discount: 0.3,
            description: "This is a test meal created by Cypress using API",
        }, "imgs/under_construction.jpg");
    });
});
