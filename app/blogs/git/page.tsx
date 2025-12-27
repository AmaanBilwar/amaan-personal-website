'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GitBlog() {
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
