Here's the inquirer pseudo code dump for pathing

generate data or just fun?

fun time tree:
username, name, or text?

names: real or made up or combo?
full or first/middle/last?

text: what kind of text do u need
    - project title?
    - book/movie title?
    - songs? 
    - content?

usernames:
one username or list
    enter # for amount of usernames
generate and print


generate data tree:
select all data u need: users, posts, comments, other data

other data options: books, movies, music, projects, classes/courses, ecommerce

users:
    - select what to include in user data:
        - username, email, password, name (first/last), age or DOB,

    - do you need hashed pws? (brcypt)
    - do you need full names or first and last
    - real names or made up?
    - need a range for age, dob or age only?

post title/text, createdat, username
comment text, createdat, username
    - do you need users connected to posts/comments?
    - if yes, and no usernames found in results folder, ask if need users generation (send through user funct), or do you already have users in database?
    - if already have users, what is model property to assign and what is value... or is iterable userId? or throw err msg "copy/paste json file into results folder"
    - how to connect users to posts/comments> username, email, name, input own prop?


other media, titles, content?

clean/exclude swears?

write it to json file

fictional names
break down letters into patterns or groups based on syntax  of language?

mapping out funct calls for each menu and submenu

user: name, age/dob, username, email, password
posts
comments
text-title, desc