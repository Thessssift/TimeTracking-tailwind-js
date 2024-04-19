import jsoun from "./data.json" assert { type: "json" };
const x = jsoun;
const dailyTab = [...document.querySelectorAll("[role = x]")];
const texto = [...document.querySelectorAll("#textToChange")];

const arroy = ["work", "play", "study", "exercise", "social", "self"];
const currents = {};
const previouses = {};

for (let index = 0; index < arroy.length; index++) {
  currents[arroy[index]] = document.querySelector(`#${arroy[index]}Current`);
  previouses[arroy[index]] = document.querySelector(`#${arroy[index]}Pre`);
}

for (let index = 0; index < 6; index++) {
  currents[arroy[index]].textContent =
    x[index].timeframes.weekly.current + "Hrs";
  previouses[arroy[index]].textContent =
    x[index].timeframes.weekly.previous + "Hrs";
}

function tabing(e) {
  dailyTab.forEach((element) => {
    element.classList.add("text-Desaturatedblue");
    element.classList.remove("text-white");
  });
  e.currentTarget.classList.toggle("text-white");

  if (e.currentTarget.id === "Daily") {
    texto.forEach((element) => {
      element.textContent = "Yesterday";
    });
    for (let index = 0; index < 6; index++) {
      currents[arroy[index]].textContent =
        x[index].timeframes.daily.current + "Hrs";
      previouses[arroy[index]].textContent =
        x[index].timeframes.daily.previous + "Hrs";
    }
  }

  if (e.currentTarget.id === "Weekly") {
    texto.forEach((element) => {
      element.textContent = "Last Week";
    });
    for (let index = 0; index < 6; index++) {
      currents[arroy[index]].textContent =
        x[index].timeframes.weekly.current + "Hrs";
      previouses[arroy[index]].textContent =
        x[index].timeframes.weekly.previous + "Hrs";
    }
  }
  if (e.currentTarget.id === "Monthly") {
    texto.forEach((element) => {
      element.textContent = "Last Month";
    });
    for (let index = 0; index < 6; index++) {
      currents[arroy[index]].textContent =
        x[index].timeframes.monthly.current + "Hrs";
      previouses[arroy[index]].textContent =
        x[index].timeframes.monthly.previous + "Hrs";
    }
  }
}

dailyTab.forEach((element) => {
  element.addEventListener("click", tabing);
});

// console.log(x[0].timeframes.daily.current);
// console.log(x[0].title);

//   console.log(currents.play.textContent); // Output: Play
//   console.log(currents.study.textContent); // Output: Study
//   console.log(currents.exercise.textContent); // Output: Exercise
//   console.log(currents.social.textContent); // Output: Social
//   console.log(currents.self.textContent); // Output: Self Care
