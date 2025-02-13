
function searchRelationship() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    if (searchInput.includes('how long we\'ve been together') || searchInput.includes('how long have we been together')) {
        document.getElementById('search-page').classList.add('hidden');
        document.getElementById('timer-page').classList.remove('hidden');
    } else {
        alert('❌ Incorrect search. Try again! Write what you see there haw');
    }
}

function nextPage() {
    document.getElementById('timer-page').classList.add('hidden');
    document.getElementById('photo-page').classList.remove('hidden');
}

function showNote() {
    document.getElementById('photo-page').classList.add('hidden');
    document.getElementById('note-page').classList.remove('hidden');
}

// Ensure music plays throughout navigation
let backgroundMusic = new Audio('background.mp3');
backgroundMusic.loop = true;
backgroundMusic.play();
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});



        function startTimer(startDate) {
            const timerElement = document.getElementById('timer');
            function updateTimer() {
                const now = new Date();
                const diff = now - startDate;
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
            setInterval(updateTimer, 1000);
            updateTimer();
        }

        document.addEventListener('DOMContentLoaded', () => {
            const relationshipStartDate = new Date('2023-03-13T00:00:00');
            startTimer(relationshipStartDate);
        });

        function checkCode() {
            const code = document.getElementById('code').value;
            const error = document.getElementById('error');
            if (code === '1303') {
                document.getElementById('login-page').classList.add('hidden');
                document.getElementById('search-page').classList.remove('hidden');
            } else {
                error.textContent = "❌ Uyabheda ke manje, Hint: Our anniversary day.";
                setTimeout(() => {
                    error.textContent = "";
                }, 3000);
            }
        }
