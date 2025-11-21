document.addEventListener('DOMContentLoaded', () => {
    // 1. ගොනු අර්ථ දැක්වීම (Define Elements)
    const audio = document.getElementById('background-music');
    const startPage = document.getElementById('start-page');
    const mainPage = document.getElementById('main-page');
    const memoryPage = document.getElementById('memory-page');
    const clickSurpriseBtn = document.getElementById('click-surprise-btn');
    const viewMemoryBtn = document.getElementById('view-memory-btn');
    const getBalloonsBtn = document.getElementById('get-balloons-btn');
    const backBtn = document.getElementById('back-btn');
    const giftCover = document.getElementById('gift-cover');
    const girl = document.querySelector('.girl-surprise');

    // 2. Click Surprise Button (Animation සහ Music Play)
    clickSurpriseBtn.addEventListener('click', () => {
        
        // 1. බොත්තම සඟවා Animation පටන් ගැනීම
        clickSurpriseBtn.style.display = 'none';

        // 2. Cover එක ඉවත් කිරීමේ Animation
        giftCover.classList.add('lifted');

        // 3. දැරිය ඉහළට එන Smooth Animation
        girl.classList.remove('hidden'); 
        setTimeout(() => {
             girl.classList.add('show');
        }, 50); 

        // 4. Animation එක අවසන් වූ පසු Main Page එකට මාරු වීම
        // Animation duration එක (1.5s) අනුව ප්‍රමාද කාලය සකසන්න.
        setTimeout(() => {
            // Music Start (පළමු user interaction එකෙන් පසු audio play වේ)
            audio.play().catch(error => {
                console.warn("Audio play failed, user may need to interact again.");
            });
            
            // Page Transition: Start -> Main
            startPage.style.display = 'none'; 
            mainPage.classList.add('active');
            
        }, 1500); // 1.5 seconds delay
    });

    // 3. View Memory Button (Main Page -> Memory Page)
    viewMemoryBtn.addEventListener('click', () => {
        mainPage.classList.remove('active');
        memoryPage.classList.add('active');
    });

    // 4. Back Button (Memory Page -> Main Page)
    backBtn.addEventListener('click', () => {
        memoryPage.classList.remove('active');
        mainPage.classList.add('active');
    });

    // 5. Balloon Animation (Get Balloons Button)
    getBalloonsBtn.addEventListener('click', () => {
        const balloonContainer = document.getElementById('balloon-container');
        
        // Balloons 15 ක් නිර්මාණය කරයි
        for (let i = 0; i < 15; i++) {
            const balloon = document.createElement('img');
            // media/balloon.jpg රූපය මෙතැනින් යොදයි
            balloon.src = 'media/balloon.jpg'; 
            balloon.className = 'balloon';

            // Random position and timing for natural effect
            const startPosition = Math.random() * 90; // 0% to 90%
            balloon.style.left = `${startPosition}vw`;

            const duration = Math.random() * 8 + 7; // 7s to 15s duration
            balloon.style.animationDuration = `${duration}s`;

            const delay = Math.random() * 5; // Up to 5s delay
            balloon.style.animationDelay = `${delay}s`;

            balloonContainer.appendChild(balloon);

            // Animation එක අවසන් වූ පසු balloon එක ඉවත් කිරීම
            balloon.addEventListener('animationend', () => {
                balloon.remove();
            });
        }
    });
});