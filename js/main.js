const date = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
const formattedDate = date.toLocaleString("en-US", options);

document.querySelector(".paragraph-text-2").textContent = formattedDate;
