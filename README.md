This project is organized as a PocketBase (PB) backend, along with a static SvelteKit (mostly) SPA served from `/pb_public`

Build and serve the project using a [Containerfile](/Containerfile). UI is hardcoded to access the production PB instance, but you can change this in [/web/src/lib/pb.ts](/web/src/lib/pb.ts)
