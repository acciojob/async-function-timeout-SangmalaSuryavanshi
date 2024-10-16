//your JS code here. If required.
document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const text = document.getElementById('text').value; // Get the user-provided text
    const delay = parseInt(document.getElementById('delay').value, 10); // Get the delay and convert to integer

    // Call the async function to display the text after the delay
    await displayTextAfterDelay(text, delay);
});

async function displayTextAfterDelay(text, delay) {
    // Introduce a delay using a Promise
    await new Promise(resolve => setTimeout(resolve, delay));

    // Display the text in the output div
    document.getElementById('output').textContent = text;
}
