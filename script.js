// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Form Submission Handler
// ========================================
const orderForm = document.getElementById('orderForm');
const formSuccess = document.getElementById('formSuccess');

if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            customerName: document.getElementById('customerName').value,
            phone: document.getElementById('phone').value,
            apartment: document.getElementById('apartment').value,
            product: document.getElementById('product').value,
            notes: document.getElementById('notes').value
        };
        
        // Log to console (in production, this would send to a server)
        console.log('Đơn hàng đã được gửi:', formData);
        
        // Show success message
        orderForm.style.display = 'none';
        formSuccess.classList.add('active');
        
        // Optional: Reset form after 5 seconds and show it again
        setTimeout(() => {
            orderForm.reset();
            orderForm.style.display = 'block';
            formSuccess.classList.remove('active');
        }, 5000);
        
        // Alert for user feedback
        alert('Đơn hàng đã được gửi – chúng tôi sẽ liên hệ sớm!');
    });
}

// ========================================
// Form Validation Enhancement
// ========================================
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        // Remove non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
        
        // Limit to 10-11 digits
        if (this.value.length > 11) {
            this.value = this.value.slice(0, 11);
        }
    });
}

// ========================================
// Scroll Animation Observer
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .usp-card, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ========================================
// Product Card Hover Effect Enhancement
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ========================================
// Scroll Progress Indicator (Optional)
// ========================================
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    }
});

// ========================================
// Performance: Lazy Loading Images
// ========================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🥬 Rau Củ Tươi Mỗi Ngày', 'color: #4CAF50; font-size: 24px; font-weight: bold;');
console.log('%cWebsite được xây dựng bởi Antigravity AI', 'color: #666; font-size: 12px;');
console.log('%cĐể biết thêm thông tin, vui lòng liên hệ: 0901 234 567', 'color: #666; font-size: 12px;');
