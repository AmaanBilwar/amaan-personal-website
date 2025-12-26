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
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">git commands</h1>
        <p className="text-stone-500 text-sm mb-6">
          nicholas chen · december 21, 2025 · 4 min read
        </p>

        {/* Cover image */}
        <img src="/blogs/git/git-copy.png" alt="Git" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>
              through various work experiences and side projects, i've picked up a lot of git
              commands that have saved my life more than once. i wanted to create a central place to
              store all these commands for easy reference.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">mental model</h2>
            <p>
              git is a distributed version control system (local). github is a hosting platform
              (online). most of us memorize commands without understanding the graph model
              underneath.
            </p>
          </section>

          {/* Core Concepts */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              core concepts
            </h2>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-4">
              snapshots, not diffs
            </h3>
            <p>
              git stores a full snapshot of your project with every commit, not just the
              differences. if a file hasn't changed, it stores a pointer to the previous version.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-6">
              the three trees
            </h3>
            <ul className="space-y-2 list-disc list-inside text-stone-400">
              <li>
                <span className="text-stone-200">working directory</span>: files you see/edit.
              </li>
              <li>
                <span className="text-stone-200">staging area (index)</span>: changes ready for
                commit.
              </li>
              <li>
                <span className="text-stone-200">HEAD</span>: pointer to the last commit.
              </li>
            </ul>
          </section>

          {/* Setup & Config */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              setup & config
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --global user.name "name"
                </code>
                <p className="mt-1 text-stone-400">set your username for commits.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --global user.email "email"
                </code>
                <p className="mt-1 text-stone-400">set your email for commits.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --global color.ui auto
                </code>
                <p className="mt-1 text-stone-400">enable helpful color output.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --list
                </code>
                <p className="mt-1 text-stone-400">show all configuration settings.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --global alias.co checkout
                </code>
                <p className="mt-1 text-stone-400">
                  create a shortcut: type 'git co' instead of 'git checkout'.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git config --global core.editor "code --wait"
                </code>
                <p className="mt-1 text-stone-400">
                  set vs code as default editor for commit messages.
                </p>
              </div>
            </div>
          </section>

          {/* Getting & Creating Projects */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              getting & creating projects
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git init</code>
                <p className="mt-1 text-stone-400">initialize a new repo in current directory.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git clone &lt;url&gt;
                </code>
                <p className="mt-1 text-stone-400">download a repo and its entire history.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git clone --depth=1 &lt;url&gt;
                </code>
                <p className="mt-1 text-stone-400">shallow clone (latest snapshot only, faster).</p>
              </div>
            </div>
          </section>

          {/* Basic Snapshotting */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              basic snapshotting
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git commit --amend --no-edit
                </code>
                <p className="mt-1 text-stone-400">
                  add staged changes to last commit without changing message.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git status</code>
                <p className="mt-1 text-stone-400">show modified, staged, and untracked files.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git add &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">stage a specific file for the next commit.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git add .</code>
                <p className="mt-1 text-stone-400">stage all changes in current directory.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git add -p</code>
                <p className="mt-1 text-stone-400">interactively choose chunks of code to stage.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git commit -m "msg"
                </code>
                <p className="mt-1 text-stone-400">save staged changes as a new snapshot.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git commit -am "msg"
                </code>
                <p className="mt-1 text-stone-400">stage tracked files and commit in one step.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git rm &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">remove a file from working tree and index.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git mv &lt;old&gt; &lt;new&gt;
                </code>
                <p className="mt-1 text-stone-400">move or rename a file.</p>
              </div>
            </div>
          </section>

          {/* Branching & Merging */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              branching & merging
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git switch -</code>
                <p className="mt-1 text-stone-400">quickly switch back to the previous branch.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git branch --merged
                </code>
                <p className="mt-1 text-stone-400">list branches already merged into current.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git merge-base A B
                </code>
                <p className="mt-1 text-stone-400">find the common ancestor of two branches.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git branch</code>
                <p className="mt-1 text-stone-400">list all local branches.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git branch &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">create a new branch (pointer).</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git branch -d &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">delete a merged branch safely.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git branch -D &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">force delete a branch (even if unmerged).</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git switch &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">switch to a branch.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git switch -c &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">create and switch to a new branch.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git merge &lt;branch&gt;
                </code>
                <p className="mt-1 text-stone-400">
                  combine history of another branch into current.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git merge --abort
                </code>
                <p className="mt-1 text-stone-400">
                  cancel a merge in progress and return to pre-merge state.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git tag &lt;name&gt;
                </code>
                <p className="mt-1 text-stone-400">mark the current commit with a tag.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git tag -a &lt;name&gt; -m "msg"
                </code>
                <p className="mt-1 text-stone-400">create an annotated tag with metadata.</p>
              </div>
            </div>
          </section>

          {/* Sharing & Updating */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              sharing & updating
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git remote rename &lt;old&gt; &lt;new&gt;
                </code>
                <p className="mt-1 text-stone-400">rename a remote connection.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git push origin :&lt;branch&gt;
                </code>
                <p className="mt-1 text-stone-400">delete a remote branch.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git remote -v</code>
                <p className="mt-1 text-stone-400">list all remote repositories.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git remote add origin &lt;url&gt;
                </code>
                <p className="mt-1 text-stone-400">connect local repo to a remote one.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git remote set-url origin &lt;url&gt;
                </code>
                <p className="mt-1 text-stone-400">change the url of an existing remote.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git fetch</code>
                <p className="mt-1 text-stone-400">download changes from remote but don't merge.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git fetch --prune
                </code>
                <p className="mt-1 text-stone-400">
                  delete local refs to remote branches that were deleted.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git pull</code>
                <p className="mt-1 text-stone-400">fetch + merge (update current branch).</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git push</code>
                <p className="mt-1 text-stone-400">upload local commits to remote.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git push -u origin &lt;branch&gt;
                </code>
                <p className="mt-1 text-stone-400">push and set upstream tracking.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git push --force-with-lease
                </code>
                <p className="mt-1 text-stone-400">
                  safer force push; fails if someone else pushed.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git push --tags</code>
                <p className="mt-1 text-stone-400">push all local tags to remote.</p>
              </div>
            </div>
          </section>

          {/* Inspection & Comparison */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              inspection & comparison
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git log -S "text"
                </code>
                <p className="mt-1 text-stone-400">
                  search history for the first occurrence of a string.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git log --author="name"
                </code>
                <p className="mt-1 text-stone-400">filter commit history by author.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git log --since="2.weeks"
                </code>
                <p className="mt-1 text-stone-400">show commits from a specific timeframe.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git log</code>
                <p className="mt-1 text-stone-400">show commit history.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git log --oneline --graph
                </code>
                <p className="mt-1 text-stone-400">visualize commit history graph compactly.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git shortlog -sn
                </code>
                <p className="mt-1 text-stone-400">show summary of commits by author.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git diff</code>
                <p className="mt-1 text-stone-400">show unstaged changes.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git diff --staged
                </code>
                <p className="mt-1 text-stone-400">show staged changes (what will be committed).</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git diff --word-diff
                </code>
                <p className="mt-1 text-stone-400">
                  highlight changed words instead of whole lines.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git show &lt;hash&gt;
                </code>
                <p className="mt-1 text-stone-400">
                  show changes and metadata for a specific commit.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git blame &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">show who modified each line of a file.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git blame -L 10,20 &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">blame only lines 10 through 20.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git grep "text"</code>
                <p className="mt-1 text-stone-400">search for text inside tracked files.</p>
              </div>
            </div>
          </section>

          {/* Undo & Fix */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">undo & fix</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git checkout &lt;hash&gt; -- &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">restore a file to a specific past version.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git update-ref -d HEAD
                </code>
                <p className="mt-1 text-stone-400">
                  effectively "un-initialize" the first commit of a repo.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git reset --soft HEAD~1
                </code>
                <p className="mt-1 text-stone-400">undo last commit but keep changes staged.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git reset --hard HEAD~1
                </code>
                <p className="mt-1 text-stone-400">
                  undo last commit and discard all changes (dangerous).
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git revert &lt;hash&gt;
                </code>
                <p className="mt-1 text-stone-400">
                  create new commit that reverses a previous one.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git restore &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">discard local changes in a file.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git restore --staged &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">
                  unstage a file (keep changes in working directory).
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git commit --amend
                </code>
                <p className="mt-1 text-stone-400">
                  add staged changes to previous commit / edit message.
                </p>
              </div>
            </div>
          </section>

          {/* Advanced & Power Tools */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              advanced & power tools
            </h2>
            <div className="space-y-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git rebase -i HEAD~3
                </code>
                <p className="mt-1 text-stone-400">
                  interactively rewrite history: squash, fixup, reorder, or drop.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git rebase &lt;branch&gt;
                </code>
                <p className="mt-1 text-stone-400">reapply commits on top of another base tip.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git stash
                </code>
                <p className="mt-1 text-stone-400">temporarily shelve dirty changes.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git stash pop
                </code>
                <p className="mt-1 text-stone-400">
                  reapply stashed changes and remove from stash list.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git stash list
                </code>
                <p className="mt-1 text-stone-400">list all stashed changesets.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git stash -u
                </code>
                <p className="mt-1 text-stone-400">stash including untracked files.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git bisect start
                </code>
                <p className="mt-1 text-stone-400">
                  start binary search to find the commit that introduced a bug.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git cherry-pick &lt;hash&gt;
                </code>
                <p className="mt-1 text-stone-400">apply the changes from a specific commit.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git reflog
                </code>
                <p className="mt-1 text-stone-400">
                  show a log of all reference movements (recover lost commits).
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git worktree add &lt;path&gt; &lt;branch&gt;
                </code>
                <p className="mt-1 text-stone-400">
                  checkout multiple branches in parallel folders.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git submodule update --init
                </code>
                <p className="mt-1 text-stone-400">fetch and update submodule dependencies.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs">
                  git rerere
                </code>
                <p className="mt-1 text-stone-400">
                  reuse recorded resolution of conflicted merges.
                </p>
              </div>
            </div>
          </section>

          {/* Administration */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              administration
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git clean -fd</code>
                <p className="mt-1 text-stone-400">remove all untracked files and directories.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">git gc</code>
                <p className="mt-1 text-stone-400">
                  cleanup unnecessary files and optimize local repo.
                </p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git check-ignore -v &lt;file&gt;
                </code>
                <p className="mt-1 text-stone-400">debug why a file is being ignored.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git archive -o project.zip HEAD
                </code>
                <p className="mt-1 text-stone-400">export the current branch to a zip file.</p>
              </div>
              <div>
                <code className="text-stone-200 bg-stone-800/50 px-1 rounded">
                  git rev-parse HEAD
                </code>
                <p className="mt-1 text-stone-400">
                  output the full SHA-1 hash of the current commit.
                </p>
              </div>
            </div>
          </section>

          {/* References */}
          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">references</h3>
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
      </article>
    </main>
  );
}
