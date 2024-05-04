## Running Locally 🖥️

Clone the project

```bash
git clone https://github.com/NightClover-code/mini-reddit.git
```

Go to the project directory

```bash
cd mini-reddit
```

Remove remote origin

```bash
git remote remove origin
```

Install dependencies

```bash
yarn install
```

Add Environment Variables 

Check out the env variables in the `.env.example` file.

`DATABASE_URL` is a connection string to a local PostgreSQL database, I run mine using Docker.

`GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` can be acquired by creating a new GitHub application through: https://github.com/settings/applications/new.

`AUTH_SECRET` is a random string.

Start the server

```bash
yarn dev
```

