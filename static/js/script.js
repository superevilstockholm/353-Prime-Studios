document.addEventListener('keydown', function(event) {
    // Check if the Ctrl key is pressed
    if (event.ctrlKey) {
        // Check which key is pressed
        switch (event.key) {
            case 'a': // Ctrl + A
                alert('Ctrl + A pressed');
                break;
            case 'b': // Ctrl + B
                alert('Ctrl + B pressed');
                break;
            case 'I': // Ctrl + Shift + I
                if (event.shiftKey) {
                    event.preventDefault(); // prevent the default action (e.g., open Developer Tools)
                    alert('Ctrl + Shift + I pressed, cannot inspect element!');
                    break;
                }
            default:
                break;
        }
    }
    if (event.key === 'F12') {
        event.preventDefault(); // prevent the default action (e.g., open Developer Tools)
        alert('F12 pressed, cannot inspect element!');
    }
});
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Menonaktifkan menu konteks klik kanan
    alert('Right click disabled on this page');
});