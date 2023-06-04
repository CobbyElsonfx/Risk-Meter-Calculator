
<div align="center">
  <img src="./src/assets/cobbyelsonfx-high-resolution-color-logo(1).png" alt="logo" width="170"  height="auto"/>
</div>



# Risk Meter

This project is a Risck Meter that allows users to check/uncheck multiple checkboxes and displays the result on a linear meter. It was developed as an exercise for an assignment by Girl Talk Power Company.

## Description

The Risk Meter  is a React-based user interface component that renders a list of checkboxes based on the provided data. Users can check/uncheck the checkboxes, and the app displays the count of checked checkboxes on a linear meter. The meter indicates the progress based on the number of checkboxes checked. The component also allows users to enter additional information for each checkbox.



## Screenshot
[](./src/assets/Screenshot%202023-06-04%20at%2011.16.03%20AM.png)
## Architecture

The architecture of the Checkbox Component project follows a simple React component-based structure. The main components used are:

- `CheckboxComponent`: The main component that renders the Checkbox Component UI.
- `Card`: A component for rendering each checkbox item with additional information.
- `Checkbox`: A component for rendering the checkbox input.
- `Typography`: A component for rendering text elements.

## Data Flow

The data flow in the Checkbox Component project follows these steps:

1. The `CheckboxComponent` component initializes the state for the number of checked checkboxes (`checkedCount`) using the `useState` hook.
2. When a checkbox is checked or unchecked, the `handleCheckboxChange` function updates the `checkedCount` state accordingly.
3. The `checkedCount` is used to calculate the position of the needle on the linear meter.
4. The calculated `needlePosition` is applied as inline styles to the needle image element.
5. The list of checkboxes is rendered dynamically using the `eachCheckboxContents` array.
6. Additional information, such as labels, percentages, and placeholders, is extracted from each checkbox item and displayed in the UI.
7. Users can enter additional information in the input fields for each checkbox.

## Usage

To use the Checkbox Component in your project, follow these steps:

1. Install the necessary dependencies using a package manager like npm or yarn.
2. Import the required components and assets from the appropriate locations.
3. Initialize the necessary state variables using the `useState` hook.
4. Render the `CheckboxComponent` component in your application.
5. Customize the UI and styling according to your needs by modifying the existing classes or adding new ones.
6. Provide the required data for rendering the checkboxes by modifying the `eachCheckboxContents` array.
7. Run your application and interact with the checkboxes to see the changes in the UI and meter.

Feel free to customize the Checkbox Component to suit your specific requirements. Happy coding!
