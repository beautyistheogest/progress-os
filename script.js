async function getJoke() {
    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const data = await response.json();

        document.getElementById("setup").textContent = data.setup;
        document.getElementById("punchline").textContent = data.punchline;

    } catch (error) {
        console.log("Error:", error.message);
    }
}