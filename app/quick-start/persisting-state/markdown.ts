export const markdown = `
# Persisting state value

Persisting states to the \`localStorage\` can be challenging, maybe you want to persist user's preferences or data to hand them to users on thier next session.

Let's take a look how we can persist the theme between user sessions via localStorage.

Jotai \`atomWithStorage\` is a special kind of atom that automatically syncs the value provided to it with localstorage or sessionStorage, and picks the value upon the first load automatically! It's available in the jotai/utils module.
To persist our theme atom simply create it with the atomWithStorage atom.
~~~js
const theme = atomWithStorage('dark', false)
~~~

Now, when you reload the preview section you see that the theme matches with the value before the page reloads.
`;
