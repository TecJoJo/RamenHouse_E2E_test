import { constructFormData } from "../constructFormData";

interface MealCreateDTO {
    name: string;
    isFeatured: boolean;
    BasePrice: number;
    Discount: number;
    description: string;
}
export function createMealViaAPI(mealRequest: MealCreateDTO, imgPath: string = "imgs/under_construction.jpg") {

    const url = Cypress.env().baseUrl;
    cy.fixture(imgPath, "binary").then((imgBlobString) => {
        const imgName = imgPath.split("/").pop()
        const formData = constructFormData(
            {
                name: mealRequest.name,
                isFeatured: mealRequest.isFeatured,
                BasePrice: mealRequest.BasePrice,
                Discount: mealRequest.Discount,
                description: mealRequest.description,
            },
            imgName,
            imgBlobString
        );
        cy.request({
            method: "POST",
            url: `${url}admin\/mealcreate`,
            headers: {
                accept: "application/json",
                "Content-Type": "multipart/form-data"

            },
            body: formData
        }).then((postResponse) => {
            expect(postResponse.status).to.eq(200);
        });
    })





}

