// Wrap everything in an IIFE to avoid polluting the global namespace
(function() {
    'use strict';

    // DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize or configure scripts here

        // Example: Simple greeting function
        function greet(message) {
            console.log(message);
        }

        greet('Hello, welcome to my project!');
    });

    // Add additional functions and logic below
})();
