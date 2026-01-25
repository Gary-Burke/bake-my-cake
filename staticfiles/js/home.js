let cake = {
    roundSmall: "Small Ø15cm",
    roundMedium: "Medium Ø20cm",
    roundLarge: "Large Ø25cm",
    squareSmall: "Small 15 x 15cm",
    squareMedium: "Medium 20 x 20cm",
    squareLarge: "Large 25 x 25cm",
    rectangleSmall: "Small 20 x 15cm",
    rectangleMedium: "Medium 25 x 20cm",
    rectangleLarge: "Large 30 x 25cm",
};

// Wait for the DOM to load before executing functions
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("field-shape").addEventListener("change", function (e) {
        if (e.target.value === "round") {
            document.querySelector('label[for="size-small"]').textContent = cake.roundSmall;
            document.querySelector('label[for="size-medium"]').textContent = cake.roundMedium;
            document.querySelector('label[for="size-large"]').textContent = cake.roundLarge;
        } else {
            if (e.target.value === "square") {
                document.querySelector('label[for="size-small"]').textContent = cake.squareSmall;
                document.querySelector('label[for="size-medium"]').textContent = cake.squareMedium;
                document.querySelector('label[for="size-large"]').textContent = cake.squareLarge;
            } else {
                document.querySelector('label[for="size-small"]').textContent = cake.rectangleSmall;
                document.querySelector('label[for="size-medium"]').textContent = cake.rectangleMedium;
                document.querySelector('label[for="size-large"]').textContent = cake.rectangleLarge;
            }
        }
    });

});