document.getElementById('evet').addEventListener('click', function() {
    showHeartAnimation();
});
document.getElementById('hayir').addEventListener('click', function() {
    document.getElementById('question').innerText = "Beni seviyor musun?";
    document.getElementById('heartCanvas').style.display = 'none';
});

function showHeartAnimation() {
    let canvas = document.getElementById('heartCanvas');
    let ctx = canvas.getContext('2d');
    canvas.style.display = 'block';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let heartSize = 10;
    let interval = setInterval(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(100, 50, heartSize, 0, Math.PI * 2, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        heartSize += 2;
        if (heartSize > 50) {
            clearInterval(interval);
        }
    }, 100);
}
