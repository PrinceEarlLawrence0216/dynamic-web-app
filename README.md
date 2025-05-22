# 📄 MyPostPage App Documentation

## 🧭 Overview

This is a dynamic web application built using **Next.js** that simulates a personalized user dashboard. It focuses on **displaying posts and comments** based on the logged-in user’s data fetched from the JSONPlaceholder API. Tailwind CSS is used for responsive design and clean UI structure.

---

## ⚙️ Tech Stack & Dependencies

This project is developed with the following modern tools and libraries:

| Tool/Library    | Purpose                               |
| --------------- | ------------------------------------- |
| Next.js         | App framework (routing, SSR, etc.)    |
| Tailwind CSS    | Styling and layout                    |
| React Hooks     | State management and lifecycle        |
| JSONPlaceholder | API for mock user/posts/comments data |
| Vercel          | Deployment platform                   |
| GitHub          | Source control and collaboration      |

---

## ✨ Key Functionalities

### 👤 User Authentication (Client-Side)

* Uses `localStorage` to check login state
* Redirects to `/login` if no session exists

### 📝 Post & Comment Display

* Retrieves posts authored by the logged-in user
* Filters and displays comments related to each post
* Automatically resolves commenter and post author usernames using user data

### 📦 Dynamic Data Handling

* Fetches three APIs in parallel for performance:

  * `/posts?userId={id}` — user posts
  * `/comments` — all comments
  * `/users` — all user info for name/email mapping

### 🖥️ Responsive UI

* Clean layout using Tailwind
* Dynamic rendering based on data presence (e.g., “No posts yet”)

### 🔼 Scroll to Top

* One-click button to navigate smoothly back to the top of the page

---

## 🚀 Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repo_url>
   cd mypostpage-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run Development Server**

   ```bash
   npm run dev
   ```

4. **Access App**
   Navigate to `http://localhost:3000` in your browser.

---

## 🔐 Sample Login Info

This app expects a `user` object saved in `localStorage`. Here’s how to simulate that:

Open DevTools → Console → Paste:

```js
localStorage.setItem('user', JSON.stringify({
  id: 1,
  name: 'Leanne Graham',
  email: 'Sincere@april.biz'
}));
```

Then refresh the app.

---

## 🌐 Deployment

This app can be deployed to any Vercel-compatible platform.

```bash
vercel
```

URL after deployment:

```
https://dynamic-web-app-psi.vercel.app
```

---

## 👥 Team Responsibilities (if group project)

| Member | Task Assignment                      |
| ------ | ------------------------------------ |
| Merryjean Maravilla  | UI design, Assisted in Log in system            |
| Alexis Jaso  | UI design with Tailwind, Implemented Post and Comment, Documentation         |
| Earl Lawrence Fulgar  | Set up, fetch api, Implemented User listing, Group Presentor      |
| Mary Joy Dulay  | UI design, Assisted in Registration in system |

---

## 🧪 Suggestions for Future Improvements

* Add real authentication via Firebase/Auth.js
* Allow users to add and edit posts/comments
* Include pagination or infinite scroll
* Add dark mode toggle and more UI polish


