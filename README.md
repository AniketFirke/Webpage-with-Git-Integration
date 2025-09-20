# Exercise No: 01 → Git to GitHub  

This document provides a step-by-step guide for initializing a Git repository locally, working with files, committing changes, creating and switching branches, and pushing updates to GitHub. It also covers fetching, merging, and working with multiple remotes.

---

## 📌  Initialize Repository and First Commit

```bash
# Open Git Bash
cd Downloads
mkdir Demo
ls
cd Demo
ls

# Initialize repository
git init

# Create and edit first file
nano index.html   # (Save: Ctrl+O → Enter, Exit: Ctrl+X)

# Create multiple files
touch f1 f2 f3
ls

# Track changes
git status
git add .
git commit -m "index.html"

# Basic configuration and log
config setup
git status
git log

# Reset and re-check
git reset <commit_id>
git status
git log
git branch

# Connect remote repository
git push origin master
git remote -v
git remote add origin <GitHub_ID_URL>
git remote
git remote -v

# Push with token authentication
git push origin master
sign in

git status
git add .
git commit -m " "
git push origin master

# Create new branch
git checkout -b Aniket
git branch

# Add new files
touch code1 code2 code3
git add .
git commit -m " "
git log
git push origin Aniket

# Fetch, pull and merge
git branch
git fetch main
git pull
git branch
git fetch
git checkout main
git branch
git merge Aniket

# Create and switch branches
git branch my-b
git checkout main
git branch
git merge Aniket
git checkout Aniket
git branch
git merge my-b

# Merge helpers
git merge --help
git merge --continue my-b
git merge --continue Aniket
git merge master

# Work with new file
nano index.cs
git add index.cs
git commit -m "index.cs"
git push origin Aniket
cat index.cs

# Edit code on GitHub and sync changes
git pull
git fetch
cat index.cs
git pull origin Aniket
cat index.cs
git pull origin main

cd ..
mkdir demo2
cd demo2

# Clone repository
git clone <http>

cd demo
ls
git branch
ls

# Create and add a file
nano f1
git add f1
git commit -m " "
git push origin Aniket

# Add new remote repository
git remote add origin <http newrepo>
git remote -v
ls
git remote add demo newrepo <http>
ls

# Commit and push
git add .
git commit -m " "
git push demo Aniket
git remote

# Navigate back
cd ..
cd ..



 ## Webpage with Git Integration
  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
