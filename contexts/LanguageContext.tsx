'use client';

import { createContext, useContext, ReactNode } from 'react';

type Language = 'en';

interface LanguageContextType {
  language: Language;
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
  const language: Language = 'en';

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return <LanguageContext.Provider value={{ language, t }}>{children}</LanguageContext.Provider>;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero section
    'hero.greeting': "Hey, I'm ",
    'hero.name.full': 'Amaan!',
    'hero.name.short': 'Amaan!',
    'hero.location': '',
    'hero.building': '',
    'hero.achievements': 'A few of my achievements...',
    'hero.achievement1':
      '30k followers on social media (x, instagram, tiktok, youtube) and over 10m views',
    'hero.achievement2': 'won 2nd place at UTRA Hacks, the largest robotics hackathon in canada',
    'hero.achievement3': 'designed award winning book covers for authors',
    'hero.currently': 'currently',
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
    'links.blogLink': 'writing',
    'links.artPrompt': '> interested in my creative work ->',
    'links.artLink': 'art',

    // Navigation
    'nav.home': 'Home',
    'nav.draw': 'Draw',
    'nav.blogs': 'blogs',
    'nav.draw.title': 'Draw something!',
    'nav.blogs.title': 'Read my writing!',
    'nav.contact': 'Contact',
    'nav.linkedin': 'LinkedIn',
    'nav.github': 'GitHub',
    'nav.twitter': 'Twitter',

    // Blogs page
    'blogs.pageTitle': 'Writing',
    'blogs.description':
      'A collection of my thoughts, experiences, and reflections on life, growth, and learning.',
    'blogs.note': 'Note:',
    'blogs.noteText':
      'These articles were originally published on Medium and reflect my personal thoughts and experiences.',

    // Blog navigation
    'blog.back': 'back',
    'blog.contents': 'contents',
    // Blog template content
    'blog.template.title': 'Your blog title',
    'blog.template.date': 'your name - month day, year - X min read',
    'blog.template.coverAlt': 'Cover image placeholder',
    'blog.template.section1.title': 'Section 1 title',
    'blog.template.section1.p1': 'Write your opening paragraph here.',
    'blog.template.section1.p2': 'Add a second paragraph to set context or tell a short story.',
    'blog.template.section1.imageAlt': 'Section 1 image alt text',
    'blog.template.section1.imageCaption': 'Section 1 image caption',
    'blog.template.section1.p3': 'Add a final paragraph to wrap up this section.',
    'blog.template.section1.subsection.title': 'Subsection title',
    'blog.template.section1.subsection.p1': 'Write a short subsection paragraph here.',
    'blog.template.section2.title': 'Section 2 title',
    'blog.template.section2.p1': 'Introduce the main point for this section.',
    'blog.template.section2.p2': 'Expand with a supporting detail or example.',
    'blog.template.section2.listItem1': 'List item one',
    'blog.template.section2.listItem2': 'List item two',
    'blog.template.section2.listItem3': 'List item three',
    'blog.template.section2.listItem4': 'List item four',
    'blog.template.section2.imageAlt': 'Section 2 image alt text',
    'blog.template.section2.imageCaption': 'Section 2 image caption',
    'blog.template.section2.p3': 'Add a paragraph to explain the list or image above.',
    'blog.template.section2.p4': 'Close the section with a takeaway.',
    'blog.template.section3.title': 'Section 3 title',
    'blog.template.section3.p1': 'Open this section with a key idea.',
    'blog.template.section3.image1Alt': 'Section 3 image alt text',
    'blog.template.section3.image1Caption': 'Section 3 image caption',
    'blog.template.section3.p2': 'Add a supporting paragraph.',
    'blog.template.section3.p3': 'Add another supporting paragraph.',
    'blog.template.section3.p4': 'Share a detail, insight, or lesson learned.',
    'blog.template.section3.p5': 'Optional extra context or example.',
    'blog.template.section3.p6': 'Wrap this part up before the next image.',
    'blog.template.section3.image2Alt': 'Section 3 image alt text',
    'blog.template.section3.image2Caption': 'Section 3 image caption',
    'blog.template.section3.subsection.title': 'Subsection title',
    'blog.template.section3.subsection.p1': 'Write a short paragraph for this subsection.',
    'blog.template.section3.subsection.p2': 'Add a second paragraph to round it out.',
    'blog.template.section3.subsection.listItem1': 'Checklist item one',
    'blog.template.section3.subsection.listItem2': 'Checklist item two',
    'blog.template.section3.subsection.listItem3': 'Checklist item three',
    'blog.template.section3.subsection.listItem4': 'Checklist item four',
    'blog.template.section4.title': 'Section 4 title',
    'blog.template.section4.p1': 'Introduce the section topic.',
    'blog.template.section4.p2': 'Add a supporting detail.',
    'blog.template.section4.p3': 'Add another supporting detail.',
    'blog.template.section4.p4': 'Add a practical example or result.',
    'blog.template.section4.p5': 'Close with a short summary sentence.',
    'blog.template.section4.imageAlt': 'Section 4 image alt text',
    'blog.template.section4.imageCaption': 'Section 4 image caption',
    'blog.template.section5.title': 'Subsection title',
    'blog.template.section5.p1': 'Add a short paragraph for this subsection.',
    'blog.template.section5.p2': 'Add a second short paragraph to finish.',
    'blog.template.section6.title': 'Section 5 title',
    'blog.template.section6.item1.title': 'Comparison item 1:',
    'blog.template.section6.item1.text': 'Explain the first comparison item in 1-2 sentences.',
    'blog.template.section6.item2.title': 'Comparison item 2:',
    'blog.template.section6.item2.text': 'Explain the second comparison item in 1-2 sentences.',
    'blog.template.section6.item3.title': 'Comparison item 3:',
    'blog.template.section6.item3.text': 'Explain the third comparison item in 1-2 sentences.',
    'blog.template.section6.imageAlt': 'Section 5 image alt text',
    'blog.template.section6.imageCaption': 'Section 5 image caption',
    'blog.template.section7.title': 'Section 6 title',
    'blog.template.section7.p1': 'Summarize the future or next steps.',
    'blog.template.section7.p2': 'Add a second paragraph with more detail.',
    'blog.template.section7.p3': 'Close with a final thought.',
    'blog.template.referencesTitle': 'references',
    'blog.template.references.item1': 'https://example.com/source-1',
    'blog.template.references.item2': 'https://example.com/source-2',
    'blog.template.references.item3': 'https://example.com/source-3',
    'blog.template.references.item4': 'https://example.com/source-4',
    'blog.template.note': 'note: list your image sources or attributions at',
    'blog.template.noteLinkLabel': 'your-source-site',
    'blog.template.noteLinkUrl': 'https://example.com',

    // scene ai when blog
    'blog.scene-ai-when.title': 'Scene AI When',
    'blog.scene-ai-when.date': 'your name - month day, year - X min read',
    'blog.scene-ai-when.coverAlt': 'Cover image placeholder',
    'blog.scene-ai-when.section1.title': 'Introduction',
    'blog.scene-ai-when.section1.p1': 'Write your opening paragraph here.',
    'blog.scene-ai-when.section1.p2':
      'Add a second paragraph to set context or tell a short story.',
    'blog.scene-ai-when.section1.imageAlt': 'Section 1 image alt text',
    'blog.scene-ai-when.section1.imageCaption': 'Section 1 image caption',
    'blog.scene-ai-when.section1.p3': 'Add a final paragraph to wrap up this section.',
    'blog.scene-ai-when.section1.subsection.title': 'Subsection title',
    'blog.scene-ai-when.section1.subsection.p1': 'Write a short subsection paragraph here.',
    'blog.scene-ai-when.section2.title': 'Section 2 title',
    'blog.scene-ai-when.section2.p1': 'Introduce the main point for this section.',
    'blog.scene-ai-when.section2.p2': 'Expand with a supporting detail or example.',
    'blog.scene-ai-when.section2.listItem1': 'List item one',
    'blog.scene-ai-when.section2.listItem2': 'List item two',
    'blog.scene-ai-when.section2.listItem3': 'List item three',
    'blog.scene-ai-when.section2.listItem4': 'List item four',
    'blog.scene-ai-when.section2.imageAlt': 'Section 2 image alt text',
    'blog.scene-ai-when.section2.imageCaption': 'Section 2 image caption',
    'blog.scene-ai-when.section2.p3': 'Add a paragraph to explain the list or image above.',
    'blog.scene-ai-when.section2.p4': 'Close the section with a takeaway.',
    'blog.scene-ai-when.section3.title': 'Section 3 title',
    'blog.scene-ai-when.section3.p1': 'Open this section with a key idea.',
    'blog.scene-ai-when.section3.image1Alt': 'Section 3 image alt text',
    'blog.scene-ai-when.section3.image1Caption': 'Section 3 image caption',
    'blog.scene-ai-when.section3.p2': 'Add a supporting paragraph.',
    'blog.scene-ai-when.section3.p3': 'Add another supporting paragraph.',
    'blog.scene-ai-when.section3.p4': 'Share a detail, insight, or lesson learned.',
    'blog.scene-ai-when.section3.p5': 'Optional extra context or example.',
    'blog.scene-ai-when.section3.p6': 'Wrap this part up before the next image.',
    'blog.scene-ai-when.section3.image2Alt': 'Section 3 image alt text',
    'blog.scene-ai-when.section3.image2Caption': 'Section 3 image caption',
    'blog.scene-ai-when.section3.subsection.title': 'Subsection title',
    'blog.scene-ai-when.section3.subsection.p1': 'Write a short paragraph for this subsection.',
    'blog.scene-ai-when.section3.subsection.p2': 'Add a second paragraph to round it out.',
    'blog.scene-ai-when.section3.subsection.listItem1': 'Checklist item one',
    'blog.scene-ai-when.section3.subsection.listItem2': 'Checklist item two',
    'blog.scene-ai-when.section3.subsection.listItem3': 'Checklist item three',
    'blog.scene-ai-when.section3.subsection.listItem4': 'Checklist item four',
    'blog.scene-ai-when.section4.title': 'Section 4 title',
    'blog.scene-ai-when.section4.p1': 'Introduce the section topic.',
    'blog.scene-ai-when.section4.p2': 'Add a supporting detail.',
    'blog.scene-ai-when.section4.p3': 'Add another supporting detail.',
    'blog.scene-ai-when.section4.p4': 'Add a practical example or result.',
    'blog.scene-ai-when.section4.p5': 'Close with a short summary sentence.',
    'blog.scene-ai-when.section4.imageAlt': 'Section 4 image alt text',
    'blog.scene-ai-when.section4.imageCaption': 'Section 4 image caption',
    'blog.scene-ai-when.section5.title': 'Subsection title',
    'blog.scene-ai-when.section5.p1': 'Add a short paragraph for this subsection.',
    'blog.scene-ai-when.section5.p2': 'Add a second short paragraph to finish.',
    'blog.scene-ai-when.section6.title': 'Section 5 title',
    'blog.scene-ai-when.section6.item1.title': 'Comparison item 1:',
    'blog.scene-ai-when.section6.item1.text': 'Explain the first comparison item in 1-2 sentences.',
    'blog.scene-ai-when.section6.item2.title': 'Comparison item 2:',
    'blog.scene-ai-when.section6.item2.text':
      'Explain the second comparison item in 1-2 sentences.',
    'blog.scene-ai-when.section6.item3.title': 'Comparison item 3:',
    'blog.scene-ai-when.section6.item3.text': 'Explain the third comparison item in 1-2 sentences.',
    'blog.scene-ai-when.section6.imageAlt': 'Section 5 image alt text',
    'blog.scene-ai-when.section6.imageCaption': 'Section 5 image caption',
    'blog.scene-ai-when.section7.title': 'Section 6 title',
    'blog.scene-ai-when.section7.p1': 'Summarize the future or next steps.',
    'blog.scene-ai-when.section7.p2': 'Add a second paragraph with more detail.',
    'blog.scene-ai-when.section7.p3': 'Close with a final thought.',
    'blog.scene-ai-when.referencesTitle': 'references',
    'blog.scene-ai-when.references.item1': 'https://example.com/source-1',
    'blog.scene-ai-when.references.item2': 'https://example.com/source-2',
    'blog.scene-ai-when.references.item3': 'https://example.com/source-3',
    'blog.scene-ai-when.references.item4': 'https://example.com/source-4',
    'blog.scene-ai-when.note': 'note: list your image sources or attributions at',
    'blog.scene-ai-when.noteLinkLabel': 'your-source-site',
    'blog.scene-ai-when.noteLinkUrl': 'https://example.com',
    // Projects section
    'projects.title': 'projects',
    'projects.languagesSectionTitle': "A few programming languages I've worked with...",
    'projects.languagesTitle': "programming languages i've worked with",
    'projects.golang': 'golang',
    'projects.python': 'python',
    'projects.typescript': 'typescript',
    'projects.and': 'and',
    'projects.theSearchThing': 'semantic search engine for your OS',
    'projects.neoDiscordBot': 'discord bot that summarizes messages for you',
    'projects.facialRecognition':
      'deep learning CNN model for face identification and verification',
    'projects.sqlParser': 'parser that can query flat JSON objects',
    'projects.whiteboard': 'app to brainstorm, create and share ideas',
    'projects.dependabot': "app with 200+ users that's easier to use than github's dependabot",
    'projects.soarailabs': 'merge conflict resolver',

