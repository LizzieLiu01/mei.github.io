// 翻译数据
const translations = {
    en: {
        "nav.about": "About",
        "nav.expertise": "Expertise",
        "nav.works": "Works",
        "nav.contact": "Contact",
        "hero.tag": "AI Engineer & Researcher",
        "hero.title1": "Building Intelligent",
        "hero.title2": "Systems",
        "hero.desc": "Specializing in large language models, multimodal AI, and scalable ML systems. 7 years of experience pushing the boundaries of what's possible with artificial intelligence.",
        "hero.cta.primary": "View My Work",
        "hero.cta.secondary": "Get In Touch",
        "hero.scroll": "Scroll",
        "stats.years": "Years Experience",
        "stats.projects": "Projects",
        "stats.params": "Parameters Trained",
        "stats.papers": "Publications",
        "about.tag": "01 / About",
        "about.title": "The Mind Behind The Machine",
        "about.lead": "I'm an AI engineer who believes that the best technology is invisible—it simply works, elegantly and efficiently.",
        "about.p1": "My journey began with computer vision, evolved through deep learning research, and has led me to the frontier of large language models and multimodal AI systems. Along the way, I've learned that great AI isn't just about impressive metrics—it's about creating real value for real people.",
        "about.p2": "I've contributed to open-source projects that power thousands of applications, published research at top-tier conferences, and led teams to build systems that handle billions of requests. But what drives me isn't the numbers—it's the moment when a complex problem becomes beautifully simple.",
        "expertise.tag": "02 / Expertise",
        "expertise.title": "Skills & Technologies",
        "expertise.ai.title": "AI & Deep Learning",
        "expertise.systems.title": "ML Systems",
        "expertise.engineering.title": "Engineering",
        "works.tag": "03 / Selected Works",
        "works.title": "Projects That Define Me",
        "works.p1.desc": "A 70-billion parameter multimodal language model built from scratch. Led architecture design, training pipeline development, and inference optimization. Achieved SOTA results on multiple benchmarks.",
        "works.p2.desc": "Distributed training framework enabling efficient large model training on commodity hardware. Implements advanced parallelism strategies with 95%+ scaling efficiency.",
        "works.p3.desc": "Autonomous AI agent framework with tool use, task planning, and memory. Powers complex workflow automation with natural language interfaces.",
        "contact.tag": "04 / Contact",
        "contact.title": "Let's Build Something Amazing",
        "contact.desc": "Whether you have a project in mind, want to discuss AI trends, or just want to say hello—I'd love to hear from you.",
        "contact.email": "Email",
        "footer.quote": "\"The best way to predict the future is to build it.\"",
        "footer.made": "Crafted with code"
    },
    zh: {
        "nav.about": "关于",
        "nav.expertise": "专长",
        "nav.works": "作品",
        "nav.contact": "联系",
        "hero.tag": "AI工程师 & 研究者",
        "hero.title1": "构建智能",
        "hero.title2": "系统",
        "hero.desc": "专注于大语言模型、多模态AI和可扩展的机器学习系统。7年经验，不断推动人工智能的边界。",
        "hero.cta.primary": "查看作品",
        "hero.cta.secondary": "联系我",
        "hero.scroll": "滚动",
        "stats.years": "年经验",
        "stats.projects": "个项目",
        "stats.params": "参数训练",
        "stats.papers": "论文发表",
        "about.tag": "01 / 关于",
        "about.title": "机器背后的大脑",
        "about.lead": "我是一名AI工程师，相信最好的技术是无形的——它只需优雅高效地工作。",
        "about.p1": "我的旅程始于计算机视觉，历经深度学习研究，最终来到大语言模型和多模态AI系统的前沿。在这个过程中，我明白了优秀的人工智能不仅仅是令人印象深刻的指标——而是为真实的人创造真实的价值。",
        "about.p2": "我为驱动数千应用的开源项目贡献过代码，在顶级会议发表过研究，带领团队构建处理数十亿请求的系统。但驱动我的不是数字——而是复杂问题变得优美简单的那一刻。",
        "expertise.tag": "02 / 专长",
        "expertise.title": "技能与技术",
        "expertise.ai.title": "AI & 深度学习",
        "expertise.systems.title": "ML系统",
        "expertise.engineering.title": "工程能力",
        "works.tag": "03 / 精选作品",
        "works.title": "定义我的项目",
        "works.p1.desc": "一个从零构建的700亿参数多模态语言模型。主导架构设计、训练流程开发和推理优化。在多个基准测试上达到SOTA结果。",
        "works.p2.desc": "分布式训练框架，让普通硬件也能高效训练大模型。实现先进的并行策略，扩展效率达95%+。",
        "works.p3.desc": "自主AI智能体框架，具备工具使用、任务规划和记忆能力。通过自然语言界面驱动复杂工作流自动化。",
        "contact.tag": "04 / 联系",
        "contact.title": "让我们一起创造精彩",
        "contact.desc": "无论你有项目想法、想讨论AI趋势，还是仅仅想打个招呼——我都很乐意收到你的来信。",
        "contact.email": "邮箱",
        "footer.quote": "\"预测未来的最好方式就是创造它。\"",
        "footer.made": "用代码精心制作"
    }
};

// 当前语言
let currentLang = 'en';

// 语言切换功能
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateContent();
    updateLangToggle();
}

// 更新页面内容
function updateContent() {
    const t = translations[currentLang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
}

// 更新语言切换按钮
function updateLangToggle() {
    const toggle = document.getElementById('langToggle');
    const current = toggle.querySelector('.lang-current');
    const other = toggle.querySelector('.lang-other');
    
    if (currentLang === 'en') {
        current.textContent = 'EN';
        other.textContent = '中';
    } else {
        current.textContent = '中';
        other.textContent = 'EN';
    }
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 移动端菜单
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.nav-menu');
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // 点击菜单项后关闭
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.expertise-card, .work-card, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 添加动画完成后的样式
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// 统计数字动画
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const text = entry.target.textContent;
                const num = parseInt(text);
                const suffix = text.replace(/[0-9]/g, '');
                animateNumber(entry.target, num, suffix);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target, suffix) {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 绑定语言切换
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    
    // 初始化功能
    initSmoothScroll();
    initMobileMenu();
    initScrollAnimations();
    animateStats();
    
    // 设置默认语言
    document.documentElement.lang = 'en';
});
