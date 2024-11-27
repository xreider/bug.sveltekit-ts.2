My project has the next structure:

main folder/

- api (with Express.js)
- client (with SvelteKit)

When I open main folder via VSCode and then run command `cd client & npm run dev`, I catch errors in all .svelte files where I import scss mixins in style section.

But SvelteKit works and builds normally.

If I open client folder directly via VSCode and then run command `npm run dev`, I catch no errors in style sections.
