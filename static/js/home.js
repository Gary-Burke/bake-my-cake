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
}

// Wait for the DOM to load before executing functions
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("field-shape").addEventListener("change", function (e) {
        if (e.target.value === "round") {
            const labelSmall = document.querySelector('label[for="size-small"]');
            labelSmall.textContent = cake.roundSmall;
            const labelMedium = document.querySelector('label[for="size-medium"]');
            labelMedium.textContent = cake.roundMedium;
            const labelLarge = document.querySelector('label[for="size-large"]');
            labelLarge.textContent = cake.roundLarge;
        } else {
            if (e.target.value === "square") {
                const labelSmall = document.querySelector('label[for="size-small"]');
                labelSmall.textContent = cake.squareSmall;
                const labelMedium = document.querySelector('label[for="size-medium"]');
                labelMedium.textContent = cake.squareMedium;
                const labelLarge = document.querySelector('label[for="size-large"]');
                labelLarge.textContent = cake.squareLarge;
            } else {
                const labelSmall = document.querySelector('label[for="size-small"]');
                labelSmall.textContent = cake.rectangleSmall;
                const labelMedium = document.querySelector('label[for="size-medium"]');
                labelMedium.textContent = cake.rectangleMedium;
                const labelLarge = document.querySelector('label[for="size-large"]');
                labelLarge.textContent = cake.rectangleLarge;
            }
        }
    });

});