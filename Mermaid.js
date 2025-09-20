# 📝 Git Exercise Visualization

## 1️⃣ Initialization Workflow

flowchart TD
    A[cd Downloads] --> B[mkdir Demo]
    B --> C[cd Demo]
    C --> D[git init]
    D --> E[nano index.html]
    E --> F[touch f1 f2 f3]
    F --> G[git add .]
    G --> H[git commit -m "index.html"]
    
## 2️⃣ Branching & Merging Flow
gitGraph
   commit id: "Initial commit"
   branch Aniket
   commit id: "Add index.html"
   checkout Aniket
   commit id: "Add code1, code2, code3"
   commit id: "Edit index.cs"
   checkout main
   merge Aniket
   branch my-b
   checkout my-b
   commit id: "Feature work"
   checkout main
   merge my-b

## 3️⃣ Remote Setup & Push
flowchart LR
    A[git remote add origin] --> B[git push origin master]
    B --> C[git checkout -b Aniket]
    C --> D[git push origin Aniket]
    D --> E[git pull origin main]

## 4️⃣ Cloning & Second Repo Workflow
flowchart TD
    A[mkdir demo2] --> B[git clone <http>]
    B --> C[cd demo]
    C --> D[git add f1]
    D --> E[git commit -m " "]
    E --> F[git push origin Aniket]
    F --> G[git remote add demo newrepo]
    G --> H[git push demo Aniket]
