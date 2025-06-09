import { deleteAllMealsViaAPI } from "../utils/api/deleteAllMealsViaAPI";
describe("Delete All Meals via API", () => {
    it("should delete all meals", () => {
        //Currently the endpoin is only available in local environment, not in production
        //if you want to test this, you need to run the local environment
        deleteAllMealsViaAPI()
    });
});