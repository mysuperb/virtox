// Load saved theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    // Sync theme toggle appearance
    const toggle = document.querySelector('.theme-toggle');
    toggle.setAttribute('data-theme', savedTheme);
});

// Toggle Theme
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply new theme to body
    document.body.setAttribute('data-theme', newTheme);

    // Save theme preference
    localStorage.setItem('theme', newTheme);

    // Update toggle appearance
    const toggle = document.querySelector('.theme-toggle');
    toggle.setAttribute('data-theme', newTheme);
}

// Toggle "Read More" Functionality
function toggleReadMore() {
    const blogContent = document.getElementById('blog-content');
    blogContent.classList.toggle('expanded');
    const readMoreLink = document.querySelector('.read-more');
    readMoreLink.textContent = blogContent.classList.contains('expanded') ? 'Show Less' : 'Read More';
}
