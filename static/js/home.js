let cake = {
    roundSmall: "Small Ø15cm (serves 6-8)",
    roundMedium: "Medium Ø20cm (serves 8-10)",
    roundLarge: "Large Ø25cm (serves 10-15)",
    squareSmall: "Small 15 x 15cm (serves 6-8)",
    squareMedium: "Medium 20 x 20cm (serves 8-10)",
    squareLarge: "Large 25 x 25cm (serves 10-15)",
    rectangleSmall: "Small 20 x 15cm (serves 6-8)",
    rectangleMedium: "Medium 25 x 20cm (serves 8-10)",
    rectangleLarge: "Large 30 x 25cm (serves 10-15)",
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