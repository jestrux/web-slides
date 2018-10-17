const SLIDES = module.exports = `
name: Intro Slide
class: a-slide, center, middle, has-subitle

# The progressive in PWAs
Progressively enhancing your web apps into PWAs

---

name: About Me
class: a-slide, center, middle

# Who am i?

**Walter Kimaro**

**@jestrux** on internet places

Front end developer **@ipfsoftwares**

( *see what I did there?*😎)

*Also extends to:*

**UI/UX strategist** and **copywriter**

---

name: Javascript Enthusiast
class: a-slide, center, middle, center-text

## Javascript enthusiast

Card trick in **Angular 1**

Letterpress clone in **Polymer**

Music Player in **Angular 2**

Songwriter app in **Vuejs**

Meme sharing app in **React**

---

name: Agenda
class: a-slide, center, middle

# Agenda

### 1. What are PWAs

### 2. Do you need a PWA?

### 3. Demo time

### 4. Progressive enhancement

### 5. Improv JS Rock performance 🤘 🎸 🎸

---

name: What is a PWA
class: a-slide, middle
notes: How many are familiar with PWAs?
actions: [reveal]Reveal defn.
# What is a PWA?

*TLWNR:*

* A Progressive Web App is a web app that has been enhanced to improve the user experience
**based on the app's context**.

.to-reveal[*Mr speaker, Could you say that again but like make it longer?*

* A Progressive Web App (PWA) is a **web app** that uses **modern web technlogies** such as web app manifest, service workers and IndexedDB to deliver an experience that is **fast**, **reliable** and **engaging**.
A PWA is expected to **harness the power of the platform** it's on and **gracefully adapt** to situation changes such as loss of internet connection or a user on an older browser.]

---

name: Do you need a PWA
class: a-slide, middle
notes: [Fast]Both in illusion and actuality,[Increased Engagement]Push notifications,[Native Feel]Live on home screen and app launcher

## Should you Progressively enhance your web app?

*To quote an obnoxious high school girl:*&nbsp; **" DUHH!!!! 🙄"**

Not convinced yet? Well here is a list(*coz well.....lists*)

1. Fast

1. Increased Engagement

1. Can feel native

1. Can continue working offline

1. Improved Conversions

---

name: Patterns & Tech
class: a-slide, middle

# PWA Patterns and technologies

1. PRPL Pattern

1. App shell architecture

1. Web App manifest

1. Service Workers

1. IndexedDB

1. Offline first

---

name: Flipkart Intro
class: a-slide, middle

# Demo time

Flipkart progessive web app

* India’s largest e-commerce site

After shipping their PWA:

* 70% increase in conversions

* 3x more time spent on site

* 3x lower data usage

---

name: Flipkart Video
class: a-slide, full
actions: [video]Play Demo

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/RJ1h-GiRh1E?rel=0&amp;controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

---

name: Progressive Enhancement
class: a-slide, middle

# Progressive Enhancement

  A continous almost obssesive improvement of your app, to make sure <br> 
  that your users have the best possible experience.


  * Remember, **progressively** enhance your app

    * *PWA stack can be overwhelming especially if you already have an app in place.*

  * PWA technologies don't magically fix all your app's problems

    * *Build upon the existing app, so optimize that first*

  * Not all PWA technologies work on every browser

    * *Users without the latest and greatest benefit from an optimal experience.*

---

name: Make app small
class: a-slide, middle

  ## Before you PWA
  
  Make your app small:

  * Compress, resize and scale your images

  * Use SVGs instead of font icons when possible.

  * Don't use a library or framework to do a script or css file job

  * Bundle and Minify your source files

---

name: Make app fast
class: a-slide, middle

  ## Before you PWA cont...

  Make your app fast:

  * Create illusion of speed (*placeholders, **lightweight** loaders*)

  * (*when possible*) Find ways around traditional form input

    * *Stlyed label tags instead of radio/check inputs*

  * Use alternative solutions to long tasks

    * *Email / One Click SignIn, Web Pay API*
  
  * Use web workers for memory intensive tasks

  * Test it on Google’s PageSpeed Insights

---

name: Dialer Gif
background-image: url(https://assets.materialup.com/uploads/3b9b122c-205b-4adc-8571-1ded459f3e95/day-003---dial-pad.gif)

class: a-slide, dark

<!-- ![Dial pad](images/dialpad.gif) -->

---

name: Make app nativey
class: a-slide, middle
## Before you PWA cont...
  
Give your app a native feel (*think beyond links and pages*)

  * Make your apps responsive (*like beyond media queries responsive*)

  * Enhance user input ( *don't default to input boxes* )

  * Feedback, feedback, feedback (*microinteractions, alerts, toasts*)

  * Reward successfull interactions ( *nice message, graphic* )
  
  * Make state changes smooth, snappy and intuitive (*transitions and animations*)

  * Customize empty states screens and error screens (*e.g no network*)

  * Use context links ( *tel: +255 7....*, *wa.me/155...?text=I'm int...* )

---

name: Know your app / tools
class: a-slide, middle
## PWA beyond the basics

* Know your app

  * Optimize based on your app's specific context

  * E.g. an image based app needs to focus highly on optimizing images.

  * A kids website needs to maximize playfulness.

* Know your tools
  
  * Research on ways to optimize your vanilla code, library or framework.

* Small lightweight app shell (*inline styles*)

* Cache assets (Service Worker, Web Cache API)

---

name: Test app
class: a-slide, middle
## PWA beyond the basics cont...

* Test your app with actual users

  * Non technical friends, family

  * Give to small unit of target users

* Test and adapt your app to realistic network conditions

  * Most users are probably on 3G or lower

  * Use Service Worker with IndexedDB for content caching

  * Notify users on network state changes and give them options

    * E.g. *Google search caches search queries, replays them when 
    connections is next available then notifies user*

---

name: Track app Usage
class: a-slide, middle
## PWA beyond the basics cont...

* Track app Usage

  * Use analytics tools to track app usage

  * Which features are never used 
  (* hamburger menu for old ipf website *)

  * Experiment with unfamiliar features or content structure
      * (* Yahoo Digest design *)

---

name: Fin
class: a-slide, center, middle

# Thankyou!
`;