
    // أذكار متغيرة في الأعلى
    const adhkar = ["سبحان الله", "الحمد لله", "لا إله إلا الله", "الله أكبر", "أستغفر الله", "لا حول ولا قوة إلا بالله"];
    let dhikrIndex = 0;
    const dhikrText = document.getElementById("dhikrText");

    function changeDhikr() {
      dhikrText.style.opacity = '0';
      dhikrText.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        dhikrIndex = (dhikrIndex + 1) % adhkar.length;
        dhikrText.textContent = adhkar[dhikrIndex];
        dhikrText.style.opacity = '1';
        dhikrText.style.transform = 'translateY(0)';
      }, 500);
    }

    setInterval(changeDhikr, 3500);

    // نصوص التأمل المتغيرة بتأثير الكتابة
    const verses = [
    "الرزق", "الصبر", "الرحمة", "البركة", "البلاء", "التوبة", 
    "الشكر", "القلب", "الإيمان", "العمل الصالح", "التقوى", 
    "الهدى", "السكينة", "النجاة", "الحزن", "الفرج", "الصلاح",
    "النجاح", "الذكر", "العلم", "العمل", "النية", "الصدق", 
    "الوفاء", "العدل", "الإحسان", "الغفران", "الرضا",
    "أسماء الله الحسنى", "الصحبة", "الدعاء", "الصدقة", "الشيطان"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typingText");

function typeEffect() {
    const current = verses[textIndex];
    
    if (!isDeleting) {
        typingText.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2500);
            return;
        }
        setTimeout(typeEffect, 120);
    } else {
        typingText.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % verses.length;
            setTimeout(typeEffect, 300);
            return;
        }
        setTimeout(typeEffect, 80);
    }
}

// Initialize typing effect
function initTypingEffect() {
    if (typingText) {
        setTimeout(typeEffect, 700);
    }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
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
}

// Initialize all effects when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    initTypingEffect();
    initSmoothScroll();
});