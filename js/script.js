function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleTimeString('ru-RU', { hour12: false });
}
setInterval(updateTime, 1000);
updateTime();
