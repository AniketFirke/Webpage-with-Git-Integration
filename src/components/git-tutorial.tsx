import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Copy, Terminal, GitBranch, Upload, Download } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface CommandStep {
  command: string;
  description: string;
  type?: "info" | "warning" | "success";
}

const exerciseData = {
  section1: {
    title: "Git Initialization & First Repository",
    icon: <Terminal className="h-5 w-5" />,
    description: "Setting up your first Git repository and making initial commits",
    steps: [
      { command: "cd Downloads", description: "Navigate to Downloads directory" },
      { command: "mkdir Demo", description: "Create a new directory called 'Demo'" },
      { command: "ls", description: "List directory contents" },
      { command: "cd Demo", description: "Enter the Demo directory" },
      { command: "ls", description: "Check if directory is empty" },
      { command: "git init", description: "Initialize a new Git repository" },
      { command: "nano index.html", description: "Create and edit index.html (Ctrl+O to save, Ctrl+X to exit)" },
      { command: "touch f1 f2 f3", description: "Create three empty files" },
      { command: "ls", description: "View all files in directory" },
      { command: "git status", description: "Check the status of your repository" },
      { command: "git add .", description: "Stage all files for commit" },
      { command: 'git commit -m "index.html"', description: "Make your first commit" },
      { command: "git status", description: "Check status after commit", type: "info" },
      { command: "git log", description: "View commit history" },
      { command: "git reset <commit-id>", description: "Reset to a specific commit (paste commit ID)" },
      { command: "git status", description: "Check status after reset" },
      { command: "git log", description: "View updated commit history" },
      { command: "git branch", description: "List all branches" },
      { command: "git remote add origin <GitHub_URL>", description: "Add remote repository" },
      { command: "git remote", description: "List remote names" },
      { command: "git remote -v", description: "List remotes with URLs" },
      { command: "git push origin master", description: "Push to GitHub (use token for authentication)", type: "warning" }
    ]
  },
  section2: {
    title: "Branching & Collaboration Workflow",
    icon: <GitBranch className="h-5 w-5" />,
    description: "Working with branches, merging, and collaborative development",
    steps: [
      { command: "git status", description: "Check current repository status" },
      { command: "git add .", description: "Stage all changes" },
      { command: 'git commit -m "commit message"', description: "Commit with descriptive message" },
      { command: "git push origin master", description: "Push changes to master branch" },
      { command: "git checkout -b Aniket", description: "Create and switch to new branch 'Aniket'" },
      { command: "git branch", description: "List all branches (current branch marked with *)" },
      { command: "touch code1 code2 code3", description: "Create new code files" },
      { command: "git add .", description: "Stage new files" },
      { command: 'git commit -m "added code files"', description: "Commit new files" },
      { command: "git log", description: "View commit history on current branch" },
      { command: "git push origin Aniket", description: "Push new branch to remote" },
      { command: "git branch", description: "Confirm branch structure" },
      { command: "git fetch main", description: "Fetch updates from main branch" },
      { command: "git pull", description: "Pull latest changes" },
      { command: "git branch", description: "Check branch status" },
      { command: "git fetch", description: "Fetch all remote changes" },
      { command: "git checkout main", description: "Switch to main branch" },
      { command: "git branch", description: "Verify current branch" },
      { command: "git merge Aniket", description: "Merge Aniket branch into main" },
      { command: "git branch my-b", description: "Create new branch 'my-b'" },
      { command: "git checkout main", description: "Switch back to main" },
      { command: "git branch", description: "List branches" },
      { command: "git merge Aniket", description: "Merge Aniket again" },
      { command: "git checkout Aniket", description: "Switch to Aniket branch" },
      { command: "git branch", description: "Confirm current branch" },
      { command: "git merge my-b", description: "Merge my-b into Aniket" },
      { command: "nano index.cs", description: "Create and edit index.cs file" },
      { command: "git add index.cs", description: "Stage the new C# file" },
      { command: 'git commit -m "index.cs"', description: "Commit the C# file" },
      { command: "git push origin Aniket", description: "Push changes to remote Aniket branch" },
      { command: "cat index.cs", description: "View contents of index.cs" },
      { command: "git pull", description: "Pull latest changes after GitHub edits", type: "info" },
      { command: "git fetch", description: "Fetch remote changes" },
      { command: "cat index.cs", description: "Check file contents after fetch" },
      { command: "git pull origin Aniket", description: "Pull from specific remote branch" },
      { command: "cat index.cs", description: "Verify updated file contents" },
      { command: "git pull origin main", description: "Pull from main branch" }
    ]
  },
  section3: {
    title: "Repository Cloning & Multi-Remote Setup",
    icon: <Download className="h-5 w-5" />,
    description: "Cloning repositories and working with multiple remotes",
    steps: [
      { command: "cd ..", description: "Navigate to parent directory" },
      { command: "mkdir demo2", description: "Create new directory for second demo" },
      { command: "cd demo2", description: "Enter demo2 directory" },
      { command: "git clone <repository-url>", description: "Clone existing repository" },
      { command: "cd demo", description: "Enter cloned repository directory" },
      { command: "ls", description: "List cloned files" },
      { command: "git branch", description: "Check available branches" },
      { command: "ls", description: "Verify files are present" },
      { command: "nano f1", description: "Edit file f1" },
      { command: "git add f1", description: "Stage modified f1 file" },
      { command: 'git commit -m "modified f1"', description: "Commit f1 changes" },
      { command: "git push origin Aniket", description: "Push to Aniket branch" },
      { command: "git remote add origin <new-repo-url>", description: "Add new remote origin" },
      { command: "git remote -v", description: "View all configured remotes" },
      { command: "ls", description: "List current files" },
      { command: "git remote add demo <new-repo-url>", description: "Add second remote named 'demo'" },
      { command: "ls", description: "List files again" },
      { command: "git add .", description: "Stage all changes" },
      { command: 'git commit -m "final commit"', description: "Make final commit" },
      { command: "git push demo Aniket", description: "Push to 'demo' remote on Aniket branch" },
      { command: "git remote", description: "List all remote names" },
      { command: "cd ..", description: "Navigate back to parent directory" },
      { command: "cd ..", description: "Navigate up one more level" }
    ]
  }
};

