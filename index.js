const text = document.querySelector("textarea");

const generateButton = document.querySelector("button");

generateButton.addEventListener("click", () => {
  let filterText = text.value.split("\n");
  filterText = filterText.filter((word) => {
    word.includes(/.Accepted./gm);
  })
  console.log(filterText);
})