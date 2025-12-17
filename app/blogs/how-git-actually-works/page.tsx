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
              most developers (including me) use git every day without really understanding what's happening under the hood. we memorize commands like git add, git commit, and git push, but when something goes wrong, we panic. i wanted to write this blog to learn about the git commands i don't know and understand how each of these work under the hood. this post breaks down how git actually works so you can stop being afraid of it.
            </p>
            <p className="mt-4">
              first, a clarification: <em>git</em> and <em>github</em> are NOT the same. git is a distributed version control system that runs locally on your machine. github is a hosting platform that stores git repositories online and adds collaboration features like pull requests and issues. git works entirely offline; github requires an internet connection. you can use git with gitlab, bitbucket, or purely local repositories.
            </p>
          </section>

          {/* Part 1: Mental Model */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              understanding git's mental model
            </h2>
            <p>
              at its core, git is a directed acyclic graph (DAG) of snapshots. let's break that down: "directed" means the connections between commits only go one way, where each commit points to its parent (the commit that came before it), not the other way around. "acyclic" means there are no loops, so you can never follow the parent pointers and end up back where you started. this structure is what makes git's history reliable and traceable.
            </p>
            <p className="mt-4">
              every time you make a commit, git takes a snapshot of all your files and stores a reference to that snapshot. each commit points to its parent commit, creating a chain of history. when you branch and merge, commits can have multiple parents (merge commits) or be the parent of multiple commits (branch points), but the graph never loops back on itself.
            </p>
            <figure className="mt-6">
              <img
                src="/blogs/git/git-diagram.png"
                alt="Git snapshot diagram"
                className="w-full"
              />
            </figure>
            <p className="mt-4">
              a commit is not a diff. it's a complete snapshot of your entire project at that moment in time. git is smart about storage though — if a file hasn't changed, it just stores a pointer to the previous version.
            </p>
            <p className="mt-4">
              here's a concrete example: let's say you have three files (app.js, styles.css, README.md) and you make a commit. git stores all three files. then you edit app.js and commit again. the new commit contains a new version of app.js, but styles.css and README.md are just pointers to the previous versions. this is why git is so efficient even though it stores "everything."
            </p>
            <p className="mt-4">
              each commit has a unique SHA-1 hash (like 7c35b51) that identifies it. think of this as the commit's address. commits also store metadata: author, timestamp, commit message, and most importantly, the hash of the parent commit(s). this parent pointer is what creates the chain of history.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              the three trees
            </h3>
            <p>
              git manages three "trees" (collections of files):
            </p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">working directory</code> — the files you actually see and edit</li>
              <li>• <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">staging area (index)</code> — a preview of your next commit</li>
              <li>• <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">repository (HEAD)</code> — your last commit</li>
            </ul>
            <p className="mt-4">
              when you run <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git add</code>, you're copying files from your working directory to the staging area. when you run <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git commit</code>, you're taking the staging area and making it a permanent snapshot.
            </p>
            <p className="mt-4">
              let's walk through an example. you edit app.js in your working directory. at this point, git status would show it as "modified". you run <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git add app.js</code> — now the file is in the staging area and git status shows it as "changes to be committed". finally, you run <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git commit -m "fix bug"</code> and the staged changes become a permanent commit in the repository.
            </p>
            <p className="mt-4">
              the staging area is what makes git powerful. you can modify 10 files but only stage and commit 3 of them. this lets you create clean, logical commits even when you've made many unrelated changes.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-200 mb-3 mt-6">
              branches and HEAD are just pointers
            </h3>
            <p>
              here's the thing that changed how i think about git: a branch is just a pointer to a commit. that's it. when you create a new branch, git creates a tiny file (41 bytes) containing the hash of a commit. 
            </p>
            <p className="mt-4">
              HEAD is a special pointer that tells git which branch you're currently on. when you checkout a branch, you're just moving HEAD to point to that branch.
            </p>
            <p className="mt-4">
              imagine you have this commit history: <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">A ← B ← C</code>. your main branch points to commit C. when you run <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git branch feature</code>, git just creates a new pointer called "feature" that also points to commit C. nothing else changes. no files are copied, no commits are duplicated.
            </p>
            <p className="mt-4">
              when you make a new commit on the feature branch, only the feature pointer moves forward: <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">A ← B ← C ← D</code>. main still points to C, feature points to D. this is why branching in git is so cheap — it's literally just creating a 41-byte file.
            </p>
            <p className="mt-4">
              HEAD is like a "you are here" marker. if you're on the main branch, HEAD points to main. if you're on feature, HEAD points to feature. when you run <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git checkout feature</code>, you're just moving HEAD from main to feature, and git updates your working directory to match the commit that feature points to.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              refs and the reflog
            </h3>
            <p>
              refs are pointers to commits. branches are refs (stored in .git/refs/heads/), tags are refs (.git/refs/tags/), and HEAD is a special ref that points to your current branch.
            </p>
            <p className="mt-4">
              the reflog is a safety net that records every time a ref moves. even if you delete a branch or reset --hard, the reflog remembers where you were. you can use git reflog to see the history and git reset HEAD@&#123;n&#125; to go back to any previous state.
            </p>
          </section>

          {/* Part 2: Day-to-Day Git */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
              day-to-day git
            </h2>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              setting up
            </h3>
            <p>
              <span className="text-stone-200">git init</span> creates a new git repository in your current directory. it sets up the .git folder with all the necessary structure.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git clone</span> copies an existing repository from a remote source. it downloads the entire history and checks out the default branch.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git config</span> sets configuration options at the local, global, or system level. use it to set your name, email, editor, and other preferences.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              saving changes
            </h3>
            <p>
              <span className="text-stone-200">git add</span> stages changes for the next commit. you can add specific files, patterns, or use -A to add everything.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git commit</span> creates a snapshot of your staged changes. use -m for a quick message or leave it off to open your editor for a detailed commit message.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git stash</span> temporarily saves your work without committing. useful when you need to switch branches but aren't ready to commit.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">.gitignore</span> tells git which files to ignore. list patterns for build artifacts, dependencies, and sensitive files that shouldn't be tracked.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              inspecting what's happening
            </h3>
            <p>
              <span className="text-stone-200">git status</span> shows which files are modified, staged, or untracked.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git diff</span> shows unstaged changes. use --staged to see what you're about to commit, or compare branches and commits.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git log</span> shows commit history. add --graph --oneline --all for a visual representation of your branch structure.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              working with branches
            </h3>
            <p>
              <span className="text-stone-200">git branch</span> lists, creates, or deletes branches. branches are just pointers to commits, so creating them is cheap and fast.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git checkout</span> switches between branches or restores files. git switch is a newer, more focused alternative for switching branches.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git merge</span> combines changes from different branches. it creates a merge commit that has multiple parents.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              syncing with remotes
            </h3>
            <p>
              <span className="text-stone-200">git remote</span> manages connections to remote repositories. you can add, remove, and rename remotes to control where you push and pull from.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git fetch</span> downloads objects and refs from a remote repository without merging. it updates your remote-tracking branches.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git push</span> uploads your local commits to a remote repository. use -u to set up tracking for new branches.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git pull</span> is fetch plus merge. it downloads changes and immediately tries to merge them into your current branch.
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
              <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">merge</code> creates a new commit that has two parents, preserving the full history of both branches. your git history shows exactly what happened and when.
            </p>
            <p className="mt-4">
              <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">rebase</code> replays your commits on top of another branch, rewriting history to make it look like you started from a different point. cleaner history, but you're changing commit hashes.
            </p>
            <p className="mt-4">
              let's see this with an example. say you have: main with commits A-B-C, and feature with commits A-B-D-E. if you merge feature into main, you get: A-B-C-F (where F is a merge commit with both C and E as parents). the history shows that feature was developed in parallel and merged in.
            </p>
            <p className="mt-4">
              if instead you rebase feature onto main (<code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git checkout feature && git rebase main</code>), git takes commits D and E and replays them on top of C. you end up with: A-B-C-D'-E' (D' and E' are new commits with different hashes). the history looks linear, as if you always worked off the latest main.
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
              when you hit a conflict, git marks the conflicting sections in the file. you edit the file to resolve the conflict, stage it with git add, then complete the merge with git commit.
            </p>
            <p className="mt-4">
              git supports different merge strategies. the default recursive strategy handles most cases well. use -X ours or -X theirs to automatically prefer one side's changes when conflicts arise.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              undoing things safely
            </h3>
            <p>
              these three commands are often confused, but they serve different purposes:
            </p>
            <p className="mt-4">
              <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git reset</code> moves the branch pointer. use --soft to keep your changes staged, --mixed to unstage them, or --hard to discard everything. it rewrites history, so be careful with commits you've already pushed.
            </p>
            <p className="mt-4">
              <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git checkout</code> switches branches or restores files. when you checkout a branch, you're moving HEAD to point to it. when you checkout a file, you're replacing it with a version from another commit.
            </p>
            <p className="mt-4">
              <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git revert</code> creates a new commit that undoes changes from a previous commit. unlike reset, it doesn't rewrite history, making it safe for shared branches.
            </p>
            <p className="mt-4">
              let's say you have commits A-B-C-D and you're on D. here's what happens with each command:
            </p>
            <p className="mt-4">
              <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git reset --soft B</code>: moves your branch pointer to B, but keeps C and D's changes in your staging area. useful if you want to redo commits differently.
            </p>
            <p className="mt-4">
              <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git reset --mixed B</code> (default): moves pointer to B and unstages the changes. C and D's changes are still in your working directory but not staged.
            </p>
            <p className="mt-4">
              <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git reset --hard B</code>: moves pointer to B and discards all changes from C and D completely. dangerous! but you can still recover with reflog.
            </p>
            <p className="mt-4">
              <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git revert D</code>: creates a new commit E that undoes D's changes. history becomes A-B-C-D-E. this is safe for shared branches because you're not rewriting history.
            </p>
            <p className="mt-4">
              <code className="px-1.5 py-0.5 bg-stone-800/50 rounded text-stone-200">git clean</code> removes untracked files from your working directory. use -n first to see what would be deleted, then -f to actually do it.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              cherry picking commits
            </h3>
            <p>
              cherry pick lets you copy a specific commit from one branch to another. instead of merging an entire branch, you can pick individual commits you want.
            </p>
            <p className="mt-4">
              this is useful when you made a bug fix on the wrong branch, or when you need one feature from a branch but not the others. git cherry-pick &lt;commit-hash&gt; applies that commit to your current branch.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              the reflog saves everything
            </h3>
            <p>
              here's a secret: git almost never deletes anything. even if you think you've lost commits, they're probably still there. the reflog keeps a record of every time HEAD moved — every checkout, commit, rebase, and reset.
            </p>
            <p className="mt-4">
              run git reflog and you'll see a history of everywhere HEAD has been. you can recover "lost" commits by checking out their hash directly.
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
              git log is much more powerful than most people realize. you can visualize your branch structure with --graph --oneline, see what changed in each commit with -p, or filter by author, date, or even content.
            </p>
            <p className="mt-4">
              some useful options: git log --graph --oneline --all shows your entire commit graph in a compact format. git log -S "function_name" finds commits that added or removed that string. git log --author="name" filters by author.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              git archaeology
            </h3>
            <p>
              <span className="text-stone-200">git blame</span> shows who last modified each line of a file and when. despite the name, it's for understanding history, not assigning blame.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git show</span> displays information about git objects. most commonly, it shows the changes introduced by a commit. git show &lt;commit-hash&gt; displays the commit message and diff in one view.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">gitk</span> is a graphical history viewer that ships with git. it shows your commit graph visually, making it easier to understand complex branch structures. run gitk --all to see all branches.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              git hooks
            </h3>
            <p>
              hooks are scripts that run automatically at certain points in git's workflow. pre-commit hooks can lint your code before allowing a commit. pre-push hooks can run tests before pushing. post-merge hooks can install dependencies after pulling.
            </p>
            <p className="mt-4">
              they live in .git/hooks/ and can be written in any scripting language. hooks are local to your repository by default, but tools like husky can help you share them across a team.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              tagging releases
            </h3>
            <p>
              <span className="text-stone-200">git tag</span> marks specific points in history as important. tags are commonly used for releases. unlike branches, tags don't move. use annotated tags (git tag -a v1.0 -m "version 1.0") for releases as they store more metadata.
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
              <span className="text-stone-200">git submodules</span> let you include one git repository inside another. they're useful for shared libraries or when you need to track a dependency at a specific version. each submodule is a separate repository with its own history. the downside? submodules can be finicky. you need to remember to update them separately, and cloning requires --recurse-submodules.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git subtree</span> is an alternative that copies another repository into a subdirectory of your project. unlike submodules, the external project's files are actually part of your repository, making it simpler for collaborators. you can push and pull changes to the subtree repository while keeping everything in a single clone.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              handling large files
            </h3>
            <p>
              git was designed for the linux kernel, so it handles large repositories well, but there are limits. repositories with thousands of large files or years of history can slow down. partial clones (--filter=blob:none) let you clone without all the files, and shallow clones (--depth=1) skip most of the history.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git lfs</span> (large file storage) is an extension that stores large files outside your repository. instead of the actual file, git tracks a small pointer. the real files live on a separate server and are downloaded only when needed. lfs is essential for repositories with large images, videos, datasets, or compiled binaries.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              repository maintenance
            </h3>
            <p>
              <span className="text-stone-200">git gc</span> stands for garbage collection. over time, git accumulates loose objects and redundant data. git gc compresses these objects into packfiles and removes unreachable commits that are past the grace period. git usually runs gc automatically, but you can run it manually with git gc --aggressive for a deeper clean.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git prune</span> removes objects that are no longer reachable from any ref. normally, git keeps "dangling" commits around in case you need to recover them. git prune deletes these, freeing up disk space. be careful: once pruned, those commits are gone for good.
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
              git bash is a terminal emulator for windows that provides a bash shell and common unix tools. it's packaged with git for windows and makes the command-line git experience consistent across platforms. beyond git commands, it includes tools like ssh, grep, and awk, making it a full unix-like environment on windows.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              storing dotfiles with git
            </h3>
            <p>
              dotfiles (like .bashrc, .vimrc, .gitconfig) are configuration files that live in your home directory. many developers use git to track them. the simplest approach is creating a dotfiles repository and symlinking files to your home directory.
            </p>
            <p className="mt-4">
              a clever alternative: make your home directory itself a git repository with a specially-named worktree. this lets you track files in place without moving them. just add everything else to .gitignore and only commit what you want.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-3 mt-6">
              useful aliases
            </h3>
            <p>
              set up aliases in your git config to save time. some popular ones: git config --global alias.co checkout, git config --global alias.br branch, git config --global alias.st status. create custom aliases for commands you use frequently.
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
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