    // Projects list labels (home page)
    'projects.label.theSearchThing': 'the-search-thing',
    'projects.label.googledocs': 'google docs for your terminal',
    'projects.label.kite': 'kite',
    'projects.label.agentSearchEvals': 'agent search evals',

    // Home hero title
    'home.title': 'hi im amaan',

    // Excited section
    'excited.title': "I'm excited about...",
    'excited.item1': 'building ai agents that surprise and delight people everywhere',
    'excited.item2': 'turning data into tools, visuals, and magic for everyone',
    'excited.item3':
      'chasing creative art sparks, sketching doodles, and imagining new designs everyday',
    'excited.item4': 'engineering projects that make me say, "whoa, that\'s so cool!"',

    // Previously section
    'previously.title': 'previously',
    'previously.role1': 'engineering',
    'previously.role2': 'engineering',
    'previously.role3': 'engineering',
    'previously.item1': 'Story',
    'previously.item2': 'Honeywell',
    'previously.item3': 'Honeywell',

    // Current roles (compact labels)
    'current.role1': 'engineering',
    'current.role2': 'engineering',

    // Footer
    'footer.copyright': '© 2026 AMAAN BILWAR',
    'footer.by': 'BY AMAAN®',

    // Additional info
    'info.favouriteShow': '> favourite show -> one punch man',
  },
};
