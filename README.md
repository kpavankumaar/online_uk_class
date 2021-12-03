# online_uk_class

1. signup for github account 
2. Create a new repository 
    a.  click on new button on the home page to creat a repository
    b.  Enter name of the repository eg online_uk_class (note - name of the repository must match with local directory name )
3.  Create a folder in your local machine with a name example -  online_uk_class (note - same name that is used in creating remote repository ).
4.  install git bash 
5.  go to this directory (online_uk_class) using command prompt
    a.  for windows - open command prompt from window menu 
    b.  access the drive eg - c, d, e, f using command prompt 
        1.  eg type "d:" and press enter 
        2.  this will take you "D" drive where you have created directory for the project. in our case it is "online_uk_class"
        3.  cd "online_uk_class"  - you are inside the directory.
6.  Now you are inside the "online_uk_class"
7.  type "git init" (explanation - initializing git in directory "online_uk_class")
8.  git remote add origin "https://github.com/username/remoterepository" < --- " url address to remote repository "]
9.  git remote -v  <- will return remote repository name that this directory is linked.
10. git pull origin main [explanation - will pull the content from remote repository (url) to local folder/repository]
11. open local folder in visual studio code 
12. edit the "readme.md" file using visual studio code ( add or remove text content from read me file )
13. go to command prompt (In command prompt you are inside "online_uk_class" )
14. "git status " --> would return red colored readme.md text, because you have modified the contents in readme.md file
15. "git add readme.md" --> would return green colored readme.md text, suggesting that git has read the changes.
16. git commit -m "modified the readme file for first time commit "
17. git push 
18. Windows for the first time -> authentication is needed




