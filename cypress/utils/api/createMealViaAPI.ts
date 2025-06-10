import { constructFormData } from "../constructFormData";

export interface IMealCreation {
    name: string;
    isFeatured?: boolean;
    BasePrice: number;
    Discount?: number;
    description?: string;
    imgPath?: string;
}

const defaultMealCreation: IMealCreation = {
    name: "MealCreateViaAPIRequest",
    isFeatured: false,
    BasePrice: 100,
    Discount: 1,
    description: "This is a test meal created by Cypress using API",
    imgPath: "imgs/under_construction.jpg"
};


export function createMealViaAPI(mealRequest: IMealCreation) {
    const mergedMealRequest = { ...defaultMealCreation, ...mealRequest };

    const url = Cypress.env().baseUrl;
    cy.fixture(mergedMealRequest.imgPath, "binary").then((imgBlobString) => {
        const imgName = mergedMealRequest.imgPath.split("/").pop()
        const formData = constructFormData(
            {
                name: mergedMealRequest.name,
                isFeatured: mergedMealRequest.isFeatured,
                BasePrice: mergedMealRequest.BasePrice,
                Discount: mergedMealRequest.Discount,
                description: mergedMealRequest.description,
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

