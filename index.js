function updateDateTime(){
    const currentDateTime = new Date();
    const utcDateTime = currentDateTime.toUTCString();
    const dayOfWeek = currentDateTime.toLocaleDateString();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcDateTime;
    document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
}
window.onload = updateDateTime;