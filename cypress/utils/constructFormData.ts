export function constructFormData(data: Record<string, any>, imgName?: string, imgBlobString?: string): FormData {

    const formData = new FormData();
    if (imgBlobString) {

        const blob = Cypress.Blob.binaryStringToBlob(imgBlobString, "img/png");
        formData.append("imgFile", blob, imgName || "image.png");
    }
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
    });
    return formData;
}
