let notificationCount = 0;

document.getElementById('notificationTrigger').addEventListener('click', function() {
    notificationCount++;

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = `Notification ${notificationCount}`;
    
    // Add the notification to the notifications div
    document.getElementById('notifications').appendChild(notification);
    
    // Show the notification
    setTimeout(() => {
        notification.style.opacity = '1'; // ظاهر شدن نوتیفیکیشن
    }, 1); // کمی تأخیر برای نمایش افکت

    // Remove the notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0'; // ناپدید شدن نوتیفیکیشن
        // حذف نوتیفیکیشن از DOM بعد از ناپدید شدن
        setTimeout(() => {
            notification.remove();
        }, 300); // همزمان با افکت ناپدید شدن
    }, 3000);
});