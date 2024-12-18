<script>
    // Function to copy text provided as an argument
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Link copied: ' + text);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy link. Please try manually.');
        });
    }

    // Example: Trigger this function from iframe using postMessage
    window.addEventListener('message', (event) => {
        if (event.data.command === "copy") {
            copyToClipboard(event.data.text);
        }
    });
</script>
