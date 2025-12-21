'use client';

import Link from 'next/link';

export default function GitBlog() {
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
          back
        </Link>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
          concepts and commands for git
        </h1>
        <p className="text-stone-500 text-sm mb-6">
          nicholas chen · december 16, 2025 · 5 min read
        </p>

        {/* Cover image */}
        <img src="/blogs/git/git-copy.png" alt="Git" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          
          <section>
            <p>
               git is a distributed version control system (local). github is a hosting platform (online).
               most of us memorize commands without understanding the graph model underneath.
            </p>
          </section>

          {/* Core Concepts */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              core concepts
            </h2>
            
            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-4">snapshots, not diffs</h3>
            <p>
              git stores a full snapshot of your project with every commit, not just the differences.
              if a file hasn't changed, it stores a pointer to the previous version.
            </p>


             <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-6">the three trees</h3>
             <ul className="space-y-2 list-disc list-inside text-stone-400">
               <li><span className="text-stone-200">working directory</span>: files you see/edit.</li>
               <li><span className="text-stone-200">staging area (index)</span>: changes ready for commit.</li>
               <li><span className="text-stone-200">HEAD</span>: pointer to the last commit.</li>
             </ul>

          </section>

          {/* Essential Commands */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              essential commands
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git init</code>
                <p className="mt-1 text-stone-400">initialize a new repo.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git clone &lt;url&gt;</code>
                <p className="mt-1 text-stone-400">download a repo and its history.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git status</code>
                <p className="mt-1 text-stone-400">show modified, staged, and untracked files.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git add &lt;file&gt;</code>
                <p className="mt-1 text-stone-400">move changes to staging area.</p>
              </div>
               <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git commit -m "msg"</code>
                <p className="mt-1 text-stone-400">save staged changes as a new snapshot.</p>
              </div>
               <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git log --oneline --graph</code>
                <p className="mt-1 text-stone-400">visualize commit history graph.</p>
              </div>
            </div>
          </section>

          {/* Branching & Merging */}
           <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              branching & syncing
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git branch &lt;name&gt;</code>
                <p className="mt-1 text-stone-400">create a new branch (pointer).</p>
              </div>
              <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git switch &lt;name&gt;</code>
                 <p className="mt-1 text-stone-400">switch to a branch (safer than checkout).</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git merge &lt;branch&gt;</code>
                <p className="mt-1 text-stone-400">combine history of another branch into current.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git fetch</code>
                <p className="mt-1 text-stone-400">download changes from remote but don't merge.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git pull</code>
                <p className="mt-1 text-stone-400">fetch + merge.</p>
              </div>
            </div>

          </section>

          {/* Undo & Fix */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              undo & fix
            </h2>
             <div className="grid grid-cols-1 gap-4">
               <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git reset --soft HEAD~1</code>
                 <p className="mt-1 text-stone-400">undo commit but keep changes staged.</p>
               </div>
               <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git reset --hard HEAD~1</code>
                 <p className="mt-1 text-stone-400">undo commit and destroy changes (dangerous).</p>
               </div>
               <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git revert &lt;hash&gt;</code>
                 <p className="mt-1 text-stone-400">create new commit that inverses changes (safe for public).</p>
               </div>
               <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git restore &lt;file&gt;</code>
                 <p className="mt-1 text-stone-400">discard local changes in a file.</p>
               </div>
               <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git commit --amend</code>
                 <p className="mt-1 text-stone-400">add staged changes to previous commit / rewrite message.</p>
               </div>
             </div>
          </section>

           {/* Power Tools / Extended */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              power tools
            </h2>
            <div className="space-y-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">git rebase -i HEAD~3</code>
                <p className="mt-1 text-stone-400">rewrite history: squash, edit, reorder, or drop commits.</p>
              </div>
              <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">git stash pop</code>
                <p className="mt-1 text-stone-400">temporarily shelve changes to switch contexts.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">git bisect start</code>
                <p className="mt-1 text-stone-400">binary search to find the commit that introduced a bug.</p>
              </div>
              <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">git cherry-pick &lt;hash&gt;</code>
                 <p className="mt-1 text-stone-400">apply a specific commit from another branch.</p>
              </div>
               <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">git reflog</code>
                 <p className="mt-1 text-stone-400">log of all reference updates. recover "lost" commits.</p>
              </div>
              <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">git clean -fd</code>
                 <p className="mt-1 text-stone-400">remove all untracked files and directories.</p>
              </div>
               <div>
                 <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">git blame &lt;file&gt;</code>
                 <p className="mt-1 text-stone-400">show author/commit for every line of a file.</p>
              </div>
            </div>
          </section>

          {/* References */}
          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">references</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li><a href="https://git-scm.com/doc" className="hover:text-stone-200 underline">official git docs</a></li>
              <li><a href="https://dangitgit.com/" className="hover:text-stone-200 underline">dangit, git!</a></li>
            </ul>
          </section>

        </div>
      </article>
    </main>
  );
}