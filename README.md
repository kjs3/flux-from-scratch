# Flux From Scratch

This repo walks through implementing the Flux architecture and uses git tags to mark progressive steps.

### Install/Running the app:

* Install io.js - This app was build using io.js v2.2.1 but it may run on other versions.
* Clone the repo/cd into the directory.

```
git clone git@github.com:kjs3/flux-from-scratch.git
cd flux-from-scratch
```
* Install npm modules.

```
npm install
```

* Start the dev server.

```
npm start
```

* Visit [localhost:3000](http://localhost:3000) in a browser.

Step 1:

Starting with a _very_ simple single page todo app built with React.
The app does almost nothing at this point except `console.log` its intentions.


Step 2:

Created a `todo_store.js` module to create, store, and retrieve todo items.

This store creates and returns a singleton so anywhere it's `require`d it will be the same instance.

You can add listener functions to the store that will be called when events fire.
