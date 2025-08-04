# Frontend Directory

You are in the frontend directory. All the source code to develop the front face of the SPARK Hub website is stored and organized in this directory.

## Setup

To setup and run the frontend, follow the instructions:

```bash
# 1. Open your terminal
# 2. Clone the repository
git clone https://github.com/SPARK-Hub-WVSU/SPARK-Hub-Website.git

# 3. Navigate to frontend folder
cd frontend

# 4. Install all dependencies
npm install

# 5. Run the frontend server
npm run dev
```

## Development

To develop the pages, we will be using branches and pull requests.

> Read more: [Branching Tutorial](https://www.atlassian.com/git/tutorials/using-branches), [Branching via Git Checkout](https://www.atlassian.com/git/tutorials/using-branches/git-checkout), [Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests?platform=windows)

> Optional but helpful reads: [Atomic Commits](https://dev.to/this-is-learning/the-power-of-atomic-commits-in-git-how-and-why-to-do-it-54mn#), [Writing Great Commit Messages](https://developer.vonage.com/en/blog/how-to-write-a-great-git-commit-message)

Follow the instructions below to properly navigate branches and propose a pull request:

```bash
# 1. Always pull the main to get the most recent change
# NOTE: Ensure you are in the frontend directory
git pull origin main

# 2. Switching branches via checkout
git checkout -b page/<PAGE NAME>

# For example, if you want to work on the Officers page, you can name it `page/officers`.
# If you're working on pages, ALWAYS prefix it with `page/`
# So that we can reinforce specific rules with prefixes like that, and prevent errors in production

# 3. Code out your changes ;)

# 3.1. Stage and commit your changes
# NOTE: This may be done iteratively during the development of your branch. I strongly encourage atomic commits ;)

git add .
git commit -m "Add contact form in Footer"

# NOTE: An optional, but leads to cleaner git history is to use imperative mood commits.

# 4. Push your changes
git push origin <BRANCH NAME> # Or if working in Officers page, you can `git push origin page/officers`

# 6. Propose a Pull Request in GitHub and Request a Review

# 7. If there are changes, simply apply, commit, and then push until code reviewer is satisfied.

# 8. Then your branch will be merged to the main branch!

```

## File Structure

Below is the proposed file structure for the frontend directory. Of course, it is only a reference, and we might do specific modifications to suit our needs for better organization and compatibility.

```
/frontend
├── app/
│   ├── layout.tsx            # Global layout (includes <Header />, <Footer />)
│   ├── page.tsx              # Homepage route
│   ├── about/
│   │   └── page.tsx
│   ├── projects-events/
│   │   └── page.tsx
│   ├── news/
│   │   ├── page.tsx          # News list
│   │   └── [slug]/
│   │       └── page.tsx      # Individual news article
│   ├── officers/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/                  # (Optional) API routes if needed for client-side contact forms, etc.
│
├── components/
│   ├── ui/                   # Reusable design system (Button, Card, Input, etc.)
│   ├── layout/               # NavBar, Footer, Sidebar
│   ├── sections/             # Page-specific sections like Hero, Timeline, etc.
│   └── shared/               # LoadingSkeleton, Pagination, etc.
│
├── lib/
│   ├── api.ts                # Fetchers using fetch/axios/SWR
│   ├── types.ts              # Type definitions for Strapi data (e.g., NewsItem, Project)
│   └── utils.ts              # Formatters, string manipulators, etc.
│
├── constants/                # Static values (routes, metadata, roles, colors)
│   └── metadata.ts
│
├── styles/
│   ├── globals.css
│   └── tailwind.config.ts
│
├── public/                   # Images, favicon, etc.
│
├── .env.local                # API_URL, CMS_TOKEN, etc.
├── next.config.js
└── tsconfig.json

```
