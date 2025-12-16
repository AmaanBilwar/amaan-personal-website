'use client';

import Link from 'next/link';

export default function GitBlog() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 py-12 px-4 md:px-8">
      <article className="max-w-xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-8 text-sm px-2 py-1 -ml-2 rounded-md"
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
          how git actually works
        </h1>
        <p className="text-stone-500 text-sm mb-6">December 16, 2025</p>

        {/* Cover image */}
        {/* <img src="/blog/cover.png" alt="Cover" className="w-full mb-6" /> */}
        {/* <hr className="border-stone-700 mb-8" /> */}

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>
              most developers use git every day without really understanding what's happening under the hood. we memorize commands like git add, git commit, and git push, but when something goes wrong, we panic. this post breaks down how git actually works so you can stop being afraid of it.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              git is just a graph of snapshots
            </h2>
            <p>
              at its core, git is a directed acyclic graph (DAG) of snapshots. every time you make a commit, git takes a snapshot of all your files and stores a reference to that snapshot. each commit points to its parent commit, creating a chain of history.
            </p>
            <p className="mt-4">
              a commit is not a diff. it's a complete snapshot of your entire project at that moment in time. git is smart about storage though — if a file hasn't changed, it just stores a pointer to the previous version.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              the three trees
            </h2>
            <p>
              git manages three "trees" (collections of files):
            </p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• <span className="text-stone-200">working directory</span> — the files you actually see and edit</li>
              <li>• <span className="text-stone-200">staging area (index)</span> — a preview of your next commit</li>
              <li>• <span className="text-stone-200">repository (HEAD)</span> — your last commit</li>
            </ul>
            <p className="mt-4">
              when you run git add, you're copying files from your working directory to the staging area. when you run git commit, you're taking the staging area and making it a permanent snapshot.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              branches are just pointers
            </h2>
            <p>
              here's the thing that changed how i think about git: a branch is just a pointer to a commit. that's it. when you create a new branch, git creates a tiny file (41 bytes) containing the hash of a commit. 
            </p>
            <p className="mt-4">
              HEAD is a special pointer that tells git which branch you're currently on. when you checkout a branch, you're just moving HEAD to point to that branch.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              merging vs rebasing
            </h2>
            <p>
              both merge and rebase integrate changes from one branch into another, but they do it differently:
            </p>
            <p className="mt-4">
              <span className="text-stone-200">merge</span> creates a new commit that has two parents, preserving the full history of both branches. your git history shows exactly what happened and when.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">rebase</span> replays your commits on top of another branch, rewriting history to make it look like you started from a different point. cleaner history, but you're changing commit hashes.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              the reflog saves everything
            </h2>
            <p>
              here's a secret: git almost never deletes anything. even if you think you've lost commits, they're probably still there. the reflog keeps a record of every time HEAD moved — every checkout, commit, rebase, and reset.
            </p>
            <p className="mt-4">
              run git reflog and you'll see a history of everywhere HEAD has been. you can recover "lost" commits by checking out their hash directly.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              commands that finally make sense
            </h2>
            <p>
              once you understand the model, commands become intuitive:
            </p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• <span className="text-stone-200">git reset --soft</span> — move HEAD, keep staging and working directory</li>
              <li>• <span className="text-stone-200">git reset --mixed</span> — move HEAD, reset staging, keep working directory</li>
              <li>• <span className="text-stone-200">git reset --hard</span> — move HEAD, reset everything</li>
              <li>• <span className="text-stone-200">git checkout</span> — move HEAD and update working directory</li>
              <li>• <span className="text-stone-200">git stash</span> — save working directory changes to a temporary commit</li>
            </ul>
          </section>

          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">references</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a
                  href="https://git-scm.com/book/en/v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  pro git book
                </a>
              </li>
              <li>
                <a
                  href="https://git-scm.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  git documentation
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}

