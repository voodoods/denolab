# denolab
A small collaborative lab project using Deno

## Setup

Setup the backend by configuring the values in `properties.json`:

```
{
    "DB_NAME": "<db-name>",
    "DB_HOST_URL": "<db-host-url>"
}
```

Start the backend with the following command:

```
deno run -c tsconfig.json --allow-net --allow-read --allow-write --allow-env --allow-plugin --unstable app.ts
```
