// ===== 国际化翻译数据 =====
const translations = {
    zh: {
        brand: "我的主页",
        "nav.home": "首页",
        "nav.about": "关于我",
        "nav.skills": "技能",
        "nav.projects": "作品",
        "nav.thoughts": "随想",
        "nav.contact": "联系",
        "hero.greeting": "你好，我是",
        "hero.tagline": "热爱探索AI边界的技术人",
        "hero.bio": "一名对人工智能充满热情的工程师。我相信好的技术应该服务于人，让复杂的事情变得简单。工作之余，我喜欢读科幻小说、徒步和摄影。",
        "hero.cta.works": "看看我的作品",
        "hero.cta.more": "了解更多",
        "about.title": "关于我",
        "about.story1": "我从事AI领域已有7年时间，从最初的计算机视觉到后来专注于大语言模型。这段旅程让我深刻体会到，技术的本质是为了解决问题，而不是炫技。",
        "about.story2": "我参与过多个开源项目，也在一些顶会发表过论文。但最让我骄傲的不是这些数字，而是我参与的产品真正帮助到了用户。",
        "about.story3": "业余时间，我喜欢在户外徒步，用相机记录风景。我相信好的灵感往往来自代码之外的时光。",
        "about.highlight1.title": "专注领域",
        "about.highlight1.desc": "大语言模型、多模态学习、AI系统优化",
        "about.highlight2.title": "工作理念",
        "about.highlight2.desc": "简单、优雅、以人为本",
        "about.highlight3.title": "持续成长",
        "about.highlight3.desc": "保持好奇，保持学习",
        "skills.title": "我的技能",
        "skills.desc": "我熟悉的技术和工具",
        "skills.ai": "AI & 机器学习",
        "skills.engineering": "工程能力",
        "skills.interests": "兴趣爱好",
        "projects.title": "我的作品",
        "projects.desc": "一些我参与或主导的项目",
        "projects.p1.title": "MegaLM-70B",
        "projects.p1.desc": "一个700亿参数的多模态大语言模型项目。我从零开始参与了模型架构设计和训练流程搭建，看着它从想法变成现实的过程让我很有成就感。",
        "projects.p2.title": "NeuralScale",
        "projects.p2.desc": "一个分布式训练框架，帮助小团队也能训练大模型。这个项目让我学会了在资源有限的情况下做最优的技术选择。",
        "projects.p3.title": "AutoAgent",
        "projects.p3.desc": "一个让AI能自主完成复杂任务的框架。最有趣的是看到它第一次成功完成一个多步骤任务时的那种惊喜。",
        "projects.view": "查看详情 →",
        "thoughts.title": "随想",
        "thoughts.desc": "一些关于技术和生活的思考",
        "thoughts.t1.title": "关于AI的未来",
        "thoughts.t1.content": "很多人觉得AI会取代人类，但我更愿意相信AI是放大人类创造力的工具。就像相机没有取代画家，而是让摄影成为一种新的艺术形式...",
        "thoughts.t2.title": "简单之美",
        "thoughts.t2.content": "在技术领域，简单往往比复杂更难实现。写出一行别人能看懂的好代码，比写出一百行只有你能懂的代码要困难得多...",
        "thoughts.t3.title": "工作与生活",
        "thoughts.t3.content": "最好的代码往往是在散步时想出来的。给自己留出发呆的时间，比一直盯着屏幕更重要...",
        "contact.title": "联系我",
        "contact.desc": "有想法想交流？欢迎随时联系我",
        "contact.note": "无论是技术讨论、合作机会，还是单纯想聊聊天，都欢迎给我发邮件。我会尽快回复。",
        "contact.social": "你也可以在这里找到我：",
        "contact.blog": "博客",
        "footer.quote": "\"保持好奇，保持简单。\"",
        "footer.made": "用 ❤️ 和 ☕️ 制作"
    },
    en: {
        brand: "My Home",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Works",
        "nav.thoughts": "Thoughts",
        "nav.contact": "Contact",
        "hero.greeting": "Hi, I'm",
        "hero.tagline": "An AI explorer who loves building things",
        "hero.bio": "An engineer passionate about AI. I believe good technology should serve people and make complex things simple. Outside of work, I enjoy sci-fi novels, hiking, and photography.",
        "hero.cta.works": "See My Works",
        "hero.cta.more": "Learn More",
        "about.title": "About Me",
        "about.story1": "I've been in AI for 7 years, from computer vision to large language models. This journey taught me that technology is about solving problems, not showing off.",
        "about.story2": "I've contributed to open-source projects and published papers at top conferences. But what I'm most proud of is that my work has truly helped users.",
        "about.story3": "In my free time, I love hiking outdoors and capturing landscapes with my camera. I believe great inspiration often comes from time away from the code.",
        "about.highlight1.title": "Focus Areas",
        "about.highlight1.desc": "LLMs, Multimodal Learning, AI System Optimization",
        "about.highlight2.title": "Philosophy",
        "about.highlight2.desc": "Simple, elegant, human-centered",
        "about.highlight3.title": "Growth",
        "about.highlight3.desc": "Stay curious, keep learning",
        "skills.title": "My Skills",
        "skills.desc": "Technologies and tools I work with",
        "skills.ai": "AI & Machine Learning",
        "skills.engineering": "Engineering",
        "skills.interests": "Interests",
        "projects.title": "My Works",
        "projects.desc": "Projects I've been involved in or led",
        "projects.p1.title": "MegaLM-70B",
        "projects.p1.desc": "A 70B parameter multimodal language model project. I was involved in architecture design and training pipeline from scratch. Watching it come to life from just an idea was incredibly rewarding.",
        "projects.p2.title": "NeuralScale",
        "projects.p2.desc": "A distributed training framework that helps small teams train large models. This project taught me how to make optimal technical choices with limited resources.",
        "projects.p3.title": "AutoAgent",
        "projects.p3.desc": "A framework that enables AI to autonomously complete complex tasks. The most fun part was the surprise when it first successfully completed a multi-step task.",
        "projects.view": "View Details →",
        "thoughts.title": "Thoughts",
        "thoughts.desc": "Some reflections on technology and life",
        "thoughts.t1.title": "On AI's Future",
        "thoughts.t1.content": "Many fear AI will replace humans, but I see it as a tool that amplifies human creativity. Just as cameras didn't replace painters but created photography as a new art form...",
        "thoughts.t2.title": "Beauty in Simplicity",
        "thoughts.t2.content": "In technology, simplicity is often harder to achieve than complexity. Writing one line of code that others can understand is more difficult than writing a hundred lines only you can read...",
        "thoughts.t3.title": "Work & Life",
        "thoughts.t3.content": "The best code ideas often come during walks. Giving yourself time to daydream is more important than staring at the screen all the time...",
        "contact.title": "Get in Touch",
        "contact.desc": "Have something to discuss? Feel free to reach out",
        "contact.note": "Whether it's technical discussions, collaboration opportunities, or just a chat, feel free to email me. I'll get back to you soon.",
        "contact.social": "You can also find me here:",
        "contact.blog": "Blog",
        "footer.quote": ""Stay curious, stay simple."",
        "footer.made": "Made with ❤️ and ☕️"
    }
};

// ===== 当前语言状态 =====
let currentLang = localStorage.getItem('preferred-lang') || 'zh';

// ===== 语言切换功能 =====
function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.querySelector('span').textContent = lang === 'zh' ? 'EN' : '中文';
    }
    
    document.documentElement.lang = lang === 'zh' ? 'zh' : 'en';
    localStorage.setItem('preferred-lang', lang);
}

// ===== 滚动动画 =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.highlight-item, .skill-group, .project-item, .thought-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== 平滑滚动 =====
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
                document.querySelector('.nav-menu').classList.remove('active');
            }
        });
    });
}

// ===== 导航栏滚动效果 =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ===== 移动端菜单 =====
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言
    updateLanguage(currentLang);
    
    // 语言切换按钮事件
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            updateLanguage(newLang);
        });
    }
    
    // 初始化其他功能
    initScrollAnimations();
    initSmoothScroll();
    initNavbarScroll();
    initMobileMenu();
});
