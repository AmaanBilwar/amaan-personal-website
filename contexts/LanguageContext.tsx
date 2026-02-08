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
    'nav.blogs': 'writing',
    'nav.draw.title': 'Draw something!',
    'nav.blogs.title': 'Read my writing!',
    'nav.contact': 'Contact',
    'nav.linkedin': 'LinkedIn',
    'nav.github': 'GitHub',
    'nav.twitter': 'Twitter',

    // Language
    'language.label': 'Language:',

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
    'blog.git.title': 'git commands',
    'blog.git.date': 'nicholas chen · december 21, 2025 · 4 min read',
    'blog.coding.title': 'how i learned to code',
    'blog.coding.date': 'nicholas chen · december 26, 2025 · 5 min read',
    'blog.coding.intro': 'small learnings that taught me to code from start (top) to end (bottom)',
    'blog.coding.year2023': '2023',
    'blog.coding.year2024': '2024',
    'blog.coding.year2025': '2025',
    'blog.coding.year2026': '2026',
    'blog.coding.item1': '• built a hangman game in java',
    'blog.coding.item2':
      '• learned the basics of c++ from my computer science teacher in high school',
    'blog.coding.item3':
      "• joined my school's programming club and learned from better programmers",
    'blog.coding.item4': '• tried out competitive programming and did the ccc twice in c++',
    'blog.coding.item5': '• joined a group of other students and learned a lot building voluntrack',
    'blog.coding.item6': '• built my first gpt wrapper during an online hackathon with friends',
    'blog.coding.item7': '• made a student registration and mobile calculator app using kotlin',
    'blog.coding.item8': '• landed first software engineering internship at RBC in summer 2024',
    'blog.coding.item10': '• built an ML model on jupyter notebook using python, numpy and pandas',
    'blog.coding.item11': '• learned a lot of what i needed from geeks for geeks and w3schools',
    'blog.coding.item12':
      '• built some random projects with javascript, html and css for the first time',
    'blog.coding.item13': '• built another gpt wrapper at jamhacks',
    'blog.coding.item14': '• built a study buddy tool with friends at hack the valley',
    'blog.coding.item15': '• built a music boombox thing at uoft hacks',
    'blog.coding.item16': '• built the first version of my personal website',
    'blog.coding.item17': '• went to the university of waterloo for systems design engineering',
    'blog.coding.item18': '• learned intro to programming in c++ and built projects for school',
    'blog.coding.item19': '• built my resume in latex on overleaf',
    'blog.coding.item20': '• started to solve leetcode problems on a more regular basis',
    'blog.coding.item21': '• joined engineering design teams to learn how to code in organizations',
    'blog.coding.item22': '• joined ownr as a software engineer intern for the winter',
    'blog.coding.item23': '• learned about unit and integration tests',
    'blog.coding.item24': '• learned a lot of git commands including git cherry-pick',
    'blog.coding.item25': '• built a dependabot clone with a friend during my free time',
    'blog.coding.item26': '• built a trash sorter at hack the 6ix with rbc friends',
    'blog.coding.item27':
      '• worked in a production codebase developing internal tools for the team',
    'blog.coding.item28': '• learned typescript, next.js, vite and react and used postman a lot',
    'blog.coding.item29': '• messed around with postgres, sql and the debugger for the first time',
    'blog.coding.item30':
      '• got more familiar with the terminal and ai and used stack overflow still',
    'blog.coding.item31': '• won 2nd place by building a posture checking robot at utra hacks',
    'blog.coding.item32':
      '• took data structures and algorithms in c++ during second semester of uni',
    'blog.coding.item33':
      '• hopped on twitter where i learned a lot and met other cool cs students',
    'blog.coding.item34':
      '• started to take leetcode more serious and watched a ton of neetcode on yt',
    'blog.coding.item35': '• made an etl pipeline that processed customer feedback',
    'blog.coding.item36': '• built a discord summarizer bot using python for fun at 2am',
    'blog.coding.item37': '• used golang for the first time and built an image processor',
    'blog.coding.item38':
      '• made this facial recognition software for fun in python and typescript',
    'blog.coding.item39': '• tried learning haskell for the first time',
    'blog.coding.item40':
      '• built sql query parser with typescript and svelte for parsing flat json',
    'blog.coding.item42': '• landed a software engineering internship at textql for the fall',
    'blog.coding.item43': '• had to learn matlab for one of my uni courses during school',
    'blog.coding.item44': '• built a url shortener using golang and tailwind css hosted on railway',
    'blog.coding.item45': '• made a mini worse version of figma',
    'blog.coding.item46': '• did many takehomes and coding assignments',
    'blog.coding.item47': '• redesigned my entire personal website twice',
    'blog.coding.item48': '• coworker told me to start using iterm2 and i fell in love',
    'blog.coding.item49': '• used a lot of claude code, codex and cursor when programming',
    'blog.coding.item50': '• worked on the textql healthcare landing page',
    'blog.coding.item51': '• learned how to use the terminal better than before',
    'blog.coding.item52':
      '• worked at a startup and used a lot of go, python, typescript and svelte',
    'blog.coding.item53': '• worked on the ontology a lot at textql',
    'blog.coding.item54': '• did a lot of agentic and applied ai work',
    'blog.coding.item55': '• learned even more git commands including git bisect',
    'blog.coding.item56': '• broke prod at textql 4 times and learned how to debug and fix it',
    'blog.coding.item57': '• learned rust for the first time and built some random things',
    'blog.coding.item58': '• participated in a mercor ML model challenge with friend',
    'blog.coding.item59': '• did some benchmarking with web search apis for the first time',
    'blog.coding.item60': '• made a link route checker script',
    'blog.coding.item61': '• started learning some system design for programming',
    'blog.coding.item62': '• learned about grpc, wrote a blog on it',
    'blog.coding.item63': '• started contributing to open source projects like insforge',
    'blog.coding.item64':
      '• saw a cool website called uoftatlas.com and made a clone waterlooatlas',
    'blog.coding.item65':
      '• wrote a blog on my first engineering internship where i learned docker',
    'blog.coding.item66': '• updated sql query parser and learned about tokenization and AST',
    'blog.coding.item68': '• learned about vector embeddings during an interview',
    'blog.coding.item69': '• learned more about kubernetes from a blog',
    'blog.coding.item70': '• did 8 takehomes and learned a lot about pydantic',
    'blog.coding.item9': "• tried to make an interactive valentine's day website",
    'blog.coding.referencesTitle': 'references',
    'blog.ontology.title': 'why ontology for text-to-sql?',
    'blog.ontology.date': 'nicholas chen · november 21, 2025 · 10 min read',
    'blog.waterlooCoop.title': "my thoughts on waterloo's co-op program",
    'blog.waterlooCoop.date': 'nicholas chen · january 1, 2026 · 7 min read',
    'blog.waterlooCoop.note':
      'note: this is my experience from the engineering faculty co-op so content in this blog may differ from the other faculties including math, science, etc..',
    'blog.waterlooCoop.intro':
      "since studying at the university of waterloo, the most common thing i hear being talked about on campus is the school's co-op program. back in high school when i was still deciding between universities, the only school i really wanted to go to was waterloo for the sole reason that they had their own co-op program. i had heard many great things about the opportunities offered, the different countries you could work in and how all the students in every graduating class would always have jobs lined up because of the 2+ years of work experience that gave them that extra advantage. now after being in the co-op program for a bit longer than a year i want to give my thoughts on it and how it has changed me and helped me at the same time.",
    'blog.waterlooCoop.exploringTitle': 'exploring cities, careers, and chaotic living',
    'blog.waterlooCoop.exploringP1':
      'during your time in waterloo engineering you will experience a ton of things and one of those will be doing 6 co-ops in 5 years every 4 months that get you 2 years of real work experience. this experience is extremely valuable because not a lot of students get to work in real work environments where they are challenged and treated like adults at such a young age. due to the fact that waterloo does a 4 month study term and 4 month co-op term that rotate between the two, it allows you to explore different career paths, live in different cities and also jump between startups and larger companies.',
    'blog.waterlooCoop.exploringImg1Alt': 'New York City',
    'blog.waterlooCoop.exploringImg1Caption': 'the view of upper east side close to sunset time',
    'blog.waterlooCoop.exploringP2':
      "many students i've seen have been able to travel to san francisco, new york, seattle and more. many jobs, especially in tech can be found frequently in those places. landing a co-op job there gives you a chance to leave your hometown to work, eat, sleep and explore a new city on your own for 4 months. you will also go through the thrill of finding housing, trying to make new friends and live frugal but it's all a good learning experience at the end of the day. also from personally having done this for my most recent co-op term, i had a lot of fun, learned a lot and it was definitely a term i won't ever forget.",
    'blog.waterlooCoop.exploringImg2Alt': 'Living space',
    'blog.waterlooCoop.exploringImg2Caption':
      'the house i was living in during my time in new york',
    'blog.waterlooCoop.exploringP3':
      "due to the fact that co-op is every 4 months it's quite often that you see students jump company from company and this is where you learn the most about what you enjoy doing and the type of companies you truly want to work for. a lot of things become more clear the more you work in diverse environments and that eventually helps you choose the perfect place after graduating.",
    'blog.waterlooCoop.learningTitle': 'learning how to get a job',
    'blog.waterlooCoop.learningP1':
      "the nature of waterloo's co-op is already very competitive and when you are surrounded by top talent all fighting for the same few jobs it takes a bit of agency and some hard work to get a good job nowadays.",
    'blog.waterlooCoop.learningP2':
      "one special part about waterloo's co-op program is the network of alumni that give back internship opportunities to new students through the co-op portal. companies like tesla, snowflake, bloomberg and more all post job postings directly through the site. many fast growing startups will also be seen and chances are either the founders or engineers used to study at waterloo.",
    'blog.waterlooCoop.learningP3':
      "recruiting for my very first job back in the fall of 2024 was pretty stressful because although i was able to return back to an old company the feeling of me going back didn't feel good. i ended up applying to every job that i saw externally and through the school's portal. i sent cover letters for every single one and even tried to personalize my resume for each specific job posting. this became very tiring and i eventually stopped doing that. although i landed a few interviews, i wasn't so good at interviewing and my technical skills weren't too strong. i think i ended up with around 14 interviews total by the end of the term but i only had one offer of which i declined. i ended up joining a startup that was acquired by the company i had worked at the summer previously. i didn't get a job i truly wanted, but i learned a lot during the 4 months through job searching, interviewing and learning to stand out.",
    'blog.waterlooCoop.learningImgAlt': 'Recruiting process',
    'blog.waterlooCoop.learningImgCaption':
      'this was my 1a term stats for recruiting fall 2024: 570 applications, 14 interviews, 1 offer',
    'blog.waterlooCoop.learningP4':
      "fast forward to just a year later and i've learned to find jobs through other ways, one of them by posting on twitter and building in public. going on twitter in january of 2025 was the best thing i could've done to prepare me for the next recruiting season. during this time i also tried to do more hackathons, build more side projects and show them on twitter and linkedin. most waterloo students eventually adapt to this and begin finding opportunities on their own. you will see that most hackathons are filled with waterloo students as well as other competitions in general. everyone cold emails founders, posts on twitter and reaches out through linkedin. one thing i have noticed probably due to the co-op program is that waterloo students develop or tend to have high agency because that's the only way one can stand out in a crowd of talent.",
    'blog.waterlooCoop.learningP5':
      "this is also something i've learned throughout being in the program and after interviewing with many companies now in my third co-op search i've gotten much better at interviewing and my technical skills have improved quite a bit since last year.",
    'blog.waterlooCoop.employmentImgAlt': 'Employment statistics',
    'blog.waterlooCoop.employmentImgCaption': 'employment statistics for syde 1b',
    'blog.waterlooCoop.commitmentTitle': 'commitment issues',
    'blog.waterlooCoop.commitmentP1':
      'something i have noticed particularly only in waterloo students is that a lot of them including myself have commitment issues and i believe it stems from always looking for a job.',
    'blog.waterlooCoop.commitmentP2':
      "in engineering (stream 4) you are forced into recruiting within the first week of university so while everyone else at other universities is partying, side questing and making friends, you have to lock in and find a job. now since each term is only 4 months long the recruiting cycle comes back every 4 months and sometimes recruiters will post job postings even up to 10 months in advance so most people are recruiting all year round. even during the current co-op term you are already thinking about the next. this is something i talked to with a friend and he mentioned it as well on how most of us can't stay loyal to a company because of the fact we are constantly thinking about the next thing in our career.",
    'blog.waterlooCoop.commitmentP3':
      "on top of that because there are 6 terms and everyone at school constantly reminds us to try new things it's hard to go back and a lot of people including me all agree on the fact that we would never do a co-op at the same company twice due to lack of gaining more experience.",
    'blog.waterlooCoop.commitmentImgAlt': 'Learning curve over time',
    'blog.waterlooCoop.commitmentImgCaption':
      'graph to show amount of learning happening over time at a company',
    'blog.waterlooCoop.salariesTitle': 'salaries and total compensation',
    'blog.waterlooCoop.salariesP1':
      "money is also a concern for a lot of us because that's why everyone is here. everyone has heard about how the co-op program earnings basically shave off all your tuition money so university is basically free.",
    'blog.waterlooCoop.salariesP2':
      'total compensation (tc) is usually the base pay + housing stipend + relocation. in canada, you\'re looking at anywhere from $25 to $50 cad/hour. big banks and local startups usually sit on the lower end, while companies like shopify or amazon (toronto) pay towards the top. the real jump happens when you "cali or bust," a term coined by waterloo students when someone must go to california for a co-op. us internships pay in usd, and the conversion alone makes you feel rich. big tech in sf or nyc usually pays $50 to $90 usd/hour. once you add a $3k–$5k monthly housing stipend, your effective monthly tc can easily hit $10k–$15k usd. it\'s honestly life-changing money for someone in their twenties.',
    'blog.waterlooCoop.salariesP3':
      'i think this is also something that was developed from my parents and the people around me but making a lot of money seemed to matter and as a result i spent a lot of time on',
    'blog.waterlooCoop.salariesImgAlt': 'levels.fyi salary data',
    'blog.waterlooCoop.salariesImgCaption':
      'levels.fyi salary data for software engineer intern positions at ramp in new york',
    'blog.waterlooCoop.prestigeTitle': 'status symbols and the prestige ladder',
    'blog.waterlooCoop.prestigeP1':
      'the obsession with prestige at waterloo is everywhere and creates a strict ranking where a student\'s value is tied to the company name on their linkedin profile. from the first semester, the "cali or bust" mentality takes over the culture. landing a role at google, meta, or a quant firm like jane street makes a student highly respected, while other jobs are often seen as not as good. on one side of this split is the "comfortable" big tech path, defined by big signing bonuses, nice perks, and a work-life balance that lets you move up in your career because of the company name.',
    'blog.waterlooCoop.prestigeP2':
      'on the other hand, some students go for "more control" within the startup world, often working a 996 schedule from 9am to 9pm six days a week. they focus on quickly building important features over personal time. this split creates an unhealthy environment where everyone compares themselves and students subtly compete by showing off their total compensation and sometimes keep interview materials secret. in the end, the culture often cares more about how a job looks and its benefits than the actual work itself.',
    'blog.waterlooCoop.prestigeImgAlt': 'Tech company logos',
    'blog.waterlooCoop.prestigeImgCaption':
      'major tech companies that waterloo students aspire to work for (MANGO)',
    'blog.waterlooCoop.miscTitle': 'miscellaneous things',
    'blog.waterlooCoop.miscUnemploymentTitle': 'unemployment & alternatives',
    'blog.waterlooCoop.miscUnemployment':
      "not everyone gets a job every term, especially with how the market is right now. if you don't end up getting one, there's we accelerate, which is basically a project-based backup for first years to get some credits and skills so the term isn't a total waste. a lot of people also pour their time into design teams. honestly, spending a term working hard on waterloo rocketry or formula sae can sometimes teach you more than a corporate internship would anyway, and it looks great on a resume.",
    'blog.waterlooCoop.miscEvalsTitle': 'evals & ratings',
    'blog.waterlooCoop.miscEvals':
      "at the end of every term, your boss gives you a rating—anything from satisfactory to outstanding. it's kind of stressful because these ratings stay on your co-op record forever. future employers see them when you apply through waterlooworks, so you're always performing to make sure you don't end up with a \"marginal\" that ruins your next search. also because so many waterloo students are tryhards the average rating is an excellent which is the second highest just under outstanding due to the fact that the employer must write an entire paragraph explaining why the intern should get that rating.",
    'blog.waterlooCoop.miscPDTitle': 'pd courses',
    'blog.waterlooCoop.miscPD':
      'everyone at waterloo hates pd courses. they\'re these mandatory online modules you have to do while you\'re working full-time. it\'s usually stuff like "how to write an email" or "workplace ethics." they feel like a massive chore when you just want to focus on your job, but you have to pass them to get that co-op designation on your degree.',
    'blog.waterlooCoop.miscVisasTitle': 'visas and the border',
    'blog.waterlooCoop.miscVisas':
      "if you land a job in the us, you have to deal with the whole j-1 visa mess or if you're canadian maybe even a TN. it's a lot of paperwork, sevis fees, and waiting for ds-2019 forms to arrive in the mail. you basically become a part-time immigration lawyer for a month. then there's the stress of crossing the border and hoping the officer doesn't have a bad day. it's a lot of \"legal border stuff\" just to go work in the states for four months, but the hassle is definitely worth it for the experience.",
    'blog.waterlooCoop.conclusionTitle': 'conclusion',
    'blog.waterlooCoop.conclusionP1':
      'overall, the waterloo co-op program is a trade-off. you get a massive head start on your career, financial independence, and the chance to live in new cities every four months. it forces you to grow up fast and learn how to work in the professional world before you even graduate.',
    'blog.waterlooCoop.conclusionP2':
      'however, the system also creates a lot of pressure. the constant cycle of recruiting and the obsession with prestige can make it feel like you are always behind. it is easy to focus only on the money and the brand names instead of the actual learning. the program is not perfect, but the experience is unique. even with the constant comparison and the stress of the job search, the technical skills and ability to take action you develop make the process worth it.',

    // First Internship blog content
    'blog.firstInternship.title': 'reflecting on my first engineering internship',
    'blog.firstInternship.date': 'nicholas chen · august 5, 2025 · 5 min read',
    'blog.firstInternship.intro':
      "this winter, i had my very first real co-op experience as a software engineer intern at ownr. i made a lot of mistakes and learned a lot as well. looking back now just a year ago got me thinking about how far i've come so i wanted to write about this experience because it taught me more about software engineering and the corporate life than i ever would've learned.",
    'blog.firstInternship.howGotTitle': 'how i got this internship',
    'blog.firstInternship.howGotText1':
      "last summer, i applied to rbc's summer tech labs program for high schoolers who were interested in engineering and wanted to get ahead and start working before university and had a great time and made many friends. when the recruiting season came around for the first time in the first semester of waterloo, i eventually ended up taking a return offer to work in rbc's ventures sector, where all the startups that they've acquired over the past few years live.",
    'blog.firstInternship.howGotText2':
      'a vivid memory i had from my first day was meeting my manager and the entire team at 9:30am and immediately getting to work. i set up my computer and started diving into the company codebase, feeling both excited and overwhelmed by what was to come.',
    'blog.firstInternship.mistakesTitle': 'mistakes and lessons learned',
    'blog.firstInternship.mistakesIntro':
      'throughout my term i learned a lot from making many mistakes especially since this was my first real internship. here are some of the more important ones:',
    'blog.firstInternship.mistake1': 'asking too many "dumb" questions',
    'blog.firstInternship.mistake2': 'not having high agency',
    'blog.firstInternship.mistake3':
      'not taking time and trying to problem solve alone before asking for help',
    'blog.firstInternship.mistake4': 'not interacting with my other co-workers enough',
    'blog.firstInternship.mistakesLearning':
      'throughout the term, i learned a huge amount just from the mistakes i made, especially since this was my first real internship. one of the biggest hurdles was asking too many "dumb" questions and generally not having enough agency. whenever i hit a wall, my instinct was to immediately ask for help instead of taking the time to really struggle and problem solve alone. i realized later that asking for help too early wasn\'t just distracting for the team, but it was robbing me of the chance to actually figure it out myself.',
    'blog.firstInternship.mistakesCoWorkers':
      'i also really regretted not interacting with my co-workers enough. i was so focused on the work and trying to prove myself that i often isolated myself at my desk. i missed out on the social aspect like grabbing lunch or just chatting in the hallway which i now realize is huge. it made the term feel a lot more isolating than it needed to be, and i missed out on learning from their experiences outside of just the technical stuff.',
    'blog.firstInternship.goodTitle': 'things i believe i did well:',
    'blog.firstInternship.good1': 'connected with my manager and communicated with him frequently',
    'blog.firstInternship.good2': 'learned how to code and debug without ai',
    'blog.firstInternship.aiEmphasis':
      "i want to highlight this specifically because growing up alongside ai tools has changed the way i do many things compared to my older friends and family. they have been a huge part of my workflow since high school, so learning to code and debug without them felt like i was going back in time and relearning everything all over again. i remember reading mdn web docs, stack overflow and even looking at documentation for some programming languages. me right now probably would've laughed because since then ai has become so good most of those websites and resources are considered ancient nowadays.",
    'blog.firstInternship.codingWithoutAiTitle': 'coding and debugging without ai',
    'blog.firstInternship.workExperienceTitle': 'working at ownr',
    'blog.firstInternship.codingWithoutAiText1':
      "due to strict restrictions on my rbc laptop, i wasn't allowed to use external ai tools, youtube, or most documentation sites. the only ai tool available was copilot in vscode, which was far from ideal.",
    'blog.firstInternship.codingWithoutAiText2':
      "debugging with copilot was frustrating. i'd ask it questions about the codebase or request it to index certain files, but it would return fabricated information or make things up entirely. after repeatedly trying to prompt it correctly, i often gave up and debugged manually instead. this forced me to learn new languages, frameworks and work manually which sounds funny because now ai can just do it. i remember console logging everything and using the debugger for the first time.",
    'blog.firstInternship.codingWithoutAiText3':
      "i primarily worked on internal tools for ownr's admin team, using nestjs, typescript, and express.js. i also learned how to work with postgres, redis, and got hands-on experience with docker and ci/cd pipelines.",
    'blog.firstInternship.debuggerTitle': 'the debugger',
    'blog.firstInternship.debuggerText':
      "the debugger was a game-changer. i remember debugging a tricky bug where data was being sent with the wrong type. the debugger allowed me to set breakpoints and step through the code, watching each input and output in the sidebar as i progressed. it was the first time i truly understood how powerful proper debugging tools could be. i found myself constantly on stack overflow trying to sus out which solutions were the correct fix for my specific errors since copilot couldn't help with these issues. i also spent two full weeks fixing and resolving dependencies across multiple repositories. those two weeks felt like an endless chase down stack overflow rabbit holes.",
    'blog.firstInternship.environmentTitle': 'the work environment',
    'blog.firstInternship.environmentText':
      'aside from the work itself, i loved the environment. it had that sort of startup energy—fast-paced and dynamic. most of the team dressed casually, with rarely anyone in suits or formal wear. despite the relaxed dress code, everyone was incredibly professional. the office itself felt like something out of a corporate movie: a 30-floor building with elevators, key card access, meeting rooms everywhere, and large desks with dual monitors.',
    'blog.firstInternship.reflectionsTitle': 'reflections',
    'blog.firstInternship.reflectionsText1':
      "there were many times when i asked questions that i could have answered myself, or when i was so focused on work that i didn't take breaks or eat lunch with my co-workers. this made the term feel slower and less engaging than it could have been.",
    'blog.firstInternship.reflectionsText2':
      "my manager was tough on me and intentionally pushed me to struggle because he knew that's where the real learning happens. looking back, he was one of the main reasons i learned so much, and i'm incredibly grateful. over time, we bonded and talked about internships, finding co-op jobs, and interview prep. leetcode came up often, and he gave me valuable advice. he was one of the best engineers i've ever met, and our whole team respected him.",
    'blog.firstInternship.managerTitle': 'my manager',
    'blog.firstInternship.managerText':
      "my manager was intentionally tough on me. he loved seeing me struggle because he knew that's where the deepest learning happens. he was one of the main reasons i learned so much, and i'm incredibly grateful for his mentorship and his belief in me. a manager can be the reason for a make or break internship so i'm glad i got a good one. over time, we bonded over conversations about internships, finding co-op jobs, and interview prep. he talked to me about leetcode and how it was a frequent topic when he was in university too. he was one of the best engineers i've ever met, and the entire team held him in high regard.",
    'blog.firstInternship.conclusionTitle': 'conclusion',
    'blog.firstInternship.conclusionText':
      "overall, this internship was super fun and i learned a lot during the four months. still, i wish i had done more and pushed myself further. this experience taught me that growth happens when you step outside your comfort zone, and i'm grateful for every mistake and lesson learned.",

    // Git blog content
    'blog.git.intro':
      "through various work experiences and side projects, i've picked up a lot of git commands that have saved my life more than once. i wanted to create a central place to store all these commands for easy reference.",
    'blog.git.mentalModelTitle': 'mental model',
    'blog.git.mentalModelText':
      'git is a distributed version control system (local). github is a hosting platform (online). most of us memorize commands without understanding the graph model underneath.',

    // Ontology blog content
    'blog.ontology.whatIsTitle': 'what is an ontology?',
    'blog.ontology.whatIsP1':
      'you may have heard of the term "ontology" before, either used by palantir folks or others, but it\'s something that among many people are not familiar with and was something i also learned a few months ago when i started working at textql. more recently, i actually had the chance to work on the ontology and explore more about how it works with our product and how to make it easier for customers to use. there are many different types of ontologies but in this article i want to focus on the one that formally defines data and why we use it for text-to-sql queries.',
    'blog.ontology.whatIsP2':
      "the google definition of an ontology is: a set of concepts and categories in a subject area or domain that shows their properties and the relations between them. if that doesn't make sense basically a fancy word for making a map of everything and how they connect to each other.",
    'blog.ontology.mapAlt': 'A map showing how objects connect in an ontology',
    'blog.ontology.whatIsP3':
      'an ontology consists of entities, attributes, relationships, metrics and business rules. each of these are crucial for building a well-structured ontology. an entity is essentially an object that you can think of as a "thing" that your business cares about. while not required, entities often have a primary key that prevents double-counting and enables proper aggregation. each of these objects hold attributes which are like characteristics that describe the object. then there\'s relationships that basically connect each of these objects based on how they are related. these relationships work through joins - when entities share common fields that can be matched together, creating connections like one-to-many or many-to-many. for metrics, these are defined across multiple objects and can be done through a calculation of some sort. lastly, there are business rules that just define how your business operates and the meaning of specific terms or phrases.',
    'blog.ontology.simpleExampleTitle': 'a simple example',
    'blog.ontology.simpleExampleP1':
      'here\'s a simple example using customers. a customer is someone who buys from your business. they have basic information like their name, email, and when they signed up. customers connect to other things in your business through joins: they place orders, contact support, and sometimes refer friends. you can measure things about customers like how much they\'ve spent total or how often they buy. finally, you set rules that define what certain terms mean, like "active customer" means someone who bought something in the last 90 days, or "vip customer" means someone who has spent over $5,000. all these pieces work together to give you a complete picture of what a customer means to your business through an ontology object.',
    'blog.ontology.whyMatterTitle': 'why ontologies matter for text-to-sql',
    'blog.ontology.whyMatterP1':
      "if you're curious as to why this is useful for text-to-sql queries, there are many upsides to having an ontology when queries many databases especially when they are enterprise size.",
    'blog.ontology.whyMatterP2':
      'when data analysts are writing complex queries these queries must be defined through the use of joins and company specific business logic. this wastes a lot of time as a lot of SQL is repeated and overcomplicated. with an ontology layer, you can abstract away this complexity by defining business entities, relationships, and metrics once. instead of every analyst needing to remember that "active customers" means users who made a purchase in the last 90 days and requires joining the users table with the orders table filtered by date, the ontology captures this definition centrally. this means when someone asks "show me revenue by active customer segment," the system already knows important information such as:',
    'blog.ontology.whyMatterLi1': 'which tables to join',
    'blog.ontology.whyMatterLi2': 'what filters to apply',
    'blog.ontology.whyMatterLi3': 'how to calculate the metric correctly',
    'blog.ontology.whyMatterLi4': 'what the proper grain of analysis should be',
    'blog.ontology.graphsAlt':
      'Graphs showing the comparison between ontology vs non-ontology sql queries',
    'blog.ontology.whyMatterP3':
      'this means consistency across the organization, faster query generation, easier maintenance, lower barrier to entry, governance and security. essentially, the ontology becomes a semantic layer that translates between how humans think about the business and how data is actually stored in tables. it captures institutional knowledge about the data that would otherwise live in documentation, tribal knowledge, or the heads of senior analysts.',
    'blog.ontology.whyMatterP4':
      'ontologies can also improve performance. a well-designed ontology might define a metric using a pre-aggregated table instead of scanning raw data. it might know to use an indexed column for joins. it captures optimization knowledge that would otherwise require manual query tuning.',
    'blog.ontology.buildingTitle': 'building an ontology from scratch',
    'blog.ontology.buildingP1':
      'now that you understand the basics of what an ontology is and why large organizations may want to use one, learning how to build an ontology is just as important.',
    'blog.ontology.addingObjectsAlt': 'Creating an object or link in ontology',
    'blog.ontology.buildingP2':
      "when building an ontology, you begin with your core entities - the things your business literally cannot function without. for an e-commerce company, that's customers, orders, and products. for a saas company, it's users, subscriptions, and usage events. identify maybe 3-5 critical entities and define them thoroughly: their attributes, their primary keys, and the most important relationships between them.",
    'blog.ontology.buildingP3':
      "when choosing a primary key, pick a stable identifier that doesn't change over time, usually an id field like customer_id rather than something like email that might change. this determines the grain of your entity and prevents double-counting when you aggregate metrics. without a proper primary key, you risk counting the same customer twice or splitting their history across multiple identities.",
    'blog.ontology.buildingP4':
      'for relationships, focus on connections that represent real business flows and answer common questions. if people frequently ask "show me revenue by customer segment," you need a clear path from orders to customers. start with the relationships that enable your most important analyses rather than trying to map every possible connection upfront.',
    'blog.ontology.buildingP5':
      'then add the metrics that people ask about every single day. "what\'s our revenue?" "how many active users do we have?" "what\'s our conversion rate?" these are the questions that get asked in every morning meeting. define these once in the ontology with the correct business logic, and suddenly dozens of repeated queries become obsolete.',
    'blog.ontology.buildingP6':
      'the key is to prove value quickly. if you spend six months building a comprehensive ontology before anyone can use it, you\'ll lose organizational buy-in. but if you can show that three weeks of work eliminated the confusion around "active customers" and made that metric consistent across all reports, suddenly people want more entities in the ontology.',
    'blog.ontology.attrsAlt': 'Creating attributes and editing object properties',
    'blog.ontology.goodEnoughTitle': 'when is an ontology "good enough"?',
    'blog.ontology.goodEnoughP1':
      "an ontology is never complete. there will always be edge cases, niche metrics, and one-off analyses that don't fit neatly into your defined entities and relationships. the goal isn't perfection - it's coverage of the common cases. if your ontology handles 80% of the questions people ask, that's a massive win. the remaining 20% can still be handled with custom sql or ad-hoc analysis.",
    'blog.ontology.goodEnoughP2': 'you know your ontology is "good enough" when:',
    'blog.ontology.goodEnoughLi1':
      'new analysts can answer common questions without asking for help',
    'blog.ontology.goodEnoughLi2':
      'the same metrics stop appearing with different values in different reports',
    'blog.ontology.goodEnoughLi3':
      'people start asking "is this in the ontology?" before writing custom queries',
    'blog.ontology.goodEnoughLi4': "you're spending more time using the ontology than building it",
    'blog.ontology.howEnginesTitle': 'how text-to-sql engines use ontologies',
    'blog.ontology.howEnginesP1':
      'when you ask "show me revenue by customer segment," the text-to-sql engine goes through several steps using the ontology.',
    'blog.ontology.howEnginesP2':
      'first, it identifies the entities and metrics you\'re asking about. "revenue" maps to a defined metric in the ontology. "customer segment" maps to an attribute of the customer entity.',
    'blog.ontology.howEnginesP3':
      "next, it looks up the metric definition. the ontology says revenue is calculated as sum(orders.total_amount) where orders.status = 'completed'. it also knows that revenue is associated with the orders entity.",
    'blog.ontology.howEnginesP4':
      'then it determines the necessary joins. you asked for revenue by customer segment, so the engine needs to connect orders to customers. the ontology defines this relationship: orders.customer_id = customers.id. it knows this is a many-to-one relationship (many orders per customer).',
    'blog.ontology.howEnginesP5':
      'finally, it applies any business rules. maybe the ontology specifies that revenue calculations should exclude refunds, or that only orders from the last 12 months count. these rules get automatically incorporated into the generated sql. the result is a query that would take a human analyst 10 minutes to write (and possibly get wrong), generated correctly in seconds.',
    'blog.ontology.chatAlt': 'Querying a test database with Ana using the text-to-sql feature',
    'blog.ontology.ambiguityTitle': 'handling ambiguity',
    'blog.ontology.ambiguityP1':
      'ambiguous questions are where ontologies really shine. if you ask "show me sales," that could mean the sales team (entity), sales transactions (orders entity), sales revenue (metric), or sales count (different metric). without an ontology, the system has to guess. with an ontology, it can recognize that "sales" is ambiguous, check which interpretation makes sense in context, ask for clarification if needed ("did you mean sales revenue or number of sales?"), and use the most common interpretation based on usage patterns.',
    'blog.ontology.ambiguityP2':
      'the ontology also helps with synonyms. "customers," "clients," "accounts," and "buyers" might all map to the same customer entity.',
    'blog.ontology.vsOtherTitle': 'ontologies vs other approaches',
    'blog.ontology.vsOther.dbtTitle': 'dbt models:',
    'blog.ontology.vsOther.dbtText':
      'dbt models and ontologies solve different problems. dbt transforms raw data into clean tables. an ontology sits on top of those tables and defines what they mean: which table represents customers, how customers relate to orders, and how to optimize queries. you can use both together: dbt produces tables, ontologies produce understanding.',
    'blog.ontology.vsOther.biTitle': 'bi semantic layers:',
    'blog.ontology.vsOther.biText':
      'tools like looker and tableau have their own semantic layers. looker has lookml, tableau has data sources with relationships. these serve similar purposes to ontologies - they define metrics, relationships, and business logic. the difference is scope and flexibility. traditional bi semantic layers are tightly coupled to their visualization tools. the definitions you create in looker only work in looker. if you want to use the same logic in python, or in a different bi tool, or in an automated pipeline, you\'re out of luck. an ontology is tool-agnostic. it\'s a central definition layer that can power text-to-sql queries, bi tools, python analysis, automated reports, and custom applications. you define "active customers" once, and it works everywhere.',
    'blog.ontology.vsOther.viewsTitle': 'views and stored procedures:',
    'blog.ontology.vsOther.viewsText':
      "views and stored procedures can encapsulate business logic, so why do you need an ontology? first, discoverability. if you have 500 views in your database, how do you know which one to use? an ontology provides a structured catalog with relationships and documentation. second, relationships. a view gives you a table, but it doesn't tell you how that table relates to other tables. an ontology explicitly defines these connections, enabling automatic join generation. third, natural language. you can't ask a view \"show me revenue by customer segment\" in plain english. you need to know the view exists, what it's called, and how to query it. an ontology enables natural language interfaces. views are a technical solution for code reuse. ontologies are a semantic solution for shared understanding.",
    'blog.ontology.sourcesAlt': 'Different tools comparing ontologies vs other methods',
    'blog.ontology.futureTitle': 'the future for ontologies',
    'blog.ontology.futureP1':
      'with the rise of llms, ontologies are actually going to be more valuable than ever. ai models are great at understanding natural language but terrible at knowing your specific business logic. gpt-5 doesn\'t know that your company defines "active customers" as 90-day activity, or that revenue should exclude certain transaction types, or that the customer table joins to orders via a specific foreign key. the ontology provides this context. it\'s the bridge between the llm\'s language understanding and your company\'s data reality. the llm handles the "what is the user asking?" part, the ontology handles the "how do we actually calculate that?" part. as llm models get better, ontologies become the key differentiator in how efficient and accurate users can query their large databases.',
    'blog.ontology.futureP2':
      'imagine an ontology that evolves based on how people use it. when analysts repeatedly write similar custom queries, the system suggests adding those patterns to the ontology. when a metric definition gets manually overridden frequently, the system flags it for review. this is already starting to happen. systems can track which entities are queried together frequently and suggest adding explicit relationships. they can identify common calculated fields and propose promoting them to official metrics.',
    'blog.ontology.futureP3':
      "as data landscapes grow more complex - more sources, more tables, more tools, more users - the need for ontologies increases exponentially. without an ontology, complexity scales badly. every new data source requires everyone to learn new table structures. every new analyst needs to be trained on all the business logic. every new tool needs custom integration. with an ontology, complexity scales linearly. new data sources get mapped to existing entities. new analysts learn the ontology once. new tools integrate with the ontology layer. the future of data isn't less complex - it's more complex but better organized. ontologies are how we manage that complexity without drowning in it.",
    'blog.ontology.referencesTitle': 'references',
    'blog.ontology.references.builtin': 'builtin.com/data-science/ontology',
    'blog.ontology.references.palantir': 'blog.palantir.com - ontology finding meaning in data',
    'blog.ontology.references.palantirDocs': 'palantir.com/docs/foundry/ontology/overview',
    'blog.ontology.references.textql': 'docs.textql.com - ontology overview',
    'blog.ontology.note': 'note: all images in the original article were generated or taken from',

    // Sample prompts
    prompt1: 'Tell me about your experience at Ownr',
    prompt2: 'What projects have you worked on?',

    // Money making
    'moneyMaking.text':
      "I've done pretty much everything you can think of that a teenager can do to make money: tutoring, working fast food jobs, selling things, shoveling the snow off neighbour's driveways, internships, freelance work in design and coding as well as brand deals from social media.",

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

    // Blog git content
    'blog.git.coreConceptsTitle': 'core concepts',
    'blog.git.coreConcepts.snapshotsTitle': 'snapshots, not diffs',
    'blog.git.coreConcepts.snapshotsText':
      "git stores a full snapshot of your project with every commit, not just the differences. if a file hasn't changed, it stores a pointer to the previous version.",
    'blog.git.coreConcepts.threeTreesTitle': 'the three trees',
    'blog.git.coreConcepts.threeTrees.working': 'working directory: files you see/edit.',
    'blog.git.coreConcepts.threeTrees.staging': 'staging area (index): changes ready for commit.',
    'blog.git.coreConcepts.threeTrees.head': 'HEAD: pointer to the last commit.',
    'blog.git.setupTitle': 'setup & config',
    'blog.git.setup.configUserName': 'set your username for commits.',
    'blog.git.setup.configUserEmail': 'set your email for commits.',
    'blog.git.setup.configColor': 'enable helpful color output.',
    'blog.git.setup.configList': 'show all configuration settings.',
    'blog.git.setup.alias': "create a shortcut: type 'git co' instead of 'git checkout'.",
    'blog.git.setup.editor': 'set vs code as default editor for commit messages.',
    'blog.git.gettingTitle': 'getting & creating projects',
    'blog.git.getting.init': 'initialize a new repo in current directory.',
    'blog.git.getting.clone': 'download a repo and its entire history.',
    'blog.git.getting.cloneDepth': 'shallow clone (latest snapshot only, faster).',
    'blog.git.basicTitle': 'basic snapshotting',
    'blog.git.basic.amendNoEdit': 'add staged changes to last commit without changing message.',
    'blog.git.basic.status': 'show modified, staged, and untracked files.',
    'blog.git.basic.addFile': 'stage a specific file for the next commit.',
    'blog.git.basic.addAll': 'stage all changes in current directory.',
    'blog.git.basic.addPatch': 'interactively choose chunks of code to stage.',
    'blog.git.basic.commitMsg': 'save staged changes as a new snapshot.',
    'blog.git.basic.commitAm': 'stage tracked files and commit in one step.',
    'blog.git.basic.rm': 'remove a file from working tree and index.',
    'blog.git.basic.mv': 'move or rename a file.',
    'blog.git.branchingTitle': 'branching & merging',
    'blog.git.branching.switchDash': 'quickly switch back to the previous branch.',
    'blog.git.branching.merged': 'list branches already merged into current.',
    'blog.git.branching.mergeBase': 'find the common ancestor of two branches.',
    'blog.git.branching.branch': 'list all local branches.',
    'blog.git.branching.branchName': 'create a new branch (pointer).',
    'blog.git.branching.branchD': 'delete a merged branch safely.',
    'blog.git.branching.branchDForce': 'force delete a branch (even if unmerged).',
    'blog.git.branching.switchName': 'switch to a branch.',
    'blog.git.branching.switchC': 'create and switch to a new branch.',
    'blog.git.branching.merge': 'combine history of another branch into current.',
    'blog.git.branching.mergeAbort': 'cancel a merge in progress and return to pre-merge state.',
    'blog.git.branching.tag': 'mark the current commit with a tag.',
    'blog.git.branching.tagA': 'create an annotated tag with metadata.',
    'blog.git.sharingTitle': 'sharing & updating',
    'blog.git.sharing.remoteRename': 'rename a remote connection.',
    'blog.git.sharing.pushDelete': 'delete a remote branch.',
    'blog.git.sharing.remoteV': 'list all remote repositories.',
    'blog.git.sharing.remoteAdd': 'connect local repo to a remote one.',
    'blog.git.sharing.remoteSetUrl': 'change the url of an existing remote.',
    'blog.git.sharing.fetch': "download changes from remote but don't merge.",
    'blog.git.sharing.fetchPrune': 'delete local refs to remote branches that were deleted.',
    'blog.git.sharing.pull': 'fetch + merge (update current branch).',
    'blog.git.sharing.push': 'upload local commits to remote.',
    'blog.git.sharing.pushU': 'push and set upstream tracking.',
    'blog.git.sharing.pushForceLease': 'safer force push; fails if someone else pushed.',
    'blog.git.sharing.pushTags': 'push all local tags to remote.',
    'blog.git.inspectionTitle': 'inspection & comparison',
    'blog.git.inspection.logS': 'search history for the first occurrence of a string.',
    'blog.git.inspection.logAuthor': 'filter commit history by author.',
    'blog.git.inspection.logSince': 'show commits from a specific timeframe.',
    'blog.git.inspection.log': 'show commit history.',
    'blog.git.inspection.logOneline': 'visualize commit history graph compactly.',
    'blog.git.inspection.shortlog': 'show summary of commits by author.',
    'blog.git.inspection.diff': 'show unstaged changes.',
    'blog.git.inspection.diffStaged': 'show staged changes (what will be committed).',
    'blog.git.inspection.diffWord': 'highlight changed words instead of whole lines.',
    'blog.git.inspection.show': 'show changes and metadata for a specific commit.',
    'blog.git.inspection.blame': 'show who modified each line of a file.',
    'blog.git.inspection.blameL': 'blame only lines 10 through 20.',
    'blog.git.inspection.grep': 'search for text inside tracked files.',
    'blog.git.undoTitle': 'undo & fix',
    'blog.git.undo.checkoutHash': 'restore a file to a specific past version.',
    'blog.git.undo.updateRef': 'effectively "un-initialize" the first commit of a repo.',
    'blog.git.undo.resetSoft': 'undo last commit but keep changes staged.',
    'blog.git.undo.resetHard': 'undo last commit and discard all changes (dangerous).',
    'blog.git.undo.revert': 'create new commit that reverses a previous one.',
    'blog.git.undo.restore': 'discard local changes in a file.',
    'blog.git.undo.restoreStaged': 'unstage a file (keep changes in working directory).',
    'blog.git.undo.commitAmend': 'add staged changes to previous commit / edit message.',
    'blog.git.advancedTitle': 'advanced & power tools',
    'blog.git.advanced.rebaseI': 'interactively rewrite history: squash, fixup, reorder, or drop.',
    'blog.git.advanced.rebase': 'reapply commits on top of another base tip.',
    'blog.git.advanced.stash': 'temporarily shelve dirty changes.',
    'blog.git.advanced.stashPop': 'reapply stashed changes and remove from stash list.',
    'blog.git.advanced.stashList': 'list all stashed changesets.',
    'blog.git.advanced.stashU': 'stash including untracked files.',
    'blog.git.advanced.bisectStart':
      'start binary search to find the commit that introduced a bug.',
    'blog.git.advanced.cherryPick': 'apply the changes from a specific commit.',
    'blog.git.advanced.reflog': 'show a log of all reference movements (recover lost commits).',
    'blog.git.advanced.worktreeAdd': 'checkout multiple branches in parallel folders.',
    'blog.git.advanced.submodule': 'fetch and update submodule dependencies.',
    'blog.git.advanced.rerere': 'reuse recorded resolution of conflicted merges.',
    'blog.git.adminTitle': 'administration',
    'blog.git.admin.clean': 'remove all untracked files and directories.',
    'blog.git.admin.gc': 'cleanup unnecessary files and optimize local repo.',
    'blog.git.admin.checkIgnore': 'debug why a file is being ignored.',
    'blog.git.admin.archive': 'export the current branch to a zip file.',
    'blog.git.admin.revParse': 'output the full SHA-1 hash of the current commit.',
    'blog.git.referencesTitle': 'references',
    'blog.git.references.docs': 'official git docs',
    'blog.git.references.dangit': 'dangit, git!',
    'blog.grpc.title': 'grpc',
    'blog.grpc.date': 'nicholas chen · january 11, 2026 · 9 min read',
    'blog.grpc.intro':
      "in modern software architecture, especially with microservices, the way services communicate is crucial. while rest has been the standard for a long time, grpc has emerged as a powerful alternative for many use cases. in this post, i'll explain what grpc is, how it works, and why you might want to use it.",
    'blog.grpc.whatIsTitle': 'what is gRPC?',
    'blog.grpc.whatIsText':
      'grpc (google remote procedure call) is an open-source remote procedure call framework initially developed by google. it allows a client application to directly call a method on a server application on a different machine as if it were a local object, making it easier to create distributed applications and services. unlike rest, which is resource-oriented, grpc is action-oriented.',
    'blog.grpc.howItWorksTitle': 'how it works',
    'blog.grpc.howItWorksText1':
      'this is typically done using protocol buffers (protobuf) in a .proto file. at a high level, gRPC allows you to define a service, specifying the methods that can be called remotely with their parameters and return types. the server implements this interface and runs a gRPC server to handle incoming calls. the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.',
    'blog.grpc.howItWorksText2':
      'by default, gRPC uses protocol buffers (protobuf) as its interface definition language (IDL) and as its underlying message interchange format. in REST, you often use JSON. with protobuf, you define the structure of your data once in a .proto file. then, you use the protoc compiler to generate data access classes in your preferred programming language. this binary format is much lighter and faster to serialize/deserialize than JSON.',
    'blog.grpc.whyGoodTitle': 'why is it good?',
    'blog.grpc.httpVsHttp2Title': 'HTTP/1.1 vs HTTP/2',
    'blog.grpc.rpcVsRestTitle': 'RPC vs REST',
    'blog.grpc.rpcVsRestText':
      'RPC focuses on actions (verbs) like "getUser", while REST focuses on resources (nouns) like "User". this makes gRPC feel more like calling a local function, simplifying distributed development.\n\nREST is great for public APIs where human readability (JSON) and browser support are important. it\'s flexible and widely understood. gRPC, on the other hand, excels in internal microservices communication where low latency and high throughput are critical. it\'s also strongly typed, which helps in maintaining large systems.',
    'blog.grpc.whyGoodText':
      "gRPC leverages HTTP/2's multiplexing, header compression, and binary framing for better efficiency than REST/HTTP/1.1. The .proto contract enables automatic code generation in multiple languages, ensuring type safety. Native streaming support (server, client, or bidirectional) makes it ideal for real-time apps, large file transfers, and long-lived connections.",
    'blog.grpc.httpVsHttp2Text':
      'gRPC uses HTTP/2 as its transport protocol, which provides significant improvements over HTTP/1.1. The following table compares the key features of both protocols.',
    'blog.grpc.architectureCaption': 'gRPC architecture: client stub and server stub interaction',
    'blog.grpc.protoExampleCaption': 'example .proto service definition',
    'blog.grpc.usingApiTitle': 'using the API',
    'blog.grpc.usingApiText':
      'starting from a .proto file, gRPC compiler plugins generate client- and server-side code. the server implements the service methods and runs a gRPC server to handle calls. the client uses a local stub object that implements the same methods, wrapping parameters in protocol buffer messages and sending requests to the server.',
    'blog.grpc.usingApiText2':
      'gRPC APIs support both synchronous (blocking) and asynchronous (non-blocking) calls, useful for different network operation scenarios.',
    'blog.grpc.serviceMethodTypesTitle': 'service method types',
    'blog.grpc.serviceMethodTypesIntro': 'gRPC lets you define four kinds of service methods:',
    'blog.grpc.serviceMethodTypesCaption': 'gRPC service method types',
    'blog.grpc.unaryRPCs': 'unary RPCs',
    'blog.grpc.unaryRPCsDesc': 'single request, single response.',
    'blog.grpc.serverStreamingRPCs': 'server streaming RPCs',
    'blog.grpc.serverStreamingRPCsDesc': 'client sends request, receives stream of messages.',
    'blog.grpc.clientStreamingRPCs': 'client streaming RPCs',
    'blog.grpc.clientStreamingRPCsDesc':
      'client sends stream of messages, receives single response.',
    'blog.grpc.bidirectionalStreamingRPCs': 'bidirectional streaming RPCs',
    'blog.grpc.bidirectionalStreamingRPCsDesc':
      'both sides send streams of messages independently.',
    'blog.grpc.deadlinesTitle': 'deadlines and timeouts',
    'blog.grpc.deadlinesText':
      "clients can specify how long to wait for an RPC before it's terminated with DEADLINE_EXCEEDED. servers can query timeout status and remaining time.",
    'blog.grpc.rpcTerminationTitle': 'RPC termination and cancellation',
    'blog.grpc.rpcTerminationText':
      'client and server make independent determinations of call success, so their conclusions may not match. either side can cancel an RPC at any time, which terminates it immediately. changes made before cancellation are not rolled back.',
    'blog.grpc.metadataTitle': 'metadata',
    'blog.grpc.metadataText':
      'metadata is key-value pairs containing information about an RPC call (e.g., authentication). keys are case-insensitive ASCII strings, must not start with grpc- (reserved), and binary-valued keys end in -bin.',
    'blog.grpc.channelsTitle': 'channels',
    'blog.grpc.channelsText':
      'a gRPC channel provides a connection to a server on a specified host and port, used when creating client stubs. clients can configure channel arguments to modify gRPC behavior (e.g., message compression). channels have state (connected, idle).',
    'blog.grpc.errorHandlingTitle': 'error handling',
    'blog.grpc.errorHandlingText':
      'gRPC uses a standardized error model with status codes. common status codes include OK, INVALID_ARGUMENT, NOT_FOUND, UNAVAILABLE, and DEADLINE_EXCEEDED. errors include both a status code and an optional error message, providing consistent error handling across languages.',
    'blog.grpc.securityTitle': 'security and authentication',
    'blog.grpc.securityText':
      "gRPC supports TLS (transport layer security) for encrypted communication between client and server. mTLS (mutual TLS) provides mutual authentication where both sides verify each other's certificates. authentication credentials can also be passed via metadata, allowing for various authentication mechanisms including OAuth2, JWT tokens, and API keys.",
    'blog.grpc.http2Caption': 'http/1.1 vs http/2 multiplexing',
    'blog.grpc.protobufVsJsonTitle': 'protocol buffers vs JSON',
    'blog.grpc.protobufCaption': 'protocol buffers definition and serialized format (binary)',
    'blog.grpc.jsonCaption': 'JSON format (human-readable text)',
    'blog.grpc.tableFeature': 'feature',
    'blog.grpc.tableMultiplexing': 'multiplexing',
    'blog.grpc.tableHeaderCompression': 'header compression',
    'blog.grpc.tableFraming': 'framing',
    'blog.grpc.tableServerPush': 'server push',
    'blog.grpc.tableRequestPrioritization': 'request prioritization',
    'blog.grpc.tableEfficiency': 'efficiency',
    'blog.grpc.tableMultiplexingNo': 'no (one request per connection)',
    'blog.grpc.tableMultiplexingYes': 'yes (multiple requests over single connection)',
    'blog.grpc.tableHeaderCompressionYes': 'yes (HPACK)',
    'blog.grpc.tableFramingText': 'text-based',
    'blog.grpc.tableFramingBinary': 'binary framing',
    'blog.grpc.tableEfficiencyHttp11': 'higher latency, more bandwidth',
    'blog.grpc.tableEfficiencyHttp2': 'lower latency, reduced bandwidth',
    'blog.grpc.tableTransport': 'transport',
    'blog.grpc.tableDataFormat': 'data format',
    'blog.grpc.tableStreaming': 'streaming',
    'blog.grpc.tableCodeGeneration': 'code generation',
    'blog.grpc.tableTypeSafety': 'type safety',
    'blog.grpc.tablePerformance': 'performance',
    'blog.grpc.tableBrowserSupport': 'browser support',
    'blog.grpc.tableProtobufBinary': 'protocol buffers (binary)',
    'blog.grpc.tableJsonText': 'JSON (text)',
    'blog.grpc.tableStreamingNative': 'native support',
    'blog.grpc.tableStreamingLimited': 'limited (SSE, WebSocket)',
    'blog.grpc.tableCodeGenAuto': 'automatic from .proto',
    'blog.grpc.tableCodeGenManual': 'manual',
    'blog.grpc.tableTypeSafetyEnforced': 'enforced by contract',
    'blog.grpc.tableTypeSafetyRuntime': 'runtime validation',
    'blog.grpc.tablePerformanceHigh': 'high (multiplexing, compression)',
    'blog.grpc.tablePerformanceLower': 'lower latency, more bandwidth',
    'blog.grpc.tableBrowserSupportLimited': 'limited (gRPC-Web required)',
    'blog.grpc.tableBrowserSupportNative': 'native',
    'blog.grpc.grpcWithGoTitle': 'gRPC with go',
    'blog.grpc.grpcWithGoText1':
      "gRPC and go are super compatible with each other. since both originated from google, gRPC support in go is first-class. the go ecosystem embraces gRPC for microservices due to go's concurrency model (goroutines) which handles HTTP/2 multiplexing efficiently.",
    'blog.grpc.grpcWithGoText2':
      'while go has excellent gRPC support, gRPC itself supports many languages including java, python, c++, node.js, rust, ruby, php, and more. code generation ensures consistent behavior across all language implementations.',
    'blog.grpc.grpcWithGoText3':
      'to use gRPC with go, define your service in a .proto file and use the protoc compiler with protoc-gen-go and protoc-gen-go-grpc plugins. this generates message structs and service interfaces. on the server, implement the generated interface and register it with grpc.NewServer(). on the client, use grpc.Dial() to connect and create a client stub. the generated code is idiomatic go.',
    'blog.grpc.goImageCaption': 'the go programming language',
    'blog.grpc.serverExampleCaption': 'example gRPC server implementation in go',
    'blog.grpc.clientExampleCaption': 'example gRPC client implementation in go',
    'blog.grpc.whenToUseTitle': 'when to use gRPC',
    'blog.grpc.whenToUseIntro': 'gRPC is ideal for:',
    'blog.grpc.whenToUse1':
      'microservices architectures where services need efficient, low-latency communication',
    'blog.grpc.whenToUse2':
      'real-time systems like chat applications, gaming backends, and live data feeds',
    'blog.grpc.whenToUse3':
      "mobile APIs that benefit from gRPC's binary format, reducing bandwidth usage and battery consumption",
    'blog.grpc.whenToUse4':
      'streaming use cases such as file transfers, log aggregation, and real-time analytics',
    'blog.grpc.widelyUsedBy': 'gRPC is widely used by:',
    'blog.grpc.widelyUsedBy1':
      'companies like google, netflix, and square for internal microservices communication',
    'blog.grpc.widelyUsedBy2': 'kubernetes for its API',
    'blog.grpc.widelyUsedBy3': 'cloudflare for edge computing',
    'blog.grpc.referencesTitle': 'references',
  },
};
