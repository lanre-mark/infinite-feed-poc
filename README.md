# Infinite newsfeed POC

## Getting started with the repo

1. Clone it
2. Open the folder
3. Install the dependencies: `yarn install`
4. Run the dev server: `yarn dev`
5. Open http://localhost:3000

## About this toy project

This project portrays a simplified slice of a remote program platform.

We have users participating in three fellowships:

- Startup Founders,
- Angel Investors,
- Internet Writers.

We want to create a newsfeed for each fellowship that shows new and relevant events. The goal is to keep users up to date and to facilitate collaboration between them.

In general, there are three types of events:

- new people (DB table `users`),
- new projects (table `projects`),
- team announcements (table `announcements`).

However, each newsfeed should consist of different types of content because people from different fellowships are interested in different events:

- Startup Founders want to connect to angels investors and other startup founders.
- Angel Investors want to connect to startup founders and other angel investors.
- Startup founders and angel investors are interested in new startup founders' projects.
- Internet Writers want to connect only to other internet writers and are not interested in startup founders' projects.

Announcements can be addressed to a specific fellowship, or to all users (see table `announcements`, column `fellowship`). Startup founders are not interested in announcements addressed to internet writers, and so on.

## Tasks

Implement the newsfeed:

- It should include users, projects, and announcements.
- It should display different results, depending on the selected fellowship, as described in the section above.
- Entries should be sorted by creation date, newer entries go first.
- Implement infinite scrolling, don't download and display all entries at once.

## Project structure

Tech stack:

- Next.js,
- TypeScript,
- Sqlite3,
- Apollo server,
- Apollo client,
- React.

Folder structure:

- `components/` — reusable React components;
- `pages/` — the usual Next.js [page structure](https://nextjs.org/docs/basic-features/pages);
- `graphql/` — GraphQL server, schema, resolvers, DB connection;
- `scripts/` — contains the SQL script used for creating and populating the tables in `db.sqlite`.

The database is already included in the repo (`db.sqlite`) and populated (`scripts/populate.sql`). Its basic structure:

- `users` — people participating in fellowships;
- `projects` — projects that founders are working on (connected to `users` through `user_projects`);
- `announcements` — announcements by On Deck Team targeting specific fellowships or global (`fellowship = "all"`).
