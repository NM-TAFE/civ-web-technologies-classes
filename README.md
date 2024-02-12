Start by forking this repository to your personnal account. To pull updates from the original repository (upstream) into your forked repository on GitHub, you need to follow these steps:

## Clone Your Fork: 
Clone your forked repository to your local machine if you haven't already done so. You can do this with the git clone command followed by your fork's URL.

git clone <your-fork-url>

## Add Upstream Remote: 
Navigate to the directory of your local repository and add the original repository as a remote named "upstream". 

cd <your-local-repo>
git remote add upstream https://github.com/NM-TAFE/civ-web-technologies-classes.git
Fetch Upstream Changes: Fetch the changes from the original repository.

git fetch upstream
Merge or Rebase: After fetching the changes, you can either merge them into your local branch or rebase your changes on top of the upstream changes.

## Merge:
git merge upstream/main
Replace main with the name of the branch you want to merge into.
Rebase:
git rebase upstream/main

Again, replace main with the name of the branch you want to rebase onto.
Resolve Conflicts (if any): If there are any merge conflicts, resolve them manually. Git will indicate which files have conflicts, and you'll need to edit those files to resolve the conflicts.

## Push Changes to Your Fork: 
Once you've resolved any conflicts and merged or rebased the changes, push them to your fork on GitHub.
git push origin <branch-name>
Replace <branch-name> with the name of the branch you've updated.

Now your forked repository on GitHub should be up to date with the changes from the original repository.
