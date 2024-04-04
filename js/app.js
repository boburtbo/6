import data from "./data.js";
console.log(data);
const template = document.querySelector(".page__template");
const ul = document.querySelector(".page__list");

data.forEach((page) => {
  const {
    featured,
    company,
    location,
    contract,
    postedAt,
    logo,
    position,
    languages,
  } = page;
  const li = template.content.cloneNode(true);
  console.log(logo);

  const image = li.querySelector(".page__image");
  image.src = logo;

  const pageCompany = li.querySelector(".page__company");
  pageCompany.textContent = `${company} `;

  const pagePosition = li.querySelector(".page__title");
  pagePosition.textContent = `${position} `;

  const pageLanguages = li.querySelector(".page__languages");
  pageLanguages.textContent = `${languages} `;

  pageLanguages.innerHTML = `${languages
    .map(
      (lang) =>
        `<span style="background-color: #effafa; color: #5ca5a5; padding: 4px 9px; border-radius: 3px; margin-right:15px; font-size:16px; line-height:24px; font-weight:700;">${lang}</span>`
    )
    .join(" ")}`;

  const pagePlace = li.querySelector(".page__place");
  pagePlace.textContent = `${postedAt} | ${contract} | ${location}`;

  ul.appendChild(li);
});
