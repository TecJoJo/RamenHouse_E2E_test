import { loginViaAPI } from "../utils/api/loginViaAPI";
import { createMealViaAPI } from "../utils/api/createMealViaAPI";
describe("Create Meal API", () => {
    beforeEach(() => loginViaAPI());

    it("Create a meal in the RamenHouse content management system using API", () => {
        createMealViaAPI();
    });
});
