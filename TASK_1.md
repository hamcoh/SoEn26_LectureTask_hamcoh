# Task 1: Implement Register Functionality

## Permitted Help

✅ You are allowed to use existing code in this codebase as reference for this task

✅ You are allowed to use the web (e.g., searching via Google, Stackoverflow, documentations ...)

✅ You are allowed to use generative AI (e.g., ChatGPT, Copilot, Cursor, Claude, ...)

❌ **You are not allowed to ask others (e.g. classmates) for help**

## Setting
You are a Junior Developer in the web development startup ACME. One of your most popular products is an e-commerce application that you customize for online shops or retailers selling exclusive items such as rare collectables, designer fashion, art, and NFTs.

Your team decided to switch from a solution that was initially hosting the entire backend and database at Shopify to a self-hosted solution with a custom backend and database. You now use the following technologies:

### Technologies

- Frontend: NextJS & ReactJS
- Backend: [ExpressJS ↗️](https://expressjs.com/en/starter/hello-world.html)
    - [How to link routes and controllers ↗️](https://medium.com/@mahendramahara/organize-your-express-js-backend-server-with-routes-and-controllers-cb86d26db224)

- Database: [sqlite npm package ↗️](https://github.com/kriasoft/node-sqlite)
    - [How to insert new users (insert rows) ↗️](https://github.com/kriasoft/node-sqlite?tab=readme-ov-file#inserting-rows)


### Folder structure

All relevant files can be found in:

- [**Backend**: /apps/api/...](./apps/api/)
- [**↪  Routing File**: /apps/api/src/routes.ts](./apps/api/src/routes.ts)
- [**↪  Controllers**: /apps/api/src/controllers/...](./apps/api/src/controllers/)
- [**↪  User Model**: /apps/api/src/models/User.ts](./apps/api/src/models/User.ts) (stores user in database)

<br/>

*No changes needed, but for reference*:

- [***Database**: /apps/api/src/db/...*](./apps/api/src/db/)

- [***Frontend**: /apps/web/...*](./apps/web/)
    - [*RegisterModal Component: /apps/web/components/Modals/RegisterModal.tsx*](./apps/web/components/Modals/RegisterModal.tsx)
    - [*LoginModal Component: /apps/web/components/Modals/LoginModal.tsx*](./apps/web/components/Modals/LoginModal.tsx)


## Task 1 ToDo's (Definitions of Done):

You have to fulfill one task (implementing register functionality). Your team lead already did some of the work and also left comments for you to get started.

**Important before starting:** 
- The ToDo's are in no particular order
- Your team lead recommended to check out all relevant files first, and see how they are connected to get an understanding of the system.

<br/>

⬜︎ The [User.ts](./apps/api/src/models/User.ts) needs a `createUser` function that stores the new user of type PlatformUser in the database. **Hint: When trying to store a user, you don't have to set an `id`, it is autoincremental as seen in the [db/init.ts](./apps/api/src/db/init.ts#109) file at line 109.**

⬜︎ Complete the `registerUser` function in the [auth.controller.ts](./apps/api/src/controllers/auth.controllers.ts) controller.

⬜︎ Add a new route endpoint `/register` in the backend API that calls the controller [auth.controller.ts](./apps/api/src/controllers/auth.controllers.ts).

⬜︎ Edit the `registerUser` function in [/apps/web/app/actions/user.actions.ts](./apps/web/app/actions/user.actions.ts) such that it uses the new `internalClient` instead of the old `storeFrontClient`.

⬜︎ Take a look at the newly added file [/apps/web/clients/internalClient.ts](./apps/web/clients/internalClient.ts) that was created by your team lead. It will replace the old Shopify client [storeFrontClient.ts](./apps/web/clients/storefrontClient.ts) that is located in the same folder.

<br/>

**Task 1 Final ToDo:** 

⬜︎ Test your implementation by using the frontend (e.g. running at [http://127.0.0.1:3000](http://127.0.0.1:3000)): To test the registration function, you can try to click the “Register” button on the top right corner. If you can't see the button, make the browser window fullscreen.


![Register Modal](./instruction_assets/4_register_modal.png)

<hp style="color: green; text-align: center">If you can register a new user without errors and a success message "You have successfully signed up! You can now log in" is shown in the bottom left corner, you successfully implemented Task 1.</p></p>


---

**To complete the task, fill out this form after implementation or after 1.5h passed:** 

-  [**Click here to access the Questionnaire**: #](#)


<br/>

---