1. css - animation, units -percentage-em-rem, flex, css grids
2. html - video, section, aside, article, header, footer 



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


++++++++++++++++++++++ combinators +++++++++++++++++++++++++++++++++

1. tilda : will help select elements which is / are after the selected element 
           tilda selector will work with sibling elements but it does not go beyond sibling relation.
           it does not select the child h3 elements of the siblings .
    css => .box1 ~ h3
    eg: html ---> 
    <h3>heading 1 </h3>
    <div class="box1">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque modi unde cum facilis fugiat, minima expedita quia quo delectus, dignissimos placeat quis eius amet laboriosam possimus. Pariatur ratione doloremque aliquid.</p>
        <ul>
            <li>test</li>
        </ul>
    </div>
    <h3>heading 2 </h3>
    <h3>heading 3 </h3>
    <p> test content </p>
    <h3>heading 4 </h3>
    <h3>heading 5 </h3>
    <div class="box2">
        <h3>heading6</h3> <!-- this element is child of box2. box2 is a siblling for box1 element.  -->
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt facere mollitia aliquam amet, dolore rerum sequi alias reiciendis quidem quod magnam neque ut fugiat sed, perferendis atque omnis voluptatem nisi.</p>
    </div>

2.  child selector :
    this allows us to select the direct child , it will ignore the grandchildren
    eg: 
     style --> .box > p
     <div class="box">
        <div>
            <h3>heading</h3> 
            <!--paragraph element is ignored-->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi commodi eveniet similique facilis beatae quibusdam ea eum distinctio? Voluptate sit nisi cumque magni perspiciatis neque? Eaque facere corporis ipsa?</p>
        </div>
    </div>
    <div class="box">
        <h4>heading 4</h4>
        <!--paragraph element is selected-->
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora fuga, consectetur velit accusamus distinctio quos numquam necessitatibus nobis vitae itaque dolor doloremque facere! Nesciunt illo et error ipsum excepturi.</p>
    </div>
3.  adjacent sibling selector : 
    this will select immediate sibling.
    style ---> 
        .second + li{
            background-color: steelblue;
        }
    html -->
    <ul>
        <li>first </li>
        <li class="second">second</li>
        <li>third</li> <!--this element is selected-->
        <li>fourth</li>
    </ul>


    _____________________ assignement _________________________

1.  Hover on the image element  create a popup near the cursor .
2.  popup element must move along the mouse, until the cursor moves out of the image area.
3.  