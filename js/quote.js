async function fetchRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.querySelector('.quote-text').textContent = `"${data.content}"`;
        document.querySelector('.quote-author').textContent = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchRandomQuote);
