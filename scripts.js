// Script untuk menambahkan fungsionalitas jika diperlukan di masa depan
document.addEventListener('DOMContentLoaded', () => {
    console.log('Gallery loaded');
});

// script

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.options button');
    const images = document.querySelectorAll('.gallery img');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            images.forEach(img => {
                if (img.getAttribute('data-category') === category) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });

   
    const defaultCategory = 'wedding';
    images.forEach(img => {
        if (img.getAttribute('data-category') === defaultCategory) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
});