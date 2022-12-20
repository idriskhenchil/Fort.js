export default class Fort {
    /**
     * Sets up Fort.js
     * @param _target Target form element
     */
    constructor(_target) {
        this.target = _target;
        this.progress = 0;

        // Create progress bar element
        this.progressBar = document.createElement('div');
        this.progressBar.setAttribute('class', 'fort-progress');
        document.body.append(this.progressBar);

        // Get all elements from form
        this.form = document.body.querySelector(this.target)

        // Empty and complete form array for comparison
        this.formElements = []
        this.emptyElements = []

        // Add CSS
        const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
        addCSS(".fort-progress{ position: fixed; z-index: 1031; top: 0; left: 0; height: 5px; width: 0%; transition: all 1s; overflow: hidden;}")
    }

    /**
     * Checks overall completion of fields in form
     * Updates progress & bar width
     */
    checkCompletion() {
        for (let elements of this.form) {
            // Check for fort-ignore tag - true/false?
            let ignore = elements['className']?.search("fort-ignore") === -1

            // Ignore submit and button element
            if (elements['type'] !== 'submit' && elements['type'] !== 'button' && ignore) {
                // Add event listener to elements
                elements.addEventListener('input', () => {
                    // Reset emptyElements array
                    this.emptyElements = []

                    // Check length of element in array
                    for (let element in this.formElements) {
                        // If length is 0, add to emptyElements array
                        if (this.formElements[element].value.length === 0) {
                            this.emptyElements.push(this.formElements[element])
                        }
                    }

                    // Update progress & bar width
                    this.progress = 100 - (this.emptyElements.length / this.formElements.length * 100)
                    this.progressBar.style.width = this.progress + '%'
                })
                // Push completed elements in array
                this.formElements.push(elements)
            }
        }
    }

    /**
     * A solid colored progress bar
     * @param color Takes one hex color
     */
    solid(color) {
        // Call to check completion of form
        this.checkCompletion();

        // Update colors
        this.progressBar.style.background = color;
    }

    /**
     * A gradient based progress bar
     * @param colors Takes two hex colors
     */
    gradient(...colors) {
        // Call to check completion of form
        this.checkCompletion();

        // Check length of colors array provided
        if (colors.length === 2) {
            // Get first and second color
            let firstColor = colors[0];
            let secondColor = colors[1];

            // Update gradient for progress bar
            this.progressBar.style.background = `linear-gradient(to right, ${firstColor} 0, ${secondColor} 100%)`;
        } else {
            console.log("Error: Invalid amount of colors provided. Gradient only takes 2")
        }
    }
}