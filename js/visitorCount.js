async function updateVisitorCount() {
    try {
        const ipResponse = await fetch('http://ip-api.com/json/');
        const ipData = await ipResponse.json();
        const ip = ipData.query;

        const response = await fetch(`https://api.countapi.xyz/hit/your-namespace/${ip}`);
        const data = await response.json();
        document.getElementById('count').textContent = data.value;

        // Increment the count for each refresh
        const refreshCount = localStorage.getItem('refreshCount') || 0;
        localStorage.setItem('refreshCount', parseInt(refreshCount) + 1);
        document.getElementById('count').textContent = parseInt(data.value) + parseInt(refreshCount);
    } catch (error) {
        console.error('Error updating visitor count:', error);
    }
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);
