// التحقق من صلاحيات المستخدم
function checkPermissions() {
    const userRole = localStorage.getItem('userRole') || 'user';
    const allowedPages = {
        'admin': ['dashboard.html', 'users.html', 'analytics.html', 'offers.html', 'serves.html', 'blog.html', 'about.html', 'erp.html', 'Service-request.html', 'contact.html'],
        'editor': ['dashboard.html', 'blog.html', 'offers.html', 'serves.html'],
        'user': ['dashboard.html', 'Service-request.html', 'contact.html']
    };
    
    const currentPage = window.location.pathname.split('/').pop();
    
    if (!allowedPages[userRole].includes(currentPage) && currentPage !== 'login.html') {
        window.location.href = 'dashboard.html';
        return false;
    }
    
    return true;
}

// إخفاء عناصر بناءً على الصلاحيات
function updateUIForRole() {
    const userRole = localStorage.getItem('userRole') || 'user';
    
    // إخفاء عناصر غير مسموحة
    if (userRole !== 'admin') {
        document.querySelectorAll('.admin-only').forEach(el => {
            el.style.display = 'none';
        });
    }
    
    if (userRole !== 'admin' && userRole !== 'editor') {
        document.querySelectorAll('.editor-only').forEach(el => {
            el.style.display = 'none';
        });
    }
}