import { srcs } from "./imgs";
const blinking = () => {
  let btn = document.querySelectorAll("#blink path");

  setInterval(() => {
    btn.forEach((elem) => {
      elem.classList.remove("blck");
      elem.classList.add("lght");
      setTimeout(() => {
        elem.classList.remove("lght");
        elem.classList.add("blck");
      }, 100);
    });
  }, 1000);
};

const drop = () => {
  let height = document.querySelector("#dropHeight").getBBox().y;
  let btn = document.querySelector("#pull");
  btn.style.transform = `translateY(${height}px)`;
  setTimeout(() => {
    btn.style.transform = `translateY(0)`;
  }, 500);
};

const anim = () => {
  let targ = document.querySelector(".pop");
  targ.style.animation = "out .5s";
};

function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + "=" + "(.+?)(&|$)").exec(window.location.search) || [
      ,
      null,
    ])[1] || ""
  );
}

let subid = getURLParameter("subid");
let subid2 = getURLParameter("subid2");
let firstname = getURLParameter("firstname");
let surname = getURLParameter("surname");
let city = getURLParameter("city");
let zipcode = getURLParameter("zipcode");
let address = getURLParameter("address");
let phone = getURLParameter("phone");
let mobile = getURLParameter("mobile");
let pid = getURLParameter("pid");
let nrp = getURLParameter("nrp");

let ffdomain = "https://" + getURLParameter("ffdomain");
let session = getURLParameter("session");
let fluxf = getURLParameter("fluxf");
let fluxffn = getURLParameter("fluxffn");

function ActionRedirect(action) {
  window.location.replace(
    ffdomain +
      "/?flux_action=" +
      action +
      "&flux_f=" +
      fluxf +
      "&flux_ffn=" +
      fluxffn +
      "&flux_sess=" +
      session
  );
}

let current = 1;

const shuffle = ([...arr]) => {
  let m = arr.length;

  // while (m) {
  //   const i = Math.floor(Math.random() * m--);
  //   [arr[m], arr[i]] = [arr[i], arr[m]];
  // }

  return arr;
};

const createImg = (pool, boxesClone, door, ctr) => {
  const box = document.createElement("div");
  const img = document.createElement("img");

  box.classList.add("box", "trans");

  img.src = pool[ctr].src;
  img.alt = pool[ctr].alt;
  img.classList.add("w-80", "trans");

  box.appendChild(img);
  box.style.width = "80%";
  box.style.height = door.clientHeight + "px";
  boxesClone.appendChild(box);
};

async function spin(ctr) {
  const doors = document.querySelectorAll(".door");
  init(false, 1, 2, ctr);

  current++;
  for (const door of doors) {
    const boxes = door.querySelector(".boxes");
    const duration = parseInt(boxes.style.transitionDuration);
    boxes.style.transform = "translateY(0)";
    await new Promise((resolve) => setTimeout(resolve, duration * 200));
  }
}

export default spin;

const check = (ctr) => {
  console.log(srcs)
  let ret = 0;
  switch (ctr) {
    case 1:
      ret = srcs.price;
      break;
    case 2:
      ret = srcs.fs;
      break;
    // case 3:
    //   ret = srcs.spins;
    //   break;
    default:
      ret = srcs.multiplier2;
      break;
  }
  return ret;
};

export const init = (firstInit = true, groups = 1, duration = 1, ctr) => {
  let pool = [];
  let items = check(current);

  const doors = document.querySelectorAll(".door");
  if (!ctr) {
    pool.push(items[0]);
  }

  for (const door of doors) {
    if (firstInit) {
      door.dataset.spinned = "0";
    } else if (door.dataset.spinned === "1") {
      return;
    }

    const boxes = door.querySelector(".boxes");
    const boxesClone = boxes.cloneNode(false);

    if (!firstInit) {
      const arr = [];
      for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
        arr.push(...items);
        arr.push(...items);
        arr.push(...items);
        arr.push(...items);
      }
      if (ctr > 1) {
        pool.push(...shuffle(arr, ctr));
      } else {
        pool.push(...arr);
      }
    }
    for (let i = pool.length - 1; i >= 0; i--) {
      createImg(pool, boxesClone, door, i);
    }

    boxesClone.style.transitionDuration = `${duration > 0 ? 4 : 3.5}s`;
    boxesClone.style.transform = `translateY(-${
      door.clientHeight * (pool.length - 1)
    }px)`;
    door.replaceChild(boxesClone, boxes);
  }
};

export { blinking, drop, anim, ActionRedirect, firstname, surname, city };
