'use client';

import Link from 'next/link';

export default function GitBlog() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 py-12 px-4 md:px-8">
      <article className="max-w-lg mx-auto">
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
        <p className="text-stone-500 text-sm mb-6">nicholas chen · december 16, 2025 · 15 min read</p>

        {/* Cover image */}
        <img src="/blogs/git/git-copy.png" alt="Git" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>
              most developers (including me) use git every day without really understanding what's happening under the hood. we memorize commands like <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git add</code>, <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git commit</code>, and <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git push</code>, but when something goes wrong, we google and hope for the best.
            </p>
            <p className="mt-4">
              first, a clarification: <em>git</em> and <em>github</em> are NOT the same. git is a distributed version control system that runs locally on your machine. <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-stone-200 underline hover:text-white">github</a> is a hosting platform that stores git repositories online and adds collaboration features like pull requests and issues. git works entirely offline; github requires an internet connection. you can use git with <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" className="text-stone-200 underline hover:text-white">gitlab</a>, <a href="https://bitbucket.org" target="_blank" rel="noopener noreferrer" className="text-stone-200 underline hover:text-white">bitbucket</a>, or purely local repositories.
            </p>
          </section>

          {/* Part 1: Mental Model */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              understanding git's mental model
            </h2>
            <p>
              git is a directed acyclic graph (DAG) of snapshots. let's break that down: "directed" means the connections between commits only go one way, where each commit points to its parent (the commit that came before it), not the other way around. "acyclic" means there are no loops, so you can never follow the parent pointers and end up back where you started. this structure is what makes git's history reliable and traceable, and why it's become the most widely used version control system in the world.
            </p>
            <figure className="mt-6">
              <img
                src="/blogs/git/dag.png"
                alt="Directed Acyclic Graph diagram"
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                an out-tree (left) vs a directed acyclic graph (right). in git, commits form a DAG where nodes can have multiple parents.
              </figcaption>
            </figure>
            <p className="mt-4">
              every time you make a commit, git takes a snapshot of all your files and stores a reference to that snapshot. each commit points to its parent commit, creating a chain of history. when you branch and merge, commits can have multiple parents (merge commits) or be the parent of multiple commits (branch points), but the graph never loops back on itself.
            </p>
            <p className="mt-4">
              <em>note: a commit is not a diff. it's a complete snapshot of your entire project at that moment in time. git is smart about storage though — if a file hasn't changed, it just stores a pointer to the previous version.</em>
            </p>
            <figure className="mt-6">
              <img
                src="/blogs/git/git-diagram.png"
                alt="Git snapshot diagram"
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                how git creates snapshots: changes flow from working directory to staging area to commits.
              </figcaption>
            </figure>
            <p className="mt-4">
              let's say you have three files and commit. then you edit one file and commit again. the new commit stores the changed file but just points to the unchanged files from before. this is why git is efficient despite storing full snapshots. each commit has a unique SHA-1 hash that identifies it. the full hash is 40 characters, but git typically shows a shortened version (like <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">7c35b51</code>) since it's usually unique enough. think of this as the commit's address. commits also store metadata: author, timestamp, commit message, and most importantly, the hash of the parent commit(s). this parent pointer is what creates the chain of history.
            </p>
            <figure className="mt-6">
              <img
                src="/blogs/git/commit-hash.png"
                alt="GitHub commit showing shortened hash"
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                a commit on github showing the shortened hash (c198e06) on the right.
              </figcaption>
            </figure>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              the three trees
            </h3>
            <p>
              git manages three "trees" (collections of files):
            </p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• <span className="text-stone-200">working directory</span> — the files you actually see and edit</li>
              <li>• <span className="text-stone-200">staging area (index)</span> — a preview of your next commit</li>
              <li>• <span className="text-stone-200">repository (HEAD)</span> — your last commit</li>
            </ul>
            <p className="mt-4">
              when you run <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git add</code>, you're copying files from your working directory to the staging area. when you run <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git commit</code>, you're taking the staging area and making it a permanent snapshot.
            </p>
            <p className="mt-4">
              the staging area is what makes git powerful. you can choose to modify 10 files but only stage and commit 3 of them. this lets you create clean, logical commits even when you've made many unrelated changes.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-200 mb-3 mt-6">
              branches vs HEAD
            </h3>
            <p>
              a git branch is merely a lightweight pointer to a commit. HEAD is a special pointer indicating your current branch and position. when you create a branch, git just makes a new pointer to an existing commit, making branching very cheap.
            </p>
            <p className="mt-4">
              making a commit moves only the current branch's pointer forward. <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git checkout</code> moves HEAD and updates your working directory to match the commit that HEAD points to.
            </p>

            <figure className="mt-6">
              <img 
                src="/blogs/git/branches.png" 
                alt="Git branches vs HEAD" 
                className="w-full border border-stone-800"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                HEAD points to the current branch, which points to the latest commit. when HEAD moves (via checkout), your working directory updates.
              </figcaption>
            </figure>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              refs and the reflog
            </h3>
            <p>
              refs are pointers to commits. branches and tags are refs stored in <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">.git/refs/</code>. HEAD is a special ref pointing to your current branch.
            </p>
            <p className="mt-4">
              the reflog records every ref movement, acting as a safety net. even after a <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">reset --hard</code> or deleted branch, <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git reflog</code> lets you find and recover lost states using <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git reset HEAD@&#123;n&#125;</code>.
            </p>
          </section>

          {/* Part 2: Day-to-Day Git */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              everyday git
            </h2>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              setting up
            </h3>
            <p>
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git init</code> creates a new git repository in your current directory. it sets up the <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">.git</code> folder with all the necessary structure.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git clone</code> copies an existing repository from a remote source. it downloads the entire history and checks out the default branch.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git config</code> sets configuration options at the local, global, or system level. use it to set your name, email, editor, and other preferences.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              saving changes
            </h3>
            <p>
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git add</code> stages changes for the next commit. you can add specific files or patterns. <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git add .</code> stages everything in the current directory and below, while <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git add -A</code> stages everything in the entire repository.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git commit</code> creates a snapshot of your staged changes. use <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">-m</code> for a quick message or leave it off to open your editor for a detailed commit message.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git stash</code> temporarily saves your work without committing. useful when you need to switch branches but aren't ready to commit.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">.gitignore</code> tells git which files to ignore. list patterns for build artifacts, dependencies, and sensitive files that shouldn't be tracked.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              inspecting what's happening
            </h3>
            <p>
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git status</code> shows which files are modified, staged, or untracked.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git diff</code> shows unstaged changes. use <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">--staged</code> to see what you're about to commit, or compare branches and commits.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git log</code> shows commit history. add <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">--graph --oneline --all</code> for a visual representation of your branch structure.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              working with branches
            </h3>
            <p>
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git branch</code> lists, creates, or deletes branches. branches are just pointers to commits, so creating them is cheap and fast.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git checkout</code> switches between branches or restores files. <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git switch</code> is a newer, more focused alternative for switching branches.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git merge</code> combines changes from different branches. it creates a merge commit that has multiple parents.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              syncing with remotes
            </h3>
            <p>
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git remote</code> manages connections to remote repositories. you can add, remove, and rename remotes to control where you push and pull from.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git fetch</code> downloads objects and refs from a remote repository without merging. it updates your remote-tracking branches.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git push</code> uploads your local commits to a remote repository. use <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">-u</code> to set up tracking for new branches.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git pull</code> is fetch plus merge. it downloads changes and immediately tries to merge them into your current branch.
            </p>
          </section>

          {/* Part 3: Advanced Techniques */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              advanced techniques
            </h2>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              merge vs rebase
            </h3>
            <p>
              both merge and rebase integrate changes from one branch into another, but they do it differently:
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">merge</code> creates a new commit that has two parents, preserving the full history of both branches. your git history shows exactly what happened and when.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">rebase</code> replays your commits on top of another branch, rewriting history to make it look like you started from a different point. cleaner history, but you're changing commit hashes.
            </p>
            <p className="mt-4">
              let's see this with an example. say you have: main with commits A-B-C, and feature with commits A-B-D-E. if you merge feature into main, you get: A-B-C-F (where F is a merge commit with both C and E as parents). the history shows that feature was developed in parallel and merged in.
            </p>
            <p className="mt-4">
              if instead you rebase feature onto main (<code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git checkout feature && git rebase main</code>), git takes commits D and E and replays them on top of C. you end up with: A-B-C-D'-E' (D' and E' are new commits with different hashes). the history looks linear, as if you always worked off the latest main.
            </p>
            <p className="mt-4">
              golden rule: never rebase commits that you've pushed to a shared repository. rebasing rewrites history, which causes problems for anyone else who has those commits. merge is safe for shared branches, rebase is great for cleaning up local work before pushing.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              merge conflicts
            </h3>
            <p>
              conflicts happen when git can't automatically merge changes. both branches modified the same lines in the same file, and git doesn't know which version to keep.
            </p>
            <p className="mt-4">
              when you hit a conflict, git marks the conflicting sections in the file. you edit the file to resolve the conflict, stage it with <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git add</code>, then complete the merge with <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git commit</code>.
            </p>
            <p className="mt-4">
              git supports different merge strategies. the default recursive strategy handles most cases well. use <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">-X ours</code> or <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">-X theirs</code> to automatically prefer one side's changes when conflicts arise.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              undoing things safely
            </h3>
            <p>
              these three commands are often confused, but they serve different purposes:
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git reset</code> moves the branch pointer. use <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">--soft</code> to keep your changes staged, <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">--mixed</code> to unstage them, or <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">--hard</code> to discard everything. it rewrites history, so be careful with commits you've already pushed.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git checkout</code> switches branches or restores files. when you checkout a branch, you're moving HEAD to point to it. when you checkout a file, you're replacing it with a version from another commit.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git revert</code> creates a new commit that undoes changes from a previous commit. unlike reset, it doesn't rewrite history, making it safe for shared branches.
            </p>
            <p className="mt-4">
              let's say you have commits A-B-C-D and you're on D. here's what happens with each command:
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git reset --soft B</code>: moves your branch pointer to B, but keeps C and D's changes in your staging area. useful if you want to redo commits differently.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git reset --mixed B</code> (default): moves pointer to B and unstages the changes. C and D's changes are still in your working directory but not staged.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git reset --hard B</code>: moves pointer to B and discards all changes from C and D completely. dangerous! but you can still recover with reflog.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git revert D</code>: creates a new commit E that undoes D's changes. history becomes A-B-C-D-E. this is safe for shared branches because you're not rewriting history.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git clean</code> removes untracked files from your working directory. use <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">-n</code> first to see what would be deleted, then <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">-f</code> to actually do it.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              cherry picking commits
            </h3>
            <p>
              cherry pick lets you copy a specific commit from one branch to another. instead of merging an entire branch, you can pick individual commits you want.
            </p>
            <p className="mt-4">
              this is useful when you made a bug fix on the wrong branch, or when you need one feature from a branch but not the others. <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git cherry-pick &lt;commit-hash&gt;</code> applies that commit to your current branch.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              the reflog saves everything
            </h3>
            <p>
              here's a secret: git almost never deletes anything. even if you think you've lost commits, they're probably still there. the reflog keeps a record of every time HEAD moved — every checkout, commit, rebase, and reset.
            </p>
            <p className="mt-4">
              run <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git reflog</code> and you'll see a history of everywhere HEAD has been. you can recover "lost" commits by checking out their hash directly.
            </p>
          </section>

          {/* Part 4: Power Tools */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              power tools
            </h2>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              advanced git log
            </h3>
            <p>
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git log</code> is much more powerful than most people realize. you can visualize your branch structure with <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">--graph --oneline</code>, see what changed in each commit with <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">-p</code>, or filter by author, date, or even content.
            </p>
            <p className="mt-4">
              some useful options: <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git log --graph --oneline --all</code> shows your entire commit graph in a compact format. <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git log -S "function_name"</code> finds commits that added or removed that string. <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git log --author="name"</code> filters by author.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              git archaeology
            </h3>
            <p>
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git blame</code> shows who last modified each line of a file and when. despite the name, it's for understanding history, not assigning blame.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git show</code> displays information about git objects. most commonly, it shows the changes introduced by a commit. <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git show &lt;commit-hash&gt;</code> displays the commit message and diff in one view.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">gitk</code> is a graphical history viewer that ships with git. it shows your commit graph visually, making it easier to understand complex branch structures. run <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">gitk --all</code> to see all branches.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              git hooks
            </h3>
            <p>
              hooks are scripts that run automatically at certain points in git's workflow. pre-commit hooks can lint your code before allowing a commit. pre-push hooks can run tests before pushing. post-merge hooks can install dependencies after pulling.
            </p>
            <p className="mt-4">
              they live in <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">.git/hooks/</code> and can be written in any scripting language. hooks are local to your repository by default, but tools like husky can help you share them across a team.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              tagging releases
            </h3>
            <p>
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git tag</code> marks specific points in history as important. tags are commonly used for releases. unlike branches, tags don't move. use annotated tags (<code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git tag -a v1.0 -m "version 1.0"</code>) for releases as they store more metadata.
            </p>
          </section>

          {/* Part 5: Managing Large Projects */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              managing large projects
            </h2>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              submodules vs subtrees
            </h3>
            <p>
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git submodule</code> lets you include one git repository inside another. they're useful for shared libraries or when you need to track a dependency at a specific version. each submodule is a separate repository with its own history. the downside? submodules can be finicky. you need to remember to update them separately, and cloning requires <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">--recurse-submodules</code>.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git subtree</code> is an alternative that copies another repository into a subdirectory of your project. unlike submodules, the external project's files are actually part of your repository, making it simpler for collaborators. you can push and pull changes to the subtree repository while keeping everything in a single clone.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              handling large files
            </h3>
            <p>
              git was designed for the linux kernel, so it handles large repositories well, but there are limits. repositories with thousands of large files or years of history can slow down. partial clones (<code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">--filter=blob:none</code>) let you clone without all the files, and shallow clones (<code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">--depth=1</code>) skip most of the history.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git lfs</code> (large file storage) is an extension that stores large files outside your repository. instead of the actual file, git tracks a small pointer. the real files live on a separate server and are downloaded only when needed. lfs is essential for repositories with large images, videos, datasets, or compiled binaries.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              repository maintenance
            </h3>
            <p>
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git gc</code> stands for garbage collection. over time, git accumulates loose objects and redundant data. <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git gc</code> compresses these objects into packfiles and removes unreachable commits that are past the grace period. git usually runs gc automatically, but you can run it manually with <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git gc --aggressive</code> for a deeper clean.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git prune</code> removes objects that are no longer reachable from any ref. normally, git keeps "dangling" commits around in case you need to recover them. <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git prune</code> deletes these, freeing up disk space. be careful: once pruned, those commits are gone for good.
            </p>
          </section>

          {/* Part 6: Team Workflows */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              team workflows
            </h2>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              pull requests
            </h3>
            <p>
              pull requests aren't a git feature—they're a github, gitlab, or bitbucket feature. they let you propose changes to a repository and get them reviewed before merging. the typical workflow: push your branch to the remote, open a pull request through the web interface, discuss and review the changes, then merge when approved.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              feature branch workflow
            </h3>
            <p>
              all development happens on dedicated feature branches. main stays stable and deployable. developers create branches for each feature, work independently, then merge back through pull requests. this is simple and flexible, working well for continuous deployment. it's the default workflow for many teams.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              gitflow workflow
            </h3>
            <p>
              gitflow uses multiple long-lived branches: main for production, develop for integration, plus feature, release, and hotfix branches. it's more structured but also more complex. gitflow works well for scheduled releases but can be overkill for continuous deployment. it's falling out of favor as teams move toward simpler workflows.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              forking workflow
            </h3>
            <p>
              in the forking workflow, developers fork the main repository to their own account, make changes there, then submit pull requests back to the original repository. this is common in open source projects. it gives maintainers control over the main repository while letting anyone contribute without needing direct access.
            </p>
          </section>

          {/* Part 7: Miscellaneous */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              miscellaneous tips
            </h2>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              git bash (windows)
            </h3>
            <p>
              git bash is a terminal emulator for windows that provides a bash shell and common unix tools. it's packaged with git for windows and makes the command-line git experience consistent across platforms. beyond git commands, it includes tools like <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">ssh</code>, <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">grep</code>, and <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">awk</code>, making it a full unix-like environment on windows.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              storing dotfiles with git
            </h3>
            <p>
              dotfiles (like <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">.bashrc</code>, <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">.vimrc</code>, <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">.gitconfig</code>) are configuration files that live in your home directory. many developers use git to track them. the simplest approach is creating a dotfiles repository and symlinking files to your home directory.
            </p>
            <p className="mt-4">
              a clever alternative: make your home directory itself a git repository with a specially-named worktree. this lets you track files in place without moving them. just add everything else to <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">.gitignore</code> and only commit what you want.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              useful aliases
            </h3>
            <p>
              set up aliases in your git config to save time. some popular ones: <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git config --global alias.co checkout</code>, <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git config --global alias.br branch</code>, <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git config --global alias.st status</code>. create custom aliases for commands you use frequently.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              skip-worktree for local config
            </h3>
            <p>
              sometimes you need to modify a tracked file locally but never commit those changes. maybe it's a config file with local database credentials or API keys. <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">.gitignore</code> doesn't help here because the file is already tracked.
            </p>
            <p className="mt-4">
              <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git update-index --skip-worktree &lt;file&gt;</code> tells git to pretend your local version of a file hasn't changed, even when it has. git will ignore your modifications and won't include them in commits or show them in <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git status</code>.
            </p>
            <p className="mt-4">
              to undo it later, use <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git update-index --no-skip-worktree &lt;file&gt;</code>. to see which files have skip-worktree set, run <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">git ls-files -v | grep ^S</code>.
            </p>
          </section>

          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">references</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  git-scm.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.atlassian.com/git/tutorials/what-is-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  atlassian.com/git/tutorials/what-is-git
                </a>
              </li>
              <li>
                <a
                  href="https://www.pyblog.xyz/graph-theory-introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  pyblog.xyz/graph-theory-introduction
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
