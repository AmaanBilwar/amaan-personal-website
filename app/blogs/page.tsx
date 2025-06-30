'use client';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import BlogInteractions from '@/components/blog-interactions';

export default function BlogsPage() {
    const { t, language, setLanguage } = useLanguage();
    const [expandedBlogs, setExpandedBlogs] = useState<number[]>([]);

    const toggleBlog = (index: number) => {
        setExpandedBlogs(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const blogs: Array<{
        title: string;
        url: string;
        description: string;
        fullContent?: string;
        titleZh?: string;
        descriptionZh?: string;
        fullContentZh?: string;
    }> = [
            {
                title: "how my grandpa (lao ye) shaped me into the man i am today",
                titleZh: "我的爷爷（老爷）如何塑造了今天的我",
                url: "https://medium.com/@nicholas.chen243/how-my-grandpa-lao-ye-shaped-me-into-the-man-i-am-today-b595fc74bbc0",
                description: "A personal reflection on family influence and life lessons",
                descriptionZh: "对家庭影响和人生教训的个人反思",
                fullContent: `usually you hear about all the fathers that have influenced their children in becoming a better man blah blah blah, but in my case, it was my grandpa or at home i call him lao ye in chinese.

my grandpa has always influenced me in many ways when it comes to money, way of life and education.

in grade 3 or 4, he would sit my little brother and i in the back of the car everyday when he picked me up from day care and make us both recite our times tables. he wouldn't take us home until we got all 1x1 to 10x10 correct with speed. i still remember hating it and crying so many times whenever we would mess up and make us redo it all again.

in grade 5 he taught me that school was very important and then proceeded to flex on me saying he got 100s in his entire life even in uni.

in grade 6 i remember him catching me throwing away an apple to fell on the kitchen floor in our house and told me to pick it up, wash it and eat it instead because wasting food is morally wrong.

in grade 8 when i was preparing to join a new school and doing the arts, he explained that the arts were very important and that he thought we needed more in our lives whenever he saw my paintings.

in grade 9 when i became less of a fetus and more of a matured teen, i was told that i needed to go to a good university so that i could get a good job and become successful when i got older. that was part of the drive that made me want to commit to uwaterloo and bust my ass throughout high school to get in. i knew that having uwaterloo on my resume would give me so many more opportunities and it stays true to this day.

in grade 10 and 11 he said to me you should build for the world not yourself. the money you make should go back into the world and the product you build should help humans grow as a species. this was also the time around where he started feeling weak and noticing his aging. the crazy part of all this was that didn't stop him from working everyday. he is still the most hardworking man ik to this day (and the only 80 year old that still wants to run his own business, make some money and change the world.)

towards the end of highschool he started to respect me and see that i was becoming the man he once was and that sparked joy in my heart for him to be proud of me for one of the few first times in a while.

my grandpa taught me a lot about life and his life is a continuation through me as i study engineering at a good school just like him.

one day, i want to be able to buy him a mechanical engineering warehouse/factory where he can mess around and build whatever he desires (and also to stop him from trying to revamp our entire house into one).`,
                fullContentZh: `通常你会听到所有关于父亲如何影响他们的孩子成为更好的人的故事，但在我的情况下，是我的爷爷，在家里我用中文叫他老爷。

我的爷爷在金钱、生活方式和教育方面一直以许多方式影响着我。

在三年级或四年级时，他每天接我从托儿所回来时，会让我和我的小弟弟坐在车后座，让我们俩背诵乘法表。他不会带我们回家，直到我们能快速准确地背出所有1×1到10×10。我仍然记得讨厌这件事，每当我们搞错并让我们重新来过时，我哭了很多次。

在五年级时，他教我学校非常重要，然后对我炫耀说他一生中都得100分，甚至在大学里也是如此。

在六年级时，我记得他抓到我把掉在我们家厨房地板上的苹果扔掉，告诉我捡起来，洗干净然后吃掉，因为浪费食物在道德上是错误的。

在八年级时，当我准备进入一所新学校学习艺术时，他解释说艺术非常重要，他认为每当看到我的画作时，我们的生活中需要更多艺术。

在九年级时，当我从一个胎儿变成一个成熟的青少年时，我被告知需要上一所好大学，这样当我长大后就能找到好工作并取得成功。这是推动我想要承诺滑铁卢大学并在整个高中努力学习以进入的部分动力。我知道在简历上有滑铁卢会给我更多机会，这至今仍然是真的。

在十年级和十一年级时，他对我说，你应该为世界而不是为自己建设。你赚的钱应该回馈给世界，你建造的产品应该帮助人类作为一个物种成长。这也是他开始感到虚弱并注意到自己衰老的时候。所有这些疯狂的部分是这并没有阻止他每天工作。到今天为止，他仍然是我认识的最勤奋的人（也是唯一一个80岁还想经营自己的生意、赚钱和改变世界的人）。

在高中即将结束时，他开始尊重我，看到我正在成为他曾经的那个人，这在我心中激起了喜悦，让他为我感到骄傲，这是我很久以来第一次有这种感觉。

我的爷爷教了我很多关于生活的东西，他的生活通过我在一所好学校学习工程学而得以延续，就像他一样。

有一天，我想能够为他买一个机械工程仓库/工厂，让他可以在那里胡闹并建造他想要的任何东西（也是为了阻止他试图把我们整个房子改造成一个工厂）。`
            },
            {
                title: "you should always want more",
                titleZh: "你应该永远想要更多",
                url: "https://medium.com/@nicholas.chen243/you-should-always-want-more-6383767c6c72",
                description: "On ambition, growth, and never settling for mediocrity",
                descriptionZh: "关于野心、成长和永不满足于平庸",
                fullContent: `if you met me now, you might think that i'm a rather ambitious person, but i wasn't always this way.

when i realized i was pretty good at school and excelled at those one minute times tables i was given in grade 5, i fell in love with wanting more. i remember being in class so hyped whenever our teacher gave us them to be marked because i knew it was going to be an easy 100.

obviously, learning my multiplication tables wasn't super easy at first.

i do want to note that my grandpa played a huge role in this and he continued to do so for the rest of my life -> you can read more about my relationship between him and i and how he shaped the way i am today here.

even knowing my times tables in grade 5 wasn't super impressive.

i was always average.

i remember my mother trying to comfort me all the time, saying that i was doing good in everything but not super well in anything specific and how it was okay, but i didn't think so.

we had awards ceremonies during the halfway mark and at the end of every year. in my last year of elementary school, i remember not receiving anything halfway through grade 5 and being super disappointed.

after getting beaten up by school and validation, it fuelled me to work super hard and although i was in grade 5 i feel like i matured a bit faster than my other peers and worked extremely hard. fast forward a few months -> i ended up receiving one of those awards at the end of that year before graduation.

seeing my hard work pay off was mind blowing to me in grade 5 lol. after that i realized that i could do better and accomplish more goals if i tried hard enough.

this mindset carried throughout middle school where i tried to ace every test i wrote and score perfect on every assignment i handed in. the more i did well, the more i was fuelled to want more. this turned into a positive feedback loop and my parents started to see something in me finally.

in grade 8 of middle school i applied to the claude watson school of the arts at earl haig (specifically visual arts) and i just remember everyone telling me (including my parents) how difficult it was to get in and that they didn't want me to feel sad if i didn't.

i worked a good 4 months on my application portfolio.

guess what? i got in lol. it was towards the summer time after class one day that my mother called me and told me the good news. this further reinforced my drive for wanting more b/c now i thought that anything was achievable if i worked hard enough.

there is always more to chase and the fun part isn't even when you accomplish your goals, it's more of the process and grind that gets you there. i enjoyed the grind more than the result. i was addicted to the grind.

i followed through with this mindset again for when college/university applications came around.

after busting my ass for all of grade 11 and 12, attending club meetings, leading volunteer work, doing internships, hackathons and building projects, i ended up getting into my dream program, syde at uwaterloo.

i'm now studying syde at waterloo and my past co-op job wasn't the most desirable so guess what? i wanted more. i worked hard while at and outside of work to learn as much as i could, build my personal brand and network. i grinded leetcode, projects and attended as many hackathons as i could. i built my linkedin up and connected with a lot of people on the platform to get more exposure for recruiters. i even got so desperate at one point i started cold emailing.

during this time around i also started posting on social media and what actually landed me a job was x or twitter as past users call it. a founding engineer reached out to me for an interview. i was super stoked for the first time in a while. i remember spending a good chunk of time on the takehome he gave me because this was a super good opportunity. i ended up getting the offer and taking it b/c i'm ngl, the pay was unheard of to me and best of all, i would be going to nyc to do the internship!

okay, so my point of writing all this is that i'm not exactly sure if all this was just an accumulation of my hard work, luck or something else, but one thing i do know is if i wasn't so ambitious and wanted more, these opportunities would've never come to me.

basically, you should never be complacent and change is good for you (especially if you're young). you should always want more.`,
                fullContentZh: `如果你现在遇到我，你可能会认为我是一个相当有野心的人，但我并不总是这样。

当我意识到我在学校表现相当不错，并在五年级时擅长那些一分钟乘法表时，我爱上了想要更多。我记得在课堂上每当我们的老师给我们标记时我都非常兴奋，因为我知道这将是一个轻松的100分。

显然，一开始学习乘法表并不是很容易。

我想指出，我的爷爷在这方面起了很大作用，他在我的余生中继续这样做 -> 你可以在这里阅读更多关于他和我之间的关系以及他如何塑造了今天的我。

即使在五年级知道我的乘法表也不是特别令人印象深刻。

我总是很平均。

我记得我的母亲一直试图安慰我，说我在所有事情上都做得很好，但在任何特定的事情上都不是特别好，这没关系，但我不这么认为。

我们在每年的中期和年末都有颁奖典礼。在我小学的最后一年，我记得在五年级中期没有获得任何奖项，感到非常失望。

在被学校和验证打击后，这激励我非常努力地工作，虽然我在五年级，但我觉得我比其他同龄人成熟得更快，工作得非常努力。几个月后 -> 我最终在毕业前的那年年末获得了其中一个奖项。

看到我的努力得到回报在五年级时对我来说是令人震惊的哈哈。之后我意识到如果我足够努力，我可以做得更好并完成更多目标。

这种心态贯穿了整个中学，我试图在我写的每个测试中取得优异成绩，在我提交的每个作业中得到满分。我做得越好，我就越有动力想要更多。这变成了一个积极的反馈循环，我的父母终于开始在我身上看到一些东西。

在八年级中学时，我申请了厄尔黑格的克劳德沃森艺术学院（特别是视觉艺术），我只记得每个人（包括我的父母）都告诉我进入有多困难，他们不希望我如果没有进入会感到难过。

我花了整整4个月的时间制作我的申请作品集。

你猜怎么着？我进了哈哈。那是在夏天放学后的某一天，我的母亲打电话给我告诉我这个好消息。这进一步加强了我想要更多的动力，因为现在我认为如果我足够努力，任何事情都是可以实现的。

总有更多的东西要追求，有趣的部分甚至不是当你完成目标时，更多的是让你到达那里的过程和努力。我喜欢努力过程胜过结果。我对努力上瘾了。

当大学/大学申请来临时，我再次坚持这种心态。

在整个11和12年级努力学习，参加俱乐部会议，领导志愿工作，做实习，参加黑客马拉松和建设项目后，我最终进入了我的梦想项目，滑铁卢大学的系统设计工程。

我现在在滑铁卢学习系统设计工程，我过去的实习工作不是最理想的，所以你猜怎么着？我想要更多。我在工作内外都努力学习尽可能多的东西，建立我的个人品牌和网络。我刷LeetCode，做项目，参加尽可能多的黑客马拉松。我建立了我的LinkedIn并在平台上与很多人联系，为招聘人员获得更多曝光。我甚至在某个时候变得如此绝望，我开始发冷邮件。

在这段时间里，我也开始在社交媒体上发帖，实际上让我找到工作的是X或Twitter，正如过去的用户称呼它。一位创始工程师联系我进行面试。我很长时间以来第一次感到非常兴奋。我记得在他给我的作业上花了很多时间，因为这是一个非常好的机会。我最终得到了offer并接受了，因为说实话，薪水对我来说是前所未有的，最重要的是，我将去纽约做实习！

好的，所以我写这一切的重点是，我不确定这一切是否只是我努力工作、运气或其他东西的积累，但我知道的一件事是，如果我不那么有野心并想要更多，这些机会永远不会来到我身边。

基本上，你永远不应该自满，改变对你有好处（特别是如果你年轻）。你应该永远想要更多。`
            },
            {
                title: "everyone should work a fast food job at least once in their life",
                titleZh: "每个人一生中至少应该做一次快餐工作",
                url: "https://medium.com/@nicholas.chen243/everyone-should-work-a-fast-food-job-at-least-once-in-their-life",
                description: "Lessons learned from working at Dairy Queen and why fast food jobs teach valuable life skills",
                descriptionZh: "从在Dairy Queen工作中学到的经验教训，以及为什么快餐工作能教授宝贵的生活技能",
                fullContent: `when you look at the news or on the internet, you often see big names such as huang, bezos and musk who have founded and become CEOs at extremely successful companies like Tesla, SpaceX, Amazon, and NVIDIA.

a lot of these founders and CEOs didn't just start building these massive products from day one. they started off working as a cook or crew member at some fast food restaurant.

i've noticed that many people tend to overlook these type of jobs and don't actually realize how important the skills you learn from doing them at such a young age teaches you.

as a student, i can also speak from personal experience from working at these fast food restaurants. i knew from seeing my parents that making money wasn't super easy.

throughout my childhood and teenage years i would constantly be reminded that i shouldn't end up like the fast food people serving our food in the mcdonald's or tim horton's fast food place whenever my mother took my brother and i for a meal. this is kinda ironic when i realize in a few months i would be working at one despite what my parents say. this was a different case though because i knew i would never stay here forever.

having money seemed so awesome to me. the ability to buy anything whenever you wanted without having to ask my parents felt incredible. this sparked me to work harder and try getting a job early on.

for a whole year i tried looking for work, but no one would take me. then, one day i walked into dairy queen and saw someone from my high school working there and asked him for a job. he said he would give my resume to the manager and the next day i got the job!

my time working at dairy queen was very interesting. i dealt with angry, unreasonable customers, bad co-workers and people walking in and stealing cake and ice cream at 12am in the summer.

working there for a few months taught me patience, responsibility and a lot of skills that couldn't be learned in a school setting.

the skills i've developed from working late nights and dealing with annoying customers still carries with me today when i'm interviewing for technical roles in software engineering.

although i didn't make a lot of money (14.50 CAD/hr), the experience was definitely worth it a lot in the long run.

looking back, i still can't believe i was getting paid like a slave working 6–7 hour shifts with no break. i sacrificed a lot of my summers working while my friends were enjoying the nice weather and no school. i would sometimes be asked if i wanted to join them to watch a movie, go to the park or hang out in dt toronto. pretty much every time i had no choice, but to say no due to work and then it eventually led to less and less invites and me just repeating the cycle of work, eat, sleep and take extracurricular classes everyday.

the summers of grade 10 and 11 were crucial and i learned a lot of real life lessons in the span of just those 4 months.

fast forward to now like 2–3 years later and a lot of my classmates and people around me struggle to figure out or do things that seem like common sense to me when it comes to work related topics. all those of years of working and looking for jobs taught me a few specific things such as always giving a cover letter in a job app, or always sending a thank you email after doing an interview or call with a recruiter or manager. i thought this was common sense, but i guess not.

another thing i wanted to note was that working at a fast food restaurant also taught me to value money much more. working there for long hours and taking home a pay check of something less than 300 dollars makes you feel something.

i often see a lot of young adults and teenagers gamble and buy expensive clothing irl and online. it's become so bad nowadays -> everything has become so normalized. everyone knows it's not smart to waste your money, but they still do it anyways.

as a result of my parent's teaching and my own personal observations of the world, growing up, i always tried saving money and it's paid off well.

looking at my life now, i'm making a lot more money than before being in a technical field after so many years of grinding school and an year of engineering at waterloo, but the skills that i've developed from working at dairy queen still remain and have helped me get where i am now.`,
                fullContentZh: `当你看新闻或在互联网上时，你经常会看到黄仁勋、贝佐斯和马斯克等大名鼎鼎的人，他们创立并成为了特斯拉、SpaceX、亚马逊和英伟达等极其成功公司的CEO。

这些创始人和CEO中的很多人并不是从第一天就开始构建这些庞大的产品。他们是从在某家快餐店当厨师或员工开始的。

我注意到很多人往往忽视这类工作，实际上没有意识到在如此年轻的时候从事这些工作所学到的技能有多么重要。

作为一名学生，我也可以从在这些快餐店工作的个人经历中发言。从看到我的父母那里，我知道赚钱并不是特别容易。

在我的童年和青少年时期，每当我的母亲带我和弟弟去麦当劳或Tim Hortons快餐店吃饭时，我会不断被提醒不应该最终像那些为我们提供食物的快餐工作人员一样。当我意识到几个月后我会在其中一家工作时，这有点讽刺，尽管我父母这样说。但这是一个不同的情况，因为我知道我永远不会永远待在这里。

拥有钱对我来说似乎太棒了。能够在想要的时候买任何东西而不必问我的父母，这感觉太不可思议了。这激发了我更努力工作并尝试早点找到工作。

整整一年我都在找工作，但没有人会要我。然后，有一天我走进Dairy Queen，看到我高中的一个同学在那里工作，就问他要一份工作。他说他会把我的简历给经理，第二天我就得到了这份工作！

我在Dairy Queen工作的时间非常有趣。我处理过愤怒、不讲理的顾客、糟糕的同事，以及在夏天凌晨12点走进来偷蛋糕和冰淇淋的人。

在那里工作几个月教会了我耐心、责任感和许多在学校环境中学不到的技能。

我从深夜工作和处理烦人顾客中培养的技能至今仍伴随着我，当我面试软件工程技术职位时。

虽然我赚的钱不多（14.50加元/小时），但从长远来看，这种经历绝对是非常值得的。

回顾过去，我仍然不敢相信我像奴隶一样工作6-7小时轮班而没有休息就能得到报酬。我牺牲了很多夏天工作，而我的朋友们在享受好天气和没有学校的时光。有时我会被问是否想和他们一起看电影、去公园或在多伦多市中心闲逛。几乎每次我都别无选择，只能说不，因为工作，然后最终导致邀请越来越少，我只是重复工作、吃饭、睡觉和每天上课外班的循环。

10年级和11年级的夏天是关键的，我在短短4个月内学到了很多现实生活的教训。

快进到现在大约2-3年后，我的很多同学和周围的人在工作相关话题上难以理解或做一些对我来说似乎是常识的事情。所有那些年的工作和找工作教会了我一些具体的事情，比如在求职申请中总是提供求职信，或者在与招聘人员或经理面试或通话后总是发送感谢邮件。我以为这是常识，但我想不是。

我想指出的另一件事是，在快餐店工作也教会了我更加珍惜金钱。在那里长时间工作并带回家不到300美元的薪水会让你有所感触。

我经常看到很多年轻成年人和青少年在现实生活和网上赌博和购买昂贵的衣服。现在变得如此糟糕 -> 一切都变得如此正常化。每个人都知道浪费钱是不明智的，但他们仍然这样做。

由于我父母的教导和我自己对世界的个人观察，在成长过程中，我总是试图存钱，这已经很好地回报了我。

看看我现在的生活，经过这么多年的学校磨练和在滑铁卢的一年工程学习后，我在技术领域赚的钱比以前多得多，但我从在Dairy Queen工作中培养的技能仍然存在，并帮助我达到了现在的位置。`
            },

        ];

    return (
        <main className="flex min-h-screen flex-col items-center p-6 md:p-24 overflow-x-hidden md:ml-10 -mt-4" style={{ marginLeft: '1px' }}>
            <div className="w-full max-w-full md:max-w-3xl mx-auto space-y-4 md:space-y-6 mb-10 md:mb-16 pt-24 md:pt-16">
                {/* Page Title */}
                <div className="mb-6 md:mb-8 ml-4 md:ml-8">
                    <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-4 font-minecraft">
                        {t('blogs.pageTitle')}
                    </h1>
                </div>

                <div className="bg-[#1a1a1a] text-white p-3 md:p-8 pb-8 md:pb-16 -mb-6 md:mb-10">
                    <div className="w-full md:max-w-4xl mx-auto">
                        <div className="mb-8 w-full">
                            <p className="text-stone-400 text-sm font-minecraft mb-6">
                                {t('blogs.description')}
                            </p>
                        </div>

                        {/* Blog Posts */}
                        <div className="space-y-4">
                            {blogs.map((blog, index) => {
                                const isExpanded = expandedBlogs.includes(index);
                                return (
                                    <div key={index} className="border border-stone-700 rounded-md">
                                        <button
                                            className="w-full flex justify-between items-center px-4 py-3 font-minecraft text-sm text-stone-200 focus:outline-none text-left hover:bg-stone-800/30 transition-colors"
                                            onClick={() => toggleBlog(index)}
                                        >
                                            <span className="flex-1 text-left pr-4">
                                                {language === 'zh' && blog.titleZh ? blog.titleZh : blog.title}
                                            </span>
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {isExpanded && (
                                            <div className="px-4 pb-4 border-t border-stone-700">
                                                <div className="text-stone-400 text-sm font-minecraft mb-4 mt-3 leading-relaxed">
                                                    {blog.fullContent || blog.fullContentZh ? (
                                                        <div className="whitespace-pre-line">
                                                            {language === 'zh' && blog.fullContentZh
                                                                ? blog.fullContentZh
                                                                : blog.fullContent
                                                            }
                                                        </div>
                                                    ) : (
                                                        <p>{language === 'zh' && blog.descriptionZh ? blog.descriptionZh : blog.description}</p>
                                                    )}
                                                </div>
                                                <BlogInteractions
                                                    blogId={`blog-${index}`}
                                                    blogTitle={language === 'zh' && blog.titleZh ? blog.titleZh : blog.title}
                                                    blogUrl={blog.url}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Language Toggle Button */}
                        <div className="mt-8 md:mt-12 mb-0 w-full">
                            <div className="flex items-center gap-3 p-3 bg-white/5 border border-stone-600 rounded-lg hover:bg-white/10 transition-colors w-fit">
                                <span className="text-stone-300 text-sm font-minecraft">{t('language.label')}</span>
                                <div className="flex items-center gap-2">
                                    <span className={`text-sm font-minecraft transition-colors duration-200 ${language === 'en' ? 'text-white' : 'text-stone-500'}`}>
                                        EN
                                    </span>
                                    <button
                                        onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                                        className="relative inline-flex h-5 w-9 items-center rounded-full bg-stone-600 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-[#1a1a1a] hover:bg-stone-500"
                                        role="switch"
                                        aria-checked={language === 'zh'}
                                        aria-label="Toggle language"
                                    >
                                        <span
                                            className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-200 ${language === 'zh' ? 'translate-x-5' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                    <span className={`text-sm font-minecraft transition-colors duration-200 ${language === 'zh' ? 'text-white' : 'text-stone-500'}`}>
                                        中文
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 