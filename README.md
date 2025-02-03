# ryanteodoro.com-v2-frontend

portfolio website revamped with modern tech stack (e.g., vite, tailwind)

## notes

project was generated using `create vite` but this led to issues with tailwind v4 when trying to get dark mode hooked up - apparently the `dark:bg-white` selectors are not supported yet, only the media queries...

for this reason, i decided to rip out tailwind 4 and go back to `tailwindcss@3.4.17`

spent SO much time trying to get dark mode to work on v4 and it was crazy. v4 deprecated the `tailwind.config.js` file which also caused issues.
