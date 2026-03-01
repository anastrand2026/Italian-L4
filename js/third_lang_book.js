document.addEventListener('DOMContentLoaded', function() {
    // Находим все аудио элементы на странице
    const audioElements = document.querySelectorAll('audio');
    
    // Для каждого аудио элемента добавляем обработчик
    audioElements.forEach(audio => {
        audio.addEventListener('play', function() {
            // Когда одно аудио начинает играть, останавливаем все остальные
            audioElements.forEach(otherAudio => {
                if (otherAudio !== audio && !otherAudio.paused) {
                    otherAudio.pause();
                }
            });
        });
    });
});