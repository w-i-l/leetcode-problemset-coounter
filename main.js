const all = [...document.getElementsByClassName("flex h-[52px] w-full items-center space-x-3 px-4")]
.map(element => {
  // Using optional chaining to safely access nested children
  return element.children[0]?.children[1];
})
const filtered = all.filter(element => element !== undefined);
console.log(`${filtered.length} done out of ${all.length}`)
