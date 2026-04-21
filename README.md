This project is organized as:
- SvelteKit via `adapter-node` (`/web/`) for web UI
- PocketBase (`/pb/`) for database and authentication

Build and serve the project using the [compose file](/compose.yaml). UI accesses PocketBase from the `POCKETBASE_URL` environment variable
