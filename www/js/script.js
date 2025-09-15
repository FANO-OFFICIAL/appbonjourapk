document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is ready
    initialize();
}

function initialize() {
    const bonjourButton = document.getElementById('bonjourButton');
    const messageDiv = document.getElementById('message');

    bonjourButton.addEventListener('click', () => {
        messageDiv.textContent = 'Bonjour';
    });
}

// Fallback for when not running in Cordova
if (typeof window.cordova === 'undefined') {
    document.addEventListener('DOMContentLoaded', initialize);
}
