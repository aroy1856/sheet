// import { Request } from "request";

const { error } = require("console");

const form = document.getElementById("ff");
console.log(form);
const usrname = document.querySelector(".name");
const mobile = document.querySelector(".mobile");

const url =
  "https://script.google.com/macros/s/AKfycbzXbjjoMJHhzJk5FEBrTKFtLaRADmHTP9NLuO3lqcqjEJbH2qYdXr2IIPMC8xSzqsC9sw/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("submit");

  console.log(usrname.value);

  const data = {
    name: usrname.value,
    mobile: mobile.value,
  };

  const jsonData = JSON.stringify(data);
  console.log(jsonData);

  try {
    const res = await fetch(url, {
      method: "POST",
      body: jsonData,
    });

    if (res.status != 200) throw new error("unsuccessful");
  } catch (e) {
    throw new error(e);
  }
});
