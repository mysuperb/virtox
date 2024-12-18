// Function to start the RGB color animation
function startColorAnimation(elementId) {
    const element = document.getElementById(elementId);
    let r = 255, g = 0, b = 0; // Initial RGB values
    let colorDirection = 'increaseGreen';

    setInterval(() => {
        // Update RGB values dynamically
        if (colorDirection === 'increaseGreen') {
            g += 51;
            if (g >= 255) colorDirection = 'decreaseRed';
        } else if (colorDirection === 'decreaseRed') {
            r -= 51;
            if (r <= 0) colorDirection = 'increaseBlue';
        } else if (colorDirection === 'increaseBlue') {
            b += 51;
            if (b >= 255) colorDirection = 'decreaseGreen';
        } else if (colorDirection === 'decreaseGreen') {
            g -= 51;
            if (g <= 0) colorDirection = 'increaseRed';
        } else if (colorDirection === 'increaseRed') {
            r +=// Function to cycle through 3 specific colors
            function startColorAnimation(elementId) {
                const element = document.getElementById(elementId);
            
                // Define the 3 colors
                const colors = ["red", "green", "blue"];
                let colorIndex = 0;
            
                // Change color every 1 second
                setInterval(() => {
                    element.style.color = colors[colorIndex]; // Apply the current color
                    colorIndex = (colorIndex + 1) % colors.length; // Cycle to the next color
                }, 1000); // Change every 1 second
            }
            
            // Start the color animation for the "Games" link
            startColorAnimation("gamesLink");
             51;
            if (r >= 255) colorDirection = 'reset';
        } else if (colorDirection === 'reset') {
            r = 255; g = 0; b = 0;
            colorDirection = 'increaseGreen';
        }

        // Apply the updated RGB color to the element
        element.style.color = `rgb(${r}, ${g}, ${b})`;
    }, 1000); // Set interval to 1 second (1000 milliseconds)
}

// Start the color animation for the "Games" link
startColorAnimation("gamesLink");