export function GitTutorial() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      toast("Command copied to clipboard!");
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      toast("Failed to copy command");
    }
  };

  const renderCommandStep = (step: CommandStep, index: number) => (
    <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
        <span className="text-sm font-medium text-primary">{index + 1}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <code className="bg-muted px-3 py-1 rounded text-sm font-mono flex-1 break-all">
            {step.command}
          </code>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(step.command)}
            className="flex-shrink-0"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
        {step.type && (
          <Badge 
            variant={step.type === 'warning' ? 'destructive' : step.type === 'success' ? 'default' : 'secondary'}
            className="mt-2"
          >
            {step.type === 'warning' ? 'Authentication Required' : 
             step.type === 'success' ? 'Success' : 'Info'}
          </Badge>
        )}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="mb-4">Git Command Reference Guide</h1>
        <p className="text-muted-foreground text-lg">
          Exercise No: 01 → Git to GitHub - Complete workflow tutorial
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Badge variant="outline" className="flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            Git Bash
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            GitHub Integration
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="section1" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="section1" className="flex items-center gap-2">
            {exerciseData.section1.icon}
            Setup & Init
          </TabsTrigger>
          <TabsTrigger value="section2" className="flex items-center gap-2">
            {exerciseData.section2.icon}
            Branching & Merge
          </TabsTrigger>
          <TabsTrigger value="section3" className="flex items-center gap-2">
            {exerciseData.section3.icon}
            Clone & Remotes
          </TabsTrigger>
        </TabsList>

        {Object.entries(exerciseData).map(([key, section]) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.steps.map((step, index) => renderCommandStep(step, index))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
          <CardDescription>
            Essential Git concepts covered in this exercise
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border">
            <h4 className="mb-2">Repository Initialization</h4>
            <p className="text-muted-foreground text-sm">Setting up Git, creating files, and making your first commits</p>
          </div>
          <div className="p-4 rounded-lg border">
            <h4 className="mb-2">Branch Management</h4>
            <p className="text-muted-foreground text-sm">Creating branches, switching between them, and merging changes</p>
          </div>
          <div className="p-4 rounded-lg border">
            <h4 className="mb-2">Remote Collaboration</h4>
            <p className="text-muted-foreground text-sm">Pushing to GitHub, pulling updates, and managing multiple remotes</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}