'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero section
    'hero.greeting': "Hey, I'm ",
    'hero.name.full': 'Nicholas!',
    'hero.name.short': 'Nic!',
    'hero.location': '',
    'hero.building': '',
    'hero.achievements': 'A few of my achievements...',
    'hero.achievement1':
      '30k followers on social media (x, instagram, tiktok, youtube) and over 10m views',
    'hero.achievement2': 'won 2nd place at UTRA Hacks, the largest robotics hackathon in canada',
    'hero.achievement3': 'designed award winning book covers for authors',
    'hero.currently': 'Currently',
    'hero.current1': '> studying syde (engineering) at the university of waterloo',
    'hero.current2':
      'working at textql as a software engineer intern in nyc building ai agents for data',
    'hero.current3': 'building projects to help others create and invent new things',
    'hero.current4': 'sharing my journey in tech and creativity online with everyone to see',
    'hero.excited': "I'm excited about...",
    'hero.excited1': 'building ai agents that surprise and delight people everywhere',
    'hero.excited2': 'turning data into tools, visuals, and magic for everyone',
    'hero.excited3':
      'chasing creative art sparks, sketching doodles, and imagining new designs everyday',
    'hero.excited4': 'engineering projects that make me say, "whoa, that\'s so cool!"',
    'hero.previously': 'Previously I...',
    'hero.prev1':
      'was a software engineer intern at ownr, building tools for entrepreneurs worldwide',
    'hero.prev2': 'was a software engineer intern at rbc, working on machine learning models',
    'hero.prev3':
      'was a ux design intern at meta hash capital, focusing on user experience in fintech',

    // Sections
    'section.howIStarted': 'How I Started',
    'section.howIStarted.text1':
      'i started coding the summer after 8th grade mostly out of curiosity. i wanted to understand how the apps i used every day actually worked, so i started building my own.',
    'section.howIStarted.text2':
      "early on, i built a simple app to help my immigrant parents convert their chinese money to canadian dollars. it wasn't fancy, but it solved a real problem and that's when it clicked for me, i could use tech to actually help people.",
    'section.howIStarted.text3':
      "i've always been the kind of person who wants to build things. as a kid, it was lego and cardboard contraptions. now it's robots, web apps, and tools that help others learn, create, or solve problems.",
    'section.howIStarted.text4':
      "since then, i've done freelance work, internships, launched side projects, and shared everything i've learned online. i've always wanted to build and create things that matter.",

    'section.unconventional': 'The Unconventional Ways I Get Things Done',
    'section.unconventional.text1':
      "i've always approached things unconventionally, and this mindset has consistently led me to many unique opportunities. growing up, i was an art kid at heart, but i found myself equally drawn to coding and engineering—blending creativity with technology in everything i do.",
    'section.unconventional.text2':
      'i started by intentionally building my presence on social media platforms, sharing my projects and insights publicly rather than relying on traditional networking. this unconventional approach directly led to my first internships, secured by leveraging platforms like x (twitter) to showcase my work and connect with industry professionals.',
    'section.unconventional.text3':
      "beyond internships, i love experimenting with new ways to reach people, whether that's through viral posts, creative side projects, or simply being open about my process and failures. ",
    'section.unconventional.text4':
      'i believe that being visible, authentic, and a little bit bold online can open doors that traditional paths might never reveal.',

    // Actions
    'action.open': 'OPEN',
    'action.close': 'CLOSE',
    'action.download': 'Download',
    'action.stop': 'Stop',

    'phrases.phrase1': 'i like to just ⌘ + C and ⌘ + V things',

    // Search
    'search.title': 'What else do you want to know about me?',
    'search.placeholder': 'Ask me anything',
    'search.thinking': 'Thinking',
    'search.responding': 'Responding',
    'search.shortcuts': 'Type "?" for shortcuts',

    // Draw page
    'draw.title': 'Draw Anything!',
    'draw.pageTitle': 'Draw',
    'draw.portfolioLink': 'View my art portfolio here',
    'draw.funFact': 'Fun fact:',
    'draw.funFactText':
      "I originally planned to pursue visual arts, but in grade 10, I realized it wasn't the right fit. That's when I discovered my passion and talent for programming.",
    'draw.story1':
      'Ever since I was a kid, drawing and making art has been a huge part of my life.',
    'draw.story2': "For over 13 years, it's been a constant source of inspiration and expression.",
    'draw.story3':
      'This blend of creativity and problem-solving is actually why Systems Design Engineering really appealed to me.',
    'draw.story4':
      "Even though I'm not in an art program anymore like I was in high school, I still love to make YouTube videos and create art.",
    'draw.story5': 'Because, in a way, engineering involves art every single day.',
    'draw.story6':
      "It's about elegantly solving problems and designing intuitive, functional, and aesthetically pleasing solutions.",
    'draw.story7':
      "It's always sparking new ideas and helping me to see the world from different perspectives.",
    'draw.story8':
      "That deep connection to creativity is why I've included this little canvas here.",
    'draw.story9':
      "It's a piece of my journey, inviting you to doodle, design, and create something alongside me!",

    // Contact
    'contact.title': 'A few ways to connect...',
    'contact.text':
      "> i'd love to hear from you! want to hire me? or simply wanna chat? feel free to reach out by email, or connect with me on linkedin. also check out my github!",

    // Links
    'links.blogPrompt': '> want to read my thoughts ->',
    'links.blogLink': 'blogs',
    'links.artPrompt': '> interested in my creative work ->',
    'links.artLink': 'art',

    // Navigation
    'nav.home': 'Home',
    'nav.draw': 'Draw',
    'nav.blogs': 'Blogs',
    'nav.draw.title': 'Draw something!',
    'nav.blogs.title': 'Read my blogs!',
    'nav.contact': 'Contact',
    'nav.linkedin': 'LinkedIn',
    'nav.github': 'GitHub',
    'nav.twitter': 'Twitter',

    // Language
    'language.label': 'Language:',

    // Blogs page
    'blogs.pageTitle': 'Blogs',
    'blogs.description':
      'A collection of my thoughts, experiences, and reflections on life, growth, and learning.',
    'blogs.note': 'Note:',
    'blogs.noteText':
      'These articles were originally published on Medium and reflect my personal thoughts and experiences.',

    // Sample prompts
    prompt1: 'Tell me about your experience at Ownr',
    prompt2: 'What projects have you worked on?',

    // Money making
    'moneyMaking.text':
      "I've done pretty much everything you can think of that a teenager can do to make money: tutoring, working fast food jobs, selling things, shoveling the snow off neighbour's driveways, internships, freelance work in design and coding as well as brand deals from social media.",

    // Projects section
    'projects.title': 'Projects',
    'projects.languagesSectionTitle': "A few programming languages I've worked with...",
    'projects.languagesTitle': "programming languages i've worked with",
    'projects.golang': 'golang',
    'projects.python': 'python',
    'projects.typescript': 'typescript',
    'projects.and': 'and',
    'projects.tiktokPredictor': 'ML model that predicts tiktok view counts',
    'projects.neoDiscordBot': 'discord bot that summarizes messages for you',
    'projects.facialRecognition':
      'deep learning CNN model for face identification and verification',
    'projects.diffDigest': 'tool that turns git diffs into release notes with 5000+ website visits',
    'projects.sqlParser': 'parser that can query flat JSON objects',
    'projects.whiteboard': 'app to brainstorm, create and share ideas',
    'projects.dependabot': "app with 200+ users that's easier to use than github's dependabot",
    'projects.fernando': 'posture checker robot that won 2nd place at utra hacks',
    'projects.basketbin': 'machine that sorts trash automatically using computer vision',

    // Projects list labels (home page)
    'projects.label.tiktok': 'tiktok view predictor',
    'projects.label.diffDigest': 'diff digest',
    'projects.label.sqlParser': 'sql query parser',
    'projects.label.fernando': 'fernando',
    'projects.label.basketbin': 'basketbin',
    'projects.label.facialRecognition': 'facial recognition',
    'projects.label.agentSearchEvals': 'agent search evals',

    // Home hero title
    'home.title': 'hi im nic',

    // Excited section
    'excited.title': "I'm excited about...",
    'excited.item1': 'building ai agents that surprise and delight people everywhere',
    'excited.item2': 'turning data into tools, visuals, and magic for everyone',
    'excited.item3':
      'chasing creative art sparks, sketching doodles, and imagining new designs everyday',
    'excited.item4': 'engineering projects that make me say, "whoa, that\'s so cool!"',

    // Previously section
    'previously.title': 'Previously',
    'previously.role1': 'Engineering',
    'previously.role2': 'Engineering',
    'previously.item1': 'Ownr',
    'previously.item2': 'RBC',

    // Current roles (compact labels)
    'current.role2': 'Engineering',

    // Footer
    'footer.copyright': '© 2025 NICHOLAS CHEN',
    'footer.by': 'BY NICHOLAS®',

    // Additional info
    'info.favouriteShow': '> favourite show -> one punch man',
  },
  zh: {
    // Hero section
    'hero.greeting': '嗨，我是',
    'hero.name.full': 'Nicholas!',
    'hero.name.short': 'Nic!',
    'hero.location': '我活跃于多伦多和纽约市。',
    'hero.building': '我已经构建了3673天。',
    'hero.achievements': '我的一些成就...',
    'hero.achievement1': '在社交媒体上有3万粉丝（x、instagram、tiktok、youtube），超过1千万观看量',
    'hero.achievement2': '在加拿大最大的机器人黑客马拉松UTRA Hacks中获得第二名',
    'hero.achievement3': '为作者设计了获奖书籍封面',
    'hero.currently': '我目前在...',
    'hero.current1': '> 在滑铁卢大学学习系统设计工程',
    'hero.current2': '作为软件工程师实习生加入纽约的textql，构建数据AI代理',
    'hero.current3': '构建项目帮助他人创造和发明新事物',
    'hero.current4': '在网上与大家分享我在技术和创意方面的旅程',
    'hero.excited': '我对以下事情感到兴奋...',
    'hero.excited1': '构建能在各处给人惊喜和快乐的AI代理',
    'hero.excited2': '将数据转化为工具、视觉效果和魔法，为每个人服务',
    'hero.excited3': '追逐创意艺术火花，绘制涂鸦，每天想象新设计',
    'hero.excited4': '进行让我说"哇，太酷了！"的工程项目',
    'hero.previously': '以前我...',
    'hero.prev1': '在ownr担任软件工程师实习生，为全球企业家构建工具',
    'hero.prev2': '在rbc担任软件工程师实习生，从事机器学习模型工作',
    'hero.prev3': '在meta hash capital担任用户体验设计实习生，专注于金融科技的用户体验',

    // Sections
    'section.howIStarted': '我是如何开始的',
    'section.howIStarted.text1':
      '我在八年级的夏天开始编程，主要是出于好奇心。我想了解我每天使用的应用程序是如何工作的，所以我开始构建自己的应用程序。',
    'section.howIStarted.text2':
      '早期，我构建了一个简单的应用程序来帮助我的移民父母将中国钱币转换为加拿大元。它并不花哨，但它解决了一个真正的问题，这时我明白了，我可以用技术真正帮助人们。',
    'section.howIStarted.text3':
      '我一直是那种想要构建东西的人。小时候，是乐高和纸板装置。现在是机器人、网络应用程序和帮助他人学习、创造或解决问题的工具。',
    'section.howIStarted.text4':
      '从那时起，我做过自由职业工作、实习、推出副业项目，并在网上分享我学到的一切。我一直想发明和创造重要的东西。',

    'section.unconventional': '我完成事情的非传统方式',
    'section.unconventional.text1':
      '我总是以非传统的方式处理事情，这种心态一直为我带来许多独特的机会。在成长过程中，我本质上是一个艺术孩子，但我发现自己同样被编程和工程所吸引——在我做的每件事中都融合了创造力和技术。',
    'section.unconventional.text2':
      '我开始有意在社交媒体平台上建立自己的存在感，公开分享我的项目和见解，而不是依赖传统的网络建设。这种非传统的方法直接导致了我的第一次实习，通过利用X（Twitter）等平台展示我的工作并与行业专业人士建立联系。',
    'section.unconventional.text3':
      '除了实习，我喜欢尝试接触人们的新方法，无论是通过病毒式帖子、创意副业项目，还是简单地对我的过程和失败保持开放。',
    'section.unconventional.text4':
      '我相信在网上保持可见、真实和稍微大胆一点可以打开传统路径可能永远不会揭示的大门。',

    // Actions
    'action.open': '打开',
    'action.close': '关闭',
    'action.download': '下载',
    'action.stop': '停止',

    // Phrases
    'phrases.title': '我喜欢的短语',
    'phrases.phrase1': '我只是喜欢 ⌘ + C 和 ⌘ + V 东西',

    // Search
    'search.title': '你还想了解我什么？',
    'search.placeholder': '问我任何问题',
    'search.thinking': '思考中',
    'search.responding': '回应中',
    'search.shortcuts': '输入"？"查看快捷方式',

    // Draw page
    'draw.title': '画任何东西！',
    'draw.pageTitle': '绘画',
    'draw.portfolioLink': '在这里查看我的艺术作品集',
    'draw.funFact': '有趣的事实：',
    'draw.funFactText':
      '我原本计划学习视觉艺术，但在10年级时，我意识到这不适合我。那时我发现了我对编程的热情和天赋。',
    'draw.story1': '从小时候起，绘画和制作艺术就是我生活的重要组成部分。',
    'draw.story2': '13年多来，它一直是我灵感和表达的恒定源泉。',
    'draw.story3': '这种创造力和解决问题的融合实际上是系统设计工程真正吸引我的原因。',
    'draw.story4': '尽管我不再像高中时那样在艺术课程中，但我仍然喜欢制作YouTube视频和创作艺术。',
    'draw.story5': '因为，在某种程度上，工程每天都涉及艺术。',
    'draw.story6': '这是关于优雅地解决问题，设计直观、功能性和美观的解决方案。',
    'draw.story7': '它总是激发新想法，帮助我从不同的角度看世界。',
    'draw.story8': '与创造力的深层联系是我在这里包含这个小画布的原因。',
    'draw.story9': '这是我旅程的一部分，邀请你与我一起涂鸦、设计和创造！',

    // Contact
    'contact.title': '联系方式...',
    'contact.text':
      '我很想听到你的声音！想雇用我？还是只是想聊天？随时通过电子邮件联系我，或在linkedin上与我联系。也可以查看我的github！',

    // Links
    'links.blogPrompt': '想要阅读我的想法 ->',
    'links.blogLink': '博客',
    'links.artPrompt': '对我的创意作品感兴趣 ->',
    'links.artLink': '艺术',

    // Navigation
    'nav.home': '首页',
    'nav.draw': '绘画',
    'nav.blogs': '博客',
    'nav.draw.title': '画点什么！',
    'nav.blogs.title': '阅读我的博客！',
    'nav.contact': '联系',
    'nav.linkedin': 'LinkedIn',
    'nav.github': 'GitHub',
    'nav.twitter': 'Twitter',

    // Language
    'language.label': '语言：',

    // Blogs page
    'blogs.pageTitle': '博客',
    'blogs.description': '我的想法、经历和对生活、成长及学习的反思集合。',
    'blogs.note': '注：',
    'blogs.noteText': '这些文章最初发布在Medium上，反映了我的个人想法和经历。',

    // Sample prompts
    prompt1: '告诉我你在Ownr的经历',
    prompt2: '你做过什么项目？',

    // Money making
    'moneyMaking.text':
      '我做过几乎所有你能想到的青少年赚钱的事情：辅导、快餐店工作、卖东西、为邻居铲雪道、实习、设计和编程的自由职业工作以及社交媒体的品牌合作。',

    // Projects section
    'projects.title': '我正在进行的几个项目...',
    'projects.languagesSectionTitle': '我使用过的几种编程语言...',
    'projects.languagesTitle': '我使用过的编程语言',
    'projects.golang': 'golang',
    'projects.python': 'python',
    'projects.typescript': 'typescript',
    'projects.and': '和',
    'projects.tiktokPredictor': '预测TikTok观看量的ML模型',
    'projects.neoDiscordBot': 'Discord机器人，为您总结消息',
    'projects.facialRecognition': '用于人脸识别和验证的深度学习CNN模型',
    'projects.diffDigest': '将git差异转换为发布说明的工具，拥有5000+次网站访问',
    'projects.sqlParser': '可以查询扁平JSON对象的解析器',
    'projects.whiteboard': '用于头脑风暴、创建和分享想法的应用',
    'projects.dependabot': '拥有200+用户的应用，用于检查和更新存储库中的依赖项',
    'projects.fernando': '在utra黑客马拉松获得第二名的姿势检查机器人',
    'projects.basketbin': '使用计算机视觉自动分拣垃圾的机器',

        // Projects list labels (home page) — keep English names in both languages
        'projects.label.tiktok': 'tiktok view predictor',
        'projects.label.diffDigest': 'diff digest',
        'projects.label.sqlParser': 'sql query parser',
        'projects.label.fernando': 'fernando',
        'projects.label.basketbin': 'basketbin',
        'projects.label.facialRecognition': 'facial recognition',
        'projects.label.agentSearchEvals': 'agent search evals',

    // Home hero title
    'home.title': '嗨，我是 nic',

    // Excited section
    'excited.title': '我对以下事情感到兴奋...',
    'excited.item1': '构建能在各处给人惊喜和快乐的AI代理',
    'excited.item2': '将数据转化为工具、视觉效果和魔法，为每个人服务',
    'excited.item3': '追逐创意艺术火花，绘制涂鸦，每天想象新设计',
    'excited.item4': '进行让我说"哇，太酷了！"的工程项目',

    // Previously section
    'previously.title': '之前经历...',
    'previously.role1': '工程',
    'previously.role2': '工程',
    'previously.item1': 'ownr',
    'previously.item2': 'rbc',

    // Current roles (compact labels)
    'current.role2': '工程',

    // Footer
    'footer.copyright': '© 2025 NICHOLAS CHEN',
    'footer.by': '设计：NICHOLAS®',

    // Additional info
    'info.favouriteShow': '> 最喜欢的节目 -> 一拳超人',
  },
};
