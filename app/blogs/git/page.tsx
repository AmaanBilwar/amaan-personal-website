'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function GitBlog() {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://nicholaschen.com';
    const pageUrl = `${baseUrl}/blogs/git`;
    const imageUrl = `${baseUrl}/blogs/git/git-copy.png`;
    const title = `${t('blog.git.title')} | Nicholas Chen`;
    const description = "A guide to git commands and workflows";

    // Update document title
    document.title = title;

    // Function to set or update meta tag
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Set meta tags
    setMetaTag('description', description);
    setMetaTag('og:title', t('blog.git.title'), true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', imageUrl, true);
    setMetaTag('og:url', pageUrl, true);
    setMetaTag('og:type', 'article', true);
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@nicholaschen__');
    setMetaTag('twitter:title', t('blog.git.title'));
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', imageUrl);
  }, [t, language]);

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
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">{t('blog.git.title')}</h1>
        <p className="text-stone-500 text-sm mb-6">{t('blog.git.date')}</p>

        {/* Cover image */}
        <img src="/blogs/git/git-copy.png" alt="Git" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>{t('blog.git.intro')}</p>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.mentalModelTitle')}
            </h2>
            <p>{t('blog.git.mentalModelText')}</p>
          </section>

          {/* Core Concepts */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.coreConceptsTitle')}
            </h2>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-4">
              {t('blog.git.coreConcepts.snapshotsTitle')}
            </h3>
            <p>{t('blog.git.coreConcepts.snapshotsText')}</p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-6">
              {t('blog.git.coreConcepts.threeTreesTitle')}
            </h3>
            <ul className="space-y-2 list-disc list-inside text-stone-400">
              <li>
                <span className="text-stone-200">working directory</span>:{' '}
                {t('blog.git.coreConcepts.threeTrees.working')}
              </li>
              <li>
                <span className="text-stone-200">staging area (index)</span>:{' '}
                {t('blog.git.coreConcepts.threeTrees.staging')}
              </li>
              <li>
                <span className="text-stone-200">HEAD</span>:{' '}
                {t('blog.git.coreConcepts.threeTrees.head')}
              </li>
            </ul>
          </section>

          {/* Setup & Config */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.setupTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --global user.name "name"
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.setup.configUserName')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --global user.email "email"
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.setup.configUserEmail')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --global color.ui auto
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.setup.configColor')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --list
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.setup.configList')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --global alias.co checkout
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.setup.alias')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --global core.editor "code --wait"
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.setup.editor')}</p>
              </div>
            </div>
          </section>

          {/* Getting & Creating Projects */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.gettingTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git init</code>
                <p className="mt-1 text-stone-400">{t('blog.git.getting.init')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git clone &lt;url&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.getting.clone')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git clone --depth=1 &lt;url&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.getting.cloneDepth')}</p>
              </div>
            </div>
          </section>

          {/* Basic Snapshotting */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.basicTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git commit --amend --no-edit
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.basic.amendNoEdit')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git status</code>
                <p className="mt-1 text-stone-400">{t('blog.git.basic.status')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git add &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.basic.addFile')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git add .</code>
                <p className="mt-1 text-stone-400">{t('blog.git.basic.addAll')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git add -p</code>
                <p className="mt-1 text-stone-400">{t('blog.git.basic.addPatch')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git commit -m "msg"
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.basic.commitMsg')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git commit -am "msg"
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.basic.commitAm')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git rm &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.basic.rm')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git mv &lt;old&gt; &lt;new&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.basic.mv')}</p>
              </div>
            </div>
          </section>

          {/* Branching & Merging */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.branchingTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git switch -</code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.switchDash')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git branch --merged
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.merged')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git merge-base A B
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.mergeBase')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git branch</code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.branch')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git branch &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.branchName')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git branch -d &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.branchD')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git branch -D &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.branchDForce')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git switch &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.switchName')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git switch -c &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.switchC')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git merge &lt;branch&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.merge')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git merge --abort
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.mergeAbort')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git tag &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.tag')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git tag -a &lt;name&gt; -m "msg"
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.branching.tagA')}</p>
              </div>
            </div>
          </section>

          {/* Sharing & Updating */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.sharingTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git remote rename &lt;old&gt; &lt;new&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.remoteRename')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git push origin :&lt;branch&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.pushDelete')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git remote -v</code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.remoteV')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git remote add origin &lt;url&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.remoteAdd')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git remote set-url origin &lt;url&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.remoteSetUrl')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git fetch</code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.fetch')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git fetch --prune
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.fetchPrune')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git pull</code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.pull')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git push</code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.push')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git push -u origin &lt;branch&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.pushU')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git push --force-with-lease
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.pushForceLease')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git push --tags</code>
                <p className="mt-1 text-stone-400">{t('blog.git.sharing.pushTags')}</p>
              </div>
            </div>
          </section>

          {/* Inspection & Comparison */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.inspectionTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git log -S "text"
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.logS')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git log --author="name"
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.logAuthor')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git log --since="2.weeks"
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.logSince')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git log</code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.log')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git log --oneline --graph
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.logOneline')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git shortlog -sn
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.shortlog')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git diff</code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.diff')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git diff --staged
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.diffStaged')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git diff --word-diff
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.diffWord')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git show &lt;hash&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.show')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git blame &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.blame')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git blame -L 10,20 &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.blameL')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git grep "text"</code>
                <p className="mt-1 text-stone-400">{t('blog.git.inspection.grep')}</p>
              </div>
            </div>
          </section>

          {/* Undo & Fix */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.undoTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git checkout &lt;hash&gt; -- &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.undo.checkoutHash')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git update-ref -d HEAD
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.undo.updateRef')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git reset --soft HEAD~1
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.undo.resetSoft')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git reset --hard HEAD~1
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.undo.resetHard')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git revert &lt;hash&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.undo.revert')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git restore &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.undo.restore')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git restore --staged &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.undo.restoreStaged')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git commit --amend
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.undo.commitAmend')}</p>
              </div>
            </div>
          </section>

          {/* Advanced & Power Tools */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.advancedTitle')}
            </h2>
            <div className="space-y-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git rebase -i HEAD~3
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.rebaseI')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git rebase &lt;branch&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.rebase')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git stash
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.stash')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git stash pop
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.stashPop')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git stash list
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.stashList')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git stash -u
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.stashU')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git bisect start
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.bisectStart')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git cherry-pick &lt;hash&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.cherryPick')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git reflog
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.reflog')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git worktree add &lt;path&gt; &lt;branch&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.worktreeAdd')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git submodule update --init
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.submodule')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git rerere
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.advanced.rerere')}</p>
              </div>
            </div>
          </section>

          {/* Administration */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              {t('blog.git.adminTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git clean -fd</code>
                <p className="mt-1 text-stone-400">{t('blog.git.admin.clean')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git gc</code>
                <p className="mt-1 text-stone-400">{t('blog.git.admin.gc')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git check-ignore -v &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.admin.checkIgnore')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git archive -o project.zip HEAD
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.admin.archive')}</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git rev-parse HEAD
                </code>
                <p className="mt-1 text-stone-400">{t('blog.git.admin.revParse')}</p>
              </div>
            </div>
          </section>

          {/* References */}
          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
              {t('blog.git.referencesTitle')}
            </h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a href="https://git-scm.com/doc" className="hover:text-stone-200 underline">
                  official git docs
                </a>
              </li>
              <li>
                <a href="https://dangitgit.com/" className="hover:text-stone-200 underline">
                  dangit, git!
                </a>
              </li>
            </ul>
          </section>
        </div>

        <Footer className="mt-10" />
      </article>
    </main>
  );
}
