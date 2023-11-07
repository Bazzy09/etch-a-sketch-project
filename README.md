# Etch-A-Sketch Project

This ReadMe provides an overview of the "Etch-A-Sketch" project, explaining the HTML structure, CSS styling, and JavaScript functionality.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [HTML Structure](#html-structure)
- [CSS Styling](#css-styling)
- [JavaScript Functionality](#javascript-functionality)
- [Issues and Resolutions](#issues-and-resolutions)

## Introduction

The "Etch-A-Sketch" project is a web-based drawing application that allows users to draw and interact with a grid of squares. Users can choose between drawing in black or random colors, change the grid size, and reset the board.

## Usage

To use this project:

1. Download the provided HTML file, CSS file, and JavaScript file.

2. Ensure that the external Bootstrap stylesheet is correctly linked for styling.

3. Open the HTML file in a web browser to access the Etch-A-Sketch application.

## HTML Structure

The HTML file (`index.html`) contains the basic structure of the project:

- It sets up the document structure, including the title and links to the custom CSS file and the Bootstrap CSS for styling.

- It defines the header, buttons for selecting colors, and the grid container.

- It includes buttons for drawing in black, random colors, and resetting the board.

- The JavaScript file (`script.js`) is linked at the end of the HTML file for functionality.

## CSS Styling

The custom CSS file (`style.css`) provides styling for the project:

- It styles the body, header, buttons, and grid container to create a visually appealing and functional layout.

- The CSS ensures that elements are centered on the page and provides a responsive design.

## JavaScript Functionality

The JavaScript file (`script.js`) adds interactivity and functionality to the Etch-A-Sketch project:

- It dynamically creates a grid of squares within the grid container based on the selected size.

- Users can choose to draw in black or random colors, and their choice is maintained throughout their interaction with the grid.

- The application allows users to click on the "Select" button to choose the size of the grid.

- The "Reset" button clears the drawing board, allowing users to start over.

- The project also informs users whether they are allowed to draw based on button clicks and provides messages for selecting the grid size.

## Issues and Resolutions

The project had two main issues:

1. **Random Color**: The "Random" color option was not working because the color choice was being converted to lowercase. This was resolved by ensuring that the comparison for "Random" is in uppercase.

2. **Reset Button**: The reset button was not clearing the board because there was a case sensitivity issue in the function name. The HTML was updated to call the correct function with the uppercase "B."

With these issues resolved, the project now work as intended, allowing users to draw in either black or random colors and reset the drawing board when needed.