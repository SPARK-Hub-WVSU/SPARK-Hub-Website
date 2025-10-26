# SPARK Hub CMS Setup Guide

This guide details the steps required to set up the Strapi CMS and its PostgreSQL database using Docker, ensuring a consistent environment across different operating systems (Linux/Windows).

## 🛠️ Prerequisites

To set up the CMS, you'll need the following applications installed on your system.

| Application                                                                                                                         | Recommended Version | Verification Command | Notes                                                       |
| :---------------------------------------------------------------------------------------------------------------------------------- | :------------------ | :------------------- | :---------------------------------------------------------- |
| **[Node.js](https://nodejs.org/en/download)**                                                                                       | v22.x (LTS)         | `node --version`     | Includes `npm` (Node Package Manager).                      |
| **[Docker Desktop](https://docs.docker.com/desktop/#:~:text=Next%20steps-,Install%20Docker%20Desktop,-Install%20Docker%20Desktop)** | Latest (v28+)       | `docker --version`   | Essential for running the PostgreSQL database consistently. |
| **[PostgreSQL](https://www.postgresql.org/download/)**                                                                              | Latest              | `git --version`      | Our official database.                                      |

## 1. Local Setup

### 1.1. Clone the Repository

Clone the project and navigate into the CMS directory:

```bash
git clone https://github.com/SPARK-Hub-WVSU/SPARK-Hub-Website.git
cd SPARK-Hub-Website/cms
```

### 1.2. Configure Environment Variables

The database connection details are defined in the project's **`.env`** file. **You must create this file** to match the database container setup (Step 2.1).

1.  Create a file named **`.env`** in the `cms/` directory.
2.  Paste the following content, which matches the Docker setup below.
    - **Crucial:** We set `DATABASE_SSL=false` because standard local/Docker connections do not use SSL, which resolves the `ECONNREFUSED` error.

<!-- end list -->

```ini
# .env (Create this file in the cms/ directory)

# Server Configuration
HOST=0.0.0.0
PORT=1337

# Secrets (These are placeholder keys—Strapi will update them on first run)
APP_KEYS=d9qk5LgmTaP9O/Ws7GmMXw==,YDH+/a4NFZcGfhxvrKaVUw==,8qYRb+jBghONB1c3juqdhQ==,7qY1AMiyFOQnBN/6yC5bXA==
API_TOKEN_SALT=MOhBEXxZpf4ighq/LSNQOQ==
ADMIN_JWT_SECRET=UL3Fxh/DJolJa0+QWfsZQw==
TRANSFER_TOKEN_SALT=o5DmdouhfyL+tUpbJbekpw==
ENCRYPTION_KEY=Lbld9jm/iXyCzyBIDpfLFA==

# Database Configuration
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=sparkhub
DATABASE_USERNAME=sparkhub
DATABASE_PASSWORD=sparkhub
DATABASE_SSL=false
DATABASE_FILENAME=
```

### 1.3. Install Dependencies

Install the required Strapi dependencies and run a basic security check.

```bash
npm install
npm audit fix
# Note: Do NOT run `npm audit fix --force`. If errors remain, that's fine for now.
```

---

## 2. PostgreSQL Database Setup (via Docker)

The PostgreSQL database is run as a separate Docker container to guarantee consistency and isolate the environment.

### 2.1. Start the Database Container

Ensure **Docker Desktop is running** before executing this command:

```bash
docker run --name spark-strapi-postgres \
  -e POSTGRES_DB=sparkhub \
  -e POSTGRES_USER=sparkhub \
  -e POSTGRES_PASSWORD=sparkhub \
  -p 5432:5432 \
  -d postgres
```

This command:

- Pulls the `postgres` image.
- Creates a container named `spark-strapi-postgres`.
- Sets the database name, user, and password to **`sparkhub`** (matching your `.env` file).
- Maps the database port 5432 to your local machine, allowing Strapi to connect via `127.0.0.1:5432`.

### 2.2. Management Commands

| Action                     | Command                              | Notes                                                                                                                             |
| :------------------------- | :----------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| **Start (after creation)** | `docker start spark-strapi-postgres` | Use this if you've stopped the container previously.                                                                              |
| **Stop**                   | `docker stop spark-strapi-postgres`  | Stops the container without removing the data.                                                                                    |
| **Remove**                 | `docker rm -f spark-strapi-postgres` | **Warning:** This will delete the container and **all its data**. Only use this if you want a completely fresh database instance. |

---

## 3\. Running the Strapi CMS

Once the `strapi-postgres` container is running and stable, you can start the Strapi application.

### Start Development Mode (Recommended)

Run this command from the `cms/` directory:

```bash
npm run develop
```

- **First Run:** On the very first run, Strapi will:
  1.  Connect to the PostgreSQL database.
  2.  Create all the necessary admin and application tables.
  3.  Open the Admin Panel in your browser (`http://localhost:1337/admin`) where you'll create your first administrator account.
- **Subsequent Runs:** Strapi will start up and load any data you've previously entered.

### Other Useful Commands

| Command         | Description                                                                   |
| :-------------- | :---------------------------------------------------------------------------- |
| `npm run start` | Starts the Strapi application with autoReload disabled (used for production). |
| `npm run build` | Builds your Strapi admin panel for deployment.                                |

Once everything is set up, simply just run the Docker container you created `docker run spark-strapi-postgres`, and run the development mode of Strapi `npm run dev`.

## 📚 Learn More

For full documentation and support, please refer to the official Strapi resources:

- [Strapi Documentation](https://docs.strapi.io) - Official guides for developers.
- [Strapi CLI Reference](https://docs.strapi.io/dev-docs/cli) - Details on all available command-line tools.
