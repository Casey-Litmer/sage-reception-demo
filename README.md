



My main goals with this demo were the following:
- Create simplified versions of both a front end site and a user interface for clients
- Use as many of the provided dependencies as possible and incorporate them into my workflow, while keeping it self contained.

The dependencies I focused on were:
- react-big-calendar
- tailwindcss
- vite
- flowbite

Dependencies I added:
- "react-icons": "^5.5.0"
- "typescript": "~5.7.2"
- "@react-spring/web": "^9.7.5",

# Overview:
The home page is pretty self explanatory, most of what happens is on the Dashboard page.  I wanted to simulate some internal functionality of the user interface so I decided to turn it into a minigame.  The way it works is a webworker generates random messages and pushes them to the inbox, and you have to reply to the number and enter the requested date and time on the calendar before your customers' patience level runs out!  You can see the time you have left as a status bar on the bottom of each message, and messages with less time to respond will have an 'Urgent' indicator.  


# Pages:
### Home Page
A simple mockup of an 'About' section with spring animations.  At the bottom is an FAQ
section made with flowbite Accordion.

### Dashboard
Navigate here by hitting 'Clock In'.  Includes a message box and utility bar that
switches the view between a calendar and a messager.


# Project Directory
### My Organization:
The way I usually manage projects is as follows:
- pages, context providers, and other 'main' components are directly under src.
- reusable components that are not directly coupled to a main component (intended for multiple use cases) are organized in the 'components' folder.

## Key Components:
### PageContents
- Main wrapper between Header and Footer
### TextContainers
- Stylized divs for the home page
### MessageProvider
This is where most of the work is managed.  Provides access to
- Records of message data
- Functions to update the table if the date on the calendar and phone number are correct.
- Communication with the message web worker
- Updating remaining message time
- Ending the game when you run out of time.

The Message type corresponds to the incoming data about the message while the MessageStatus type is a wrapper that includes metadata regarding the state of the message in the simulation (its remaining time, if it is on the calendar, etc.)

### MessageWorker.ts
Generates messages on a random interval to send back to the MessageProvider.  
In the same directory is a 'Madlibs' script which picks random names, dates, phone numbers to fill in example prompts.

While there is nothing here that computationally requires a separate thread, I thought it would be a good excercise for a few reasons:
- Separation of concerns.  The message provider should mainly focus on handling incoming messages within the app and not create those messages itself.
- Approximation to actual fetching.  It might make sense to have a background process handle traffic.  While you could also just async await fetch, this could be more easiy scalable as the data gets more complicated.

 ### Calendar
 I kept the calendar pretty simple.  There are alot of custom stylings I still have to look in to, but for this demo I just made sure I could actually use it by adding events.  

 When you click a slot on the 'Week' or 'Day' tab, it will display a modal that asks for the event title.  This can easily be expanded on.

 # Comments

- I've mostly had a good time with the flowbite components (especially the ButtonGroup) but there are some components that don't work well with tailwindcss.  The Accordion can't be animated so it's a bit jumpy so I would opt to use a different one.
- The phone numbers need to be entered in the same format as displayed in the message.  This can easily be formatted, but not super necessary for the demo.
- I am using react@19 for this demo