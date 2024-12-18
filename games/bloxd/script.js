function copyGameLink() {
    const gameLink = "https://deadshot.io"; // Link to the game (or any specific invite link)
    navigator.clipboard.writeText(gameLink).then(() => {
        alert("Game invite link copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy link. Please try again.");
    });
}
