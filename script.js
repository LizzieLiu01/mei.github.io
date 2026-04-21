// 语言切换
document.getElementById('lang-toggle').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    
    if (newLang === 'en') {
        // 切换到英文
        document.querySelector('.intro-bio').innerHTML = 
            'AI engineer with 7 years of experience, focused on LLMs and AI systems.<br>' +
            'Believe technology should be simple and elegant, making complex things easy.';
        document.querySelector('.section:nth-of-type(1) .about-text p:nth-child(1)').textContent = 
            'I have been working in AI for 7 years, from computer vision to large language models. This journey taught me that good technology is not about complexity, but about solving real problems.';
        document.querySelector('.section:nth-of-type(1) .about-text p:nth-child(2)').textContent = 
            'I have contributed to open-source projects and published papers at top conferences. But what I am most proud of is seeing my work actually help real users.';
        document.querySelector('.section:nth-of-type(1) .about-text p:nth-child(3)').textContent = 
            'Outside of work, I enjoy hiking and photography. I believe great ideas often come from time away from the code.';
        this.textContent = '中文';
    } else {
        // 切换到中文
        location.reload();
    }
    
    document.documentElement.lang = newLang;
});

// 移动端菜单切换
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 点击导航链接后关闭移动端菜单
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});
