document.getElementById('yes').addEventListener('click', function() {
    // GIF'i rastgele bir konumda yerleştir
    var gif = document.getElementById('celebration-gif');
    var x = Math.random() * (window.innerWidth - gif.offsetWidth);
    var y = Math.random() * (window.innerHeight - gif.offsetHeight);
    
    // GIF'in boyutunu küçült
    gif.style.width = '150px';  // Boyutlandırma
    gif.style.height = 'auto';  // Oranı koru

    // GIF'in evet butonunun üstüne gelmemesini sağla
    var yesButton = document.getElementById('yes');
    while (x < yesButton.offsetLeft + yesButton.offsetWidth && y < yesButton.offsetTop + yesButton.offsetHeight) {
        x = Math.random() * (window.innerWidth - gif.offsetWidth);
        y = Math.random() * (window.innerHeight - gif.offsetHeight);
    }
    
    gif.style.position = 'absolute';
    gif.style.left = x + 'px';
    gif.style.top = y + 'px';
    
    // GIF'i göster
    gif.style.display = 'block';
    
    // Ses çal
    var sound = document.getElementById('celebration-sound');
    sound.play();
});

document.getElementById('no').addEventListener('click', function() {
    var button = document.getElementById('no');
    var x = Math.random() * (window.innerWidth - button.offsetWidth);
    var y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
});