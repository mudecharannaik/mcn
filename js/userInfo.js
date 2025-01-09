async function fetchUserInfo() {
    try {
        const response = await fetch('http://ip-api.com/json/');
        const data = await response.json();
        document.getElementById('ip-address').textContent = data.query;
        document.getElementById('dns').textContent = data.isp;
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchUserInfo);
