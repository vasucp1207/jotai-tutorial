export const markdown = `
# Async Write Atoms

Async write atoms are another kind of async atom. When the write function of atom returns a promise.

~~~js
const counter = atom(0);
const asyncAtom = atom(null, async (set, get) => {
    // await something
    set(counter, get(counter) + 1);
});
~~~

**Note**: An important note here is that async write function does not trigger the Suspense.

But an interesting pattern that can be achieved with Jotai is switching from async to sync to trigger suspending when wanted.

~~~js
const request = async () => fetch('https://...').then((res) => res.json())
const baseAtom = atom(0)
const Component = () => {
  const [value, setValue] = useAtom(baseAtom)
  const handleClick = () => {
    setValue(request()) // Will suspend until request resolves
  }
  // ...
}
~~~
`;
