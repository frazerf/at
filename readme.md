# AT
Create a single web page using the design provided without relying on styling frameworks such as Bootstrap, Tailwind etc.

## Setup

To complete the task I used a very simple Gulp set up to compile my SCSS and minify my JS. I also added Browsersync to perform a live reload whenever a change is made to the source files.   

To set up locally simply - 

Clone/Download this repo

Run `npm install` in the directory

And lastly run `gulp` and that should link to http://localhost:3000/ where you will see the completed build. 

## Approach

### Layout
I approached this task by breaking down the mockup image provided. I identified the core elements such as the header, nav, main (section/article/aside) and footer and made sure that all the elements would scale on desktop as well as mobile. There wasn't anything too complicated about the layout so it came together rather easily. The biggest problem was trying to come up a layout/grid system without relying on styling framework. I ended up using flexbox to handle most of my layouts as I saw AT had used flexbox for the majority of their layouts. Overall the layout came together rather easily. 

### Styling
My approach to styling was pretty straight forward. I umm'd and ahh'd over creating a bespoke grid system but as the layout was uncomplicated I went with a flexbox approach, and mobile media query, to build the bulk of the page. Normally I would build using a mobile-first approach but as only a desktop design was provided I ended up building desktop-first and tried to make a best guess as to how I thought the page would scale for mobile (767px and below). I worked first on reseting the default browser styles and then set up my base, variable, helper styles before diving in to typography and layout. For the typography I used classes for 'heading' and 'p' styles as I wanted to respect the semantic structure of the page .i.e - using a .h2 class on the h3 sidebar heading. 
I created two component files, one being the nav (which perhaps could have been moved in to layout folder) and the other being the button styles. The button was perhaps the most difficult part of the entire build. Trying to wrap my head around the double border design took a few failed attempts before I landed on using pseudo classes to achieve the correct look of the button. I added a slight glow animation on hover of the button so the user knew they were interacting with a call to action. The rest of the animations on the page were very subtle. I lightened the links slightly on hover and added a hamburger cross on click. I used BEM for my naming convention as well as a very helper/modifier classes where needed. 

### Javascript

JS was pretty minimal for the build with the exception of a responsive navigation for mobile. I ended up using a simple hamburger icon for mobile that, when clicked, displayed the mobile navigation below the logo. I added a click EventListener which toggled a class of 'show' on the main nav menu, which displayed the navigation in mobile, and also added an "active" class on the hamburger which triggered the hamburger/x animation. I also added a resize EventListener which removed those two classes when the screen size was over 767px to prevent any confusion when the browser was resized. 

## Final thoughts
Overall I enjoyed the build. The biggest challenge I faced was trying to create something from scratch without relying on frameworks to speed up the build process. Looking at the mock up provided and the final result, I can definitely see a likeness between the two. 