'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SoftwareEngineeringLearningBlog() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 py-12 px-4 md:px-8">
      <article className="max-w-lg mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t('blog.back')}
        </Link>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
          {t('blog.coding.title')}
        </h1>
        <p className="text-stone-500 text-sm mb-6">{t('blog.coding.date')}</p>

        {/* Cover image */}
        <img src="/blogs/code/iterm2.png" alt={t('blog.coding.title')} className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <ul className="space-y-3 text-stone-300">
              <p className="mb-4 text-stone-400 italic text-sm">{t('blog.coding.intro')}</p>
              <li>
                {t('blog.coding.item1').includes('hangman game') ? (
                  <>
                    {t('blog.coding.item1').split('hangman game')[0]}
                    <a
                      href="https://github.com/nicholaschen09/HangmanGame"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '猜词游戏' : 'hangman game'}
                    </a>
                    {t('blog.coding.item1').split('hangman game')[1]}
                  </>
                ) : (
                  t('blog.coding.item1')
                )}
              </li>
              <li>{t('blog.coding.item2')}</li>
              <li>{t('blog.coding.item3')}</li>
              <li>
                {t('blog.coding.item4').includes('ccc') ? (
                  <>
                    {t('blog.coding.item4').split('ccc')[0]}
                    <a
                      href="https://cemc.uwaterloo.ca/contests/ccc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      ccc
                    </a>
                    {t('blog.coding.item4').split('ccc')[1]}
                  </>
                ) : (
                  t('blog.coding.item4')
                )}
              </li>
              <li>
                {t('blog.coding.item5').includes('voluntrack') ? (
                  <>
                    {t('blog.coding.item5').split('voluntrack')[0]}
                    <a
                      href="https://github.com/VolunTrack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      voluntrack
                    </a>
                    {t('blog.coding.item5').split('voluntrack')[1]}
                  </>
                ) : (
                  t('blog.coding.item5')
                )}
              </li>
              <li>
                {t('blog.coding.item6').includes('gpt wrapper') ? (
                  <>
                    {t('blog.coding.item6').split('gpt wrapper')[0]}
                    <a
                      href="https://github.com/nicholaschen09/PsychAI-main-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? 'gpt wrapper' : 'gpt wrapper'}
                    </a>
                    {t('blog.coding.item6').split('gpt wrapper')[1]}
                  </>
                ) : (
                  t('blog.coding.item6')
                )}
              </li>
              <li>
                {t('blog.coding.item7').includes('student registration') ||
                t('blog.coding.item7').includes('移动计算器') ? (
                  <>
                    {t('blog.coding.item7').split(/student registration|学生注册|移动计算器/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/StudentRegistration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '学生注册' : 'student registration'}
                    </a>
                    {t('blog.coding.item7').includes('and') ||
                    t('blog.coding.item7').includes('和') ? (
                      <>
                        {language === 'zh' ? ' 和 ' : ' and '}
                        <a
                          href="https://github.com/nicholaschen09/MobileCalculatorApp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '移动计算器应用' : 'mobile calculator app'}
                        </a>
                        {t('blog.coding.item7').split(/mobile calculator app|移动计算器应用/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item7').split(/student registration|学生注册/)[1]
                    )}
                  </>
                ) : (
                  t('blog.coding.item7')
                )}
              </li>
              <li>
                {t('blog.coding.item8').includes('RBC') ? (
                  <>
                    {t('blog.coding.item8').split('RBC')[0]}
                    <a
                      href="https://www.rbc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      RBC
                    </a>
                    {t('blog.coding.item8').split('RBC')[1]}
                  </>
                ) : (
                  t('blog.coding.item8')
                )}
              </li>
              <li>
                {t('blog.coding.item9').includes("valentine's day website") ||
                t('blog.coding.item9').includes('情人节网站') ? (
                  <>
                    {t('blog.coding.item9').split(/valentine's day website|情人节网站/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/valentine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '情人节网站' : "valentine's day website"}
                    </a>
                    {t('blog.coding.item9').split(/valentine's day website|情人节网站/)[1]}
                  </>
                ) : (
                  t('blog.coding.item9')
                )}
              </li>
              <li>{t('blog.coding.item10')}</li>
              <li>
                {t('blog.coding.item11').includes('geeks for geeks') ||
                t('blog.coding.item11').includes('w3schools') ? (
                  <>
                    {t('blog.coding.item11').split(/geeks for geeks|w3schools/)[0]}
                    <a
                      href="https://www.geeksforgeeks.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? 'geeks for geeks' : 'geeks for geeks'}
                    </a>
                    {t('blog.coding.item11').includes('and') ||
                    t('blog.coding.item11').includes('和') ? (
                      <>
                        {language === 'zh' ? ' 和 ' : ' and '}
                        <a
                          href="https://www.w3schools.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          w3schools
                        </a>
                        {t('blog.coding.item11').split(/w3schools/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item11').split(/geeks for geeks/)[1]
                    )}
                  </>
                ) : (
                  t('blog.coding.item11')
                )}
              </li>
              <li>{t('blog.coding.item12')}</li>
              <li>{t('blog.coding.item13')}</li>
              <li>{t('blog.coding.item14')}</li>
              <li>{t('blog.coding.item15')}</li>
              <li>
                {t('blog.coding.item16').includes('personal website') ||
                t('blog.coding.item16').includes('个人网站') ? (
                  <>
                    {t('blog.coding.item16').split(/personal website|个人网站/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/personalWebsite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '个人网站' : 'personal website'}
                    </a>
                    {t('blog.coding.item16').split(/personal website|个人网站/)[1]}
                  </>
                ) : (
                  t('blog.coding.item16')
                )}
              </li>
              <li>
                {t('blog.coding.item17').includes('university of waterloo') ||
                t('blog.coding.item17').includes('滑铁卢大学') ? (
                  <>
                    {t('blog.coding.item17').split(/university of waterloo|滑铁卢大学/)[0]}
                    <a
                      href="https://uwaterloo.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '滑铁卢大学' : 'university of waterloo'}
                    </a>
                    {t('blog.coding.item17').split(/university of waterloo|滑铁卢大学/)[1]}
                  </>
                ) : (
                  t('blog.coding.item17')
                )}
              </li>
              <li>{t('blog.coding.item18')}</li>
              <li>{t('blog.coding.item19')}</li>
              <li>{t('blog.coding.item20')}</li>
              <li>{t('blog.coding.item21')}</li>
              <li>
                {t('blog.coding.item22').includes('ownr') ? (
                  <>
                    {t('blog.coding.item22').split('ownr')[0]}
                    <a
                      href="https://www.ownr.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      ownr
                    </a>
                    {t('blog.coding.item22').split('ownr')[1]}
                  </>
                ) : (
                  t('blog.coding.item22')
                )}
              </li>
              <li>{t('blog.coding.item23')}</li>
              <li>{t('blog.coding.item24')}</li>
              <li>
                {t('blog.coding.item25').includes('dependabot') ? (
                  <>
                    {t('blog.coding.item25').split('dependabot')[0]}
                    <a
                      href="https://github.com/qimcis/dependabot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      dependabot
                    </a>
                    {t('blog.coding.item25').split('dependabot')[1]}
                  </>
                ) : (
                  t('blog.coding.item25')
                )}
              </li>
              <li>
                {t('blog.coding.item26').includes('trash sorter') ||
                t('blog.coding.item26').includes('垃圾分拣器') ? (
                  <>
                    {t('blog.coding.item26').split(/trash sorter|垃圾分拣器/)[0]}
                    <a
                      href="https://github.com/DerrickHa/ht6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '垃圾分拣器' : 'trash sorter'}
                    </a>
                    {t('blog.coding.item26').split(/trash sorter|垃圾分拣器/)[1]}
                  </>
                ) : (
                  t('blog.coding.item26')
                )}
              </li>
              <li>{t('blog.coding.item27')}</li>
              <li>{t('blog.coding.item28')}</li>
              <li>{t('blog.coding.item29')}</li>
              <li>{t('blog.coding.item30')}</li>
              <li>
                {t('blog.coding.item31').includes('posture checking robot') ||
                t('blog.coding.item31').includes('姿势检查机器人') ? (
                  <>
                    {t('blog.coding.item31').split(/posture checking robot|姿势检查机器人/)[0]}
                    <a
                      href="https://github.com/enxilium/posture-checker-robot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '姿势检查机器人' : 'posture checking robot'}
                    </a>
                    {t('blog.coding.item31').split(/posture checking robot|姿势检查机器人/)[1]}
                  </>
                ) : (
                  t('blog.coding.item31')
                )}
              </li>
              <li>{t('blog.coding.item32')}</li>
              <li>
                {t('blog.coding.item33').includes('twitter') ||
                t('blog.coding.item33').includes('twitter') ? (
                  <>
                    {t('blog.coding.item33').split(/twitter/)[0]}
                    <a
                      href="https://twitter.com/nicholaschen09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      twitter
                    </a>
                    {t('blog.coding.item33').split(/twitter/)[1]}
                  </>
                ) : (
                  t('blog.coding.item33')
                )}
              </li>
              <li>{t('blog.coding.item34')}</li>
              <li>
                {t('blog.coding.item35').includes('etl pipeline') ||
                t('blog.coding.item35').includes('etl 流水线') ? (
                  <>
                    {t('blog.coding.item35').split(/etl pipeline|etl 流水线/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/customer-feedback-etl-pipeline"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? 'etl 流水线' : 'etl pipeline'}
                    </a>
                    {t('blog.coding.item35').split(/etl pipeline|etl 流水线/)[1]}
                  </>
                ) : (
                  t('blog.coding.item35')
                )}
              </li>
              <li>
                {t('blog.coding.item36').includes('discord summarizer bot') ||
                t('blog.coding.item36').includes('discord 摘要机器人') ? (
                  <>
                    {t('blog.coding.item36').split(/discord summarizer bot|discord 摘要机器人/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/summary-discord-bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? 'discord 摘要机器人' : 'discord summarizer bot'}
                    </a>
                    {t('blog.coding.item36').split(/discord summarizer bot|discord 摘要机器人/)[1]}
                  </>
                ) : (
                  t('blog.coding.item36')
                )}
              </li>
              <li>
                {t('blog.coding.item37').includes('image processor') ||
                t('blog.coding.item37').includes('图像处理器') ? (
                  <>
                    {t('blog.coding.item37').split(/image processor|图像处理器/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/image-processor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '图像处理器' : 'image processor'}
                    </a>
                    {t('blog.coding.item37').split(/image processor|图像处理器/)[1]}
                  </>
                ) : (
                  t('blog.coding.item37')
                )}
              </li>
              <li>
                {t('blog.coding.item38').includes('facial recognition') ||
                t('blog.coding.item38').includes('面部识别') ? (
                  <>
                    {t('blog.coding.item38').split(/facial recognition|面部识别/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/facial-recognition-neural-network"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '面部识别' : 'facial recognition'}
                    </a>
                    {t('blog.coding.item38').split(/facial recognition|面部识别/)[1]}
                  </>
                ) : (
                  t('blog.coding.item38')
                )}
              </li>
              <li>{t('blog.coding.item39')}</li>
              <li>
                {t('blog.coding.item40').includes('sql query parser') ||
                t('blog.coding.item40').includes('sql 查询解析器') ? (
                  <>
                    {t('blog.coding.item40').split(/sql query parser|sql 查询解析器/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/sql-query-parser"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? 'sql 查询解析器' : 'sql query parser'}
                    </a>
                    {t('blog.coding.item40').split(/sql query parser|sql 查询解析器/)[1]}
                  </>
                ) : (
                  t('blog.coding.item40')
                )}
              </li>
              <li>
                {t('blog.coding.item41').includes('diff digest tool') ||
                t('blog.coding.item41').includes('diff digest 工具') ? (
                  <>
                    {t('blog.coding.item41').split(/diff digest tool|diff digest 工具/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/diff-digest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? 'diff digest 工具' : 'diff digest tool'}
                    </a>
                    {t('blog.coding.item41').split(/diff digest tool|diff digest 工具/)[1]}
                  </>
                ) : (
                  t('blog.coding.item41')
                )}
              </li>
              <li>
                {t('blog.coding.item42').includes('textql') ? (
                  <>
                    {t('blog.coding.item42').split('textql')[0]}
                    <a
                      href="https://textql.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      textql
                    </a>
                    {t('blog.coding.item42').split('textql')[1]}
                  </>
                ) : (
                  t('blog.coding.item42')
                )}
              </li>
              <li>{t('blog.coding.item43')}</li>
              <li>
                {t('blog.coding.item44').includes('url shortener') ||
                t('blog.coding.item44').includes('url 缩短器') ? (
                  <>
                    {t('blog.coding.item44').split(/url shortener|url 缩短器/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/url-shortener"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? 'url 缩短器' : 'url shortener'}
                    </a>
                    {t('blog.coding.item44').split(/url shortener|url 缩短器/)[1]}
                  </>
                ) : (
                  t('blog.coding.item44')
                )}
              </li>
              <li>
                {t('blog.coding.item45').includes('figma') ? (
                  <>
                    {t('blog.coding.item45').split('figma')[0]}
                    <a
                      href="https://github.com/nicholaschen09/whiteboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? 'figma' : 'figma'}
                    </a>
                    {t('blog.coding.item45').split('figma')[1]}
                  </>
                ) : (
                  t('blog.coding.item45')
                )}
              </li>
              <li>{t('blog.coding.item46')}</li>
              <li>
                {t('blog.coding.item47').includes('personal website') ||
                t('blog.coding.item47').includes('个人网站') ? (
                  <>
                    {t('blog.coding.item47').split(/personal website|个人网站/)[0]}
                    <a
                      href="https://nicholaschen.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '个人网站' : 'personal website'}
                    </a>
                    {t('blog.coding.item47').split(/personal website|个人网站/)[1]}
                  </>
                ) : (
                  t('blog.coding.item47')
                )}
              </li>
              <li>{t('blog.coding.item48')}</li>
              <li>{t('blog.coding.item49')}</li>
              <li>
                {t('blog.coding.item50').includes('textql healthcare') ||
                t('blog.coding.item50').includes('textql 医疗保健') ? (
                  <>
                    {t('blog.coding.item50').split(/textql healthcare|textql 医疗保健/)[0]}
                    <a
                      href="https://textql.com/healthcare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh'
                        ? 'textql 医疗保健登录页面'
                        : 'textql healthcare landing page'}
                    </a>
                    {t('blog.coding.item50').split(/textql healthcare|textql 医疗保健/)[1]}
                  </>
                ) : (
                  t('blog.coding.item50')
                )}
              </li>
              <li>{t('blog.coding.item51')}</li>
              <li>{t('blog.coding.item52')}</li>
              <li>
                {t('blog.coding.item53').includes('ontology') ||
                t('blog.coding.item53').includes('本体') ? (
                  <>
                    {t('blog.coding.item53').split(/ontology|本体/)[0]}
                    <a
                      href="https://app.textql.com/ontology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '本体' : 'ontology'}
                    </a>
                    {t('blog.coding.item53').split(/ontology|本体/)[1]}
                  </>
                ) : (
                  t('blog.coding.item53')
                )}
              </li>
              <li>{t('blog.coding.item54')}</li>
              <li>{t('blog.coding.item55')}</li>
              <li>{t('blog.coding.item56')}</li>
              <li>
                {t('blog.coding.item57').includes('random things') ||
                t('blog.coding.item57').includes('随机东西') ? (
                  <>
                    {t('blog.coding.item57').split(/random things|随机东西/)[0]}
                    <a
                      href="https://github.com/tinytinyexperiments/visuals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '随机东西' : 'random things'}
                    </a>
                    {t('blog.coding.item57').split(/random things|随机东西/)[1]}
                  </>
                ) : (
                  t('blog.coding.item57')
                )}
              </li>
              <li>
                {t('blog.coding.item58').includes('mercor ML model') ||
                t('blog.coding.item58').includes('mercor ML 模型') ? (
                  <>
                    {t('blog.coding.item58').split(/mercor ML model|mercor ML 模型/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/mercor-challenge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? 'mercor ML 模型' : 'mercor ML model'}
                    </a>
                    {t('blog.coding.item58').split(/mercor ML model|mercor ML 模型/)[1]}
                  </>
                ) : (
                  t('blog.coding.item58')
                )}
              </li>
              <li>
                {t('blog.coding.item59').includes('benchmarking') ||
                t('blog.coding.item59').includes('基准测试') ? (
                  <>
                    {t('blog.coding.item59').split(/benchmarking|基准测试/)[0]}
                    <a
                      href="https://github.com/nicholaschen09/llm-benchmarking"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '基准测试' : 'benchmarking'}
                    </a>
                    {t('blog.coding.item59').split(/benchmarking|基准测试/)[1]}
                  </>
                ) : (
                  t('blog.coding.item59')
                )}
              </li>
              <li>
                {t('blog.coding.item60').includes('link route checker script') ||
                t('blog.coding.item60').includes('链接路由检查脚本') ? (
                  <>
                    {t('blog.coding.item60').split(/link route checker script|链接路由检查脚本/)[0]}
                    <a
                      href="http://github.com/nicholaschen09/link-health-scanner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '链接路由检查脚本' : 'link route checker script'}
                    </a>
                    {t('blog.coding.item60').split(/link route checker script|链接路由检查脚本/)[1]}
                  </>
                ) : (
                  t('blog.coding.item60')
                )}
              </li>
              <li>
                {t('blog.coding.item61').includes('system design') ||
                t('blog.coding.item61').includes('系统设计') ? (
                  <>
                    {t('blog.coding.item61').split(/system design|系统设计/)[0]}
                    <a
                      href="https://www.karanpratapsingh.com/courses/system-design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-200 transition-colors underline"
                    >
                      {language === 'zh' ? '系统设计' : 'system design'}
                    </a>
                    {t('blog.coding.item61').split(/system design|系统设计/)[1]}
                  </>
                ) : (
                  t('blog.coding.item61')
                )}
              </li>
              
            </ul>
            <p className="mt-6 text-stone-400 italic text-sm">{t('blog.coding.note')}</p>
          </section>

          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
              {t('blog.coding.referencesTitle')}
            </h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  linkedin.com/in/nicholas-chen-85886726a
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nicholaschen09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  github.com/nicholaschen09
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Footer nav with social icons and right-aligned navigation/language */}
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-stone-400 max-w-lg">
          {/* Social media icons */}
          <a
            href="mailto:nicholas.chen243@gmail.com"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="Email"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
            </svg>
          </a>
          <a
            href="https://github.com/nicholaschen09"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="GitHub"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            href="https://x.com/nicholaschen__"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-stone-400 hover:bg-stone-800/80 hover:text-stone-100 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <div className="ml-auto flex items-center">
            {/* Language switcher */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`text-[10px] tracking-[0.18em] uppercase rounded-md px-2 py-0.5 transition-colors ${
                  language === 'en'
                    ? 'bg-stone-800/80 text-white'
                    : 'text-stone-500 hover:bg-stone-800/80 hover:text-stone-100'
                }`}
              >
                EN
              </button>
              <span className="text-stone-600">/</span>
              <button
                type="button"
                onClick={() => setLanguage('zh')}
                className={`text-[10px] tracking-[0.18em] uppercase rounded-md px-2 py-0.5 transition-colors ${
                  language === 'zh'
                    ? 'bg-stone-800/80 text-white'
                    : 'text-stone-500 hover:bg-stone-800/80 hover:text-stone-100'
                }`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
