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
        <p className="text-stone-500 text-sm mb-6">nicholas chen · december 16, 2025 · 5 min read</p>

        {/* Cover image */}
        <img src="/blogs/git/git-copy.png" alt="Git" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>
              most developers (including me) use git every day without really understanding what's happening under the hood. we memorize commands like git add, git commit, and git push, but when something goes wrong, we panic. i wanted to write this blog to learn about the git commands i don't know and understand how each of them work under the hood. this post breaks down how git actually and how you can use it to your advantage.
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
              reset, checkout, and revert
            </h2>
            <p>
              these three commands are often confused, but they serve different purposes:
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git reset</span> moves the branch pointer. use --soft to keep your changes staged, --mixed to unstage them, or --hard to discard everything. it rewrites history, so be careful with commits you've already pushed.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git checkout</span> switches branches or restores files. when you checkout a branch, you're moving HEAD to point to it. when you checkout a file, you're replacing it with a version from another commit.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git revert</span> creates a new commit that undoes changes from a previous commit. unlike reset, it doesn't rewrite history, making it safe for shared branches.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              advanced git log
            </h2>
            <p>
              git log is much more powerful than most people realize. you can visualize your branch structure with --graph --oneline, see what changed in each commit with -p, or filter by author, date, or even content.
            </p>
            <p className="mt-4">
              some useful options: git log --graph --oneline --all shows your entire commit graph in a compact format. git log -S "function_name" finds commits that added or removed that string. git log --author="name" filters by author.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              git hooks
            </h2>
            <p>
              hooks are scripts that run automatically at certain points in git's workflow. pre-commit hooks can lint your code before allowing a commit. pre-push hooks can run tests before pushing. post-merge hooks can install dependencies after pulling.
            </p>
            <p className="mt-4">
              they live in .git/hooks/ and can be written in any scripting language. hooks are local to your repository by default, but tools like husky can help you share them across a team.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              refs and the reflog
            </h2>
            <p>
              refs are pointers to commits. branches are refs (stored in .git/refs/heads/), tags are refs (.git/refs/tags/), and HEAD is a special ref that points to your current branch.
            </p>
            <p className="mt-4">
              the reflog is a safety net that records every time a ref moves. even if you delete a branch or reset --hard, the reflog remembers where you were. you can use git reflog to see the history and git reset HEAD@&#123;n&#125; to go back to any previous state.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              git submodules
            </h2>
            <p>
              submodules let you include one git repository inside another. they're useful for shared libraries or when you need to track a dependency at a specific version. each submodule is a separate repository with its own history.
            </p>
            <p className="mt-4">
              the downside? submodules can be finicky. you need to remember to update them separately, and cloning requires --recurse-submodules. they're powerful but require extra care.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              git subtree
            </h2>
            <p>
              subtree is an alternative to submodules that copies another repository into a subdirectory of your project. unlike submodules, the external project's files are actually part of your repository, making it simpler for collaborators.
            </p>
            <p className="mt-4">
              you can push and pull changes to the subtree repository while keeping everything in a single clone. it's often easier to work with than submodules, but it does bloat your repository size.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              large repositories in git
            </h2>
            <p>
              git was designed for the linux kernel, so it handles large repositories well, but there are limits. repositories with thousands of large files or years of history can slow down. partial clones (--filter=blob:none) let you clone without all the files, and shallow clones (--depth=1) skip most of the history.
            </p>
            <p className="mt-4">
              for repositories with many large binary files, git's delta compression doesn't work well. that's where git lfs comes in.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              git lfs
            </h2>
            <p>
              git large file storage (lfs) is an extension that stores large files outside your repository. instead of the actual file, git tracks a small pointer. the real files live on a separate server and are downloaded only when needed.
            </p>
            <p className="mt-4">
              lfs is essential for repositories with large images, videos, datasets, or compiled binaries. without it, every clone downloads every version of every large file, making repositories slow and bloated.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              git gc
            </h2>
            <p>
              gc stands for garbage collection. over time, git accumulates loose objects and redundant data. git gc compresses these objects into packfiles and removes unreachable commits that are past the grace period.
            </p>
            <p className="mt-4">
              git usually runs gc automatically, but you can run it manually with git gc --aggressive for a deeper clean. this can significantly reduce repository size.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              git prune
            </h2>
            <p>
              prune removes objects that are no longer reachable from any ref. normally, git keeps "dangling" commits around in case you need to recover them. git prune deletes these, freeing up disk space.
            </p>
            <p className="mt-4">
              be careful: once pruned, those commits are gone for good. git gc includes a prune step automatically, so you rarely need to run it manually.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              git bash
            </h2>
            <p>
              git bash is a terminal emulator for windows that provides a bash shell and common unix tools. it's packaged with git for windows and makes the command-line git experience consistent across platforms.
            </p>
            <p className="mt-4">
              beyond git commands, it includes tools like ssh, grep, and awk, making it a full unix-like environment on windows.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              how to store dotfiles
            </h2>
            <p>
              dotfiles (like .bashrc, .vimrc, .gitconfig) are configuration files that live in your home directory. many developers use git to track them. the simplest approach is creating a dotfiles repository and symlinking files to your home directory.
            </p>
            <p className="mt-4">
              a clever alternative: make your home directory itself a git repository with a specially-named worktree. this lets you track files in place without moving them. just add everything else to .gitignore and only commit what you want.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              git cherry pick
            </h2>
            <p>
              cherry pick lets you copy a specific commit from one branch to another. instead of merging an entire branch, you can pick individual commits you want.
            </p>
            <p className="mt-4">
              this is useful when you made a bug fix on the wrong branch, or when you need one feature from a branch but not the others. git cherry-pick &lt;commit-hash&gt; applies that commit to your current branch.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              gitk
            </h2>
            <p>
              gitk is a graphical history viewer that ships with git. it shows your commit graph visually, making it easier to understand complex branch structures. while not the prettiest tool, it's fast and available everywhere git is.
            </p>
            <p className="mt-4">
              run gitk --all to see all branches, or gitk &lt;filename&gt; to see the history of a specific file. it's especially helpful for untangling messy merge histories.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              git show
            </h2>
            <p>
              git show displays information about git objects. most commonly, it shows the changes introduced by a commit. git show &lt;commit-hash&gt; displays the commit message and diff in one view.
            </p>
            <p className="mt-4">
              you can also use it to view files at specific commits (git show commit:path/to/file) or to inspect tags and trees. it's one of the most versatile git commands.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              setting up a repository
            </h2>
            <p>
              <span className="text-stone-200">git init</span> creates a new git repository in your current directory. it sets up the .git folder with all the necessary structure.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git clone</span> copies an existing repository from a remote source. it downloads the entire history and checks out the default branch.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git config</span> sets configuration options at the local, global, or system level. use it to set your name, email, editor, and other preferences.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git alias</span> lets you create shortcuts for frequently used commands. set up aliases in your git config to save time on common operations.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              saving changes
            </h2>
            <p>
              <span className="text-stone-200">git add</span> stages changes for the next commit. you can add specific files, patterns, or use -A to add everything.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git commit</span> creates a snapshot of your staged changes. use -m for a quick message or leave it off to open your editor for a detailed commit message.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git diff</span> shows unstaged changes. use --staged to see what you're about to commit, or compare branches and commits.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git stash</span> temporarily saves your work without committing. useful when you need to switch branches but aren't ready to commit.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">.gitignore</span> tells git which files to ignore. list patterns for build artifacts, dependencies, and sensitive files that shouldn't be tracked.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              inspecting a repository
            </h2>
            <p>
              <span className="text-stone-200">git tag</span> marks specific points in history as important. tags are commonly used for releases. unlike branches, tags don't move.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git blame</span> shows who last modified each line of a file and when. despite the name, it's for understanding history, not assigning blame.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              undoing changes
            </h2>
            <p>
              <span className="text-stone-200">git clean</span> removes untracked files from your working directory. use -n first to see what would be deleted, then -f to actually do it.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git revert</span> creates a new commit that undoes a previous commit. safe for shared branches because it doesn't rewrite history.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git reset</span> moves your branch pointer to a different commit. use --soft, --mixed, or --hard depending on what you want to keep.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git rm</span> removes files from both your working directory and the staging area. use --cached to only remove from staging.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              rewriting history
            </h2>
            <p>
              <span className="text-stone-200">git rebase</span> moves or replays commits onto a new base. it rewrites history to make it linear and clean, but be careful with shared branches.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git reflog</span> is your safety net. it tracks every movement of HEAD, letting you recover from mistakes even after force pushes or hard resets.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              syncing with remotes
            </h2>
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

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              making a pull request
            </h2>
            <p>
              pull requests aren't a git feature—they're a github, gitlab, or bitbucket feature. they let you propose changes to a repository and get them reviewed before merging.
            </p>
            <p className="mt-4">
              the typical workflow: push your branch to the remote, open a pull request through the web interface, discuss and review the changes, then merge when approved.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              using branches
            </h2>
            <p>
              <span className="text-stone-200">git branch</span> lists, creates, or deletes branches. branches are just pointers to commits, so creating them is cheap and fast.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git checkout</span> switches between branches or restores files. git switch is a newer, more focused alternative for switching branches.
            </p>
            <p className="mt-4">
              <span className="text-stone-200">git merge</span> combines changes from different branches. it creates a merge commit that has multiple parents.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              merge conflicts
            </h2>
            <p>
              conflicts happen when git can't automatically merge changes. both branches modified the same lines in the same file, and git doesn't know which version to keep.
            </p>
            <p className="mt-4">
              when you hit a conflict, git marks the conflicting sections in the file. you edit the file to resolve the conflict, stage it with git add, then complete the merge with git commit.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              merge strategies
            </h2>
            <p>
              git supports different merge strategies. the default recursive strategy handles most cases well. ours and theirs automatically prefer one side's changes. octopus merges more than two branches at once.
            </p>
            <p className="mt-4">
              you can specify a strategy with -s or use strategy options with -X. for example, -X ours during a merge automatically picks your version when conflicts arise.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              comparing workflows
            </h2>
            <p>
              different teams use different git workflows. the right choice depends on your team size, release cadence, and deployment process.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              feature branch workflow
            </h2>
            <p>
              all development happens on dedicated feature branches. main stays stable and deployable. developers create branches for each feature, work independently, then merge back through pull requests.
            </p>
            <p className="mt-4">
              this is simple and flexible, working well for continuous deployment. it's the default workflow for many teams.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              gitflow workflow
            </h2>
            <p>
              gitflow uses multiple long-lived branches: main for production, develop for integration, plus feature, release, and hotfix branches. it's more structured but also more complex.
            </p>
            <p className="mt-4">
              gitflow works well for scheduled releases but can be overkill for continuous deployment. it's falling out of favor as teams move toward simpler workflows.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              forking workflow
            </h2>
            <p>
              in the forking workflow, developers fork the main repository to their own account, make changes there, then submit pull requests back to the original repository.
            </p>
            <p className="mt-4">
              this is common in open source projects. it gives maintainers control over the main repository while letting anyone contribute without needing direct access.
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
