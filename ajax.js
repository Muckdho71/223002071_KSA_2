document.querySelector("#postBtn").addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    // Open a POST request to the given API endpoint
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    // Set the request header for JSON data
    xhr.setRequestHeader("Content-Type", "application/json");

    // Define the onload function to handle the response
    xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) { // Check for Success or Created status
            console.log("Data successfully sent!");
            console.log("Response:", xhr.responseText);

            document.querySelector("#output").innerHTML = "<h3>Data successfully sent!</h3>";

            // Parse the response and display the data
            let sentData = JSON.parse(xhr.responseText);
            displaySentData(sentData);
        } else {
            console.error("Failed to send data. Status:", xhr.status);
            document.querySelector("#output").innerHTML = "Failed to send data.";
        }
    };

    // Handle network errors
    xhr.onerror = () => {
        console.error("Network error occurred.");
        document.querySelector("#output").innerHTML = "Network error occurred.";
    };

    // Create the data object to be sent
    let dataToSend = {
        dept: "CSE",
        teacher: "Feroza Naznin",
        course: "Web Programming",
        topic: "KSA-2"
    };

    // Convert the data object to JSON string and send the request
    xhr.send(JSON.stringify(dataToSend));
});

// Function to display the sent data
function displaySentData(data) {
    let out = "<h2>Data Sent:</h2>";
    out += "<p><strong>Department:</strong> " + data.dept + "</p>";
    out += "<p><strong>Teacher:</strong> " + data.teacher + "</p>";
    out += "<p><strong>Course:</strong> " + data.course + "</p>";
    out += "<p><strong>Topic:</strong> " + data.topic + "</p>";

    document.querySelector("#output").innerHTML += out;
}
