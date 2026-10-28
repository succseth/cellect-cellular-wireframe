/* No framework, bundler, server, package install or network access required.
 * Hash routes work with file://, including browser Back/Forward.
 * All controls below are local wireframe interactions; nothing is submitted.
 */
"use strict";

const app = document.getElementById("app");
const names = {
  "/": "HOME",
  "/deals": "DEALS",
  "/devices": "DEVICES",
  "/upgrades": "UPGRADES",
  "/store-locator": "STORE LOCATOR",
  "/yello-trader": "Y’ELLO TRADER",
  "/contact": "CONTACT",
};
let currentRoute = "/";
let activeDialog = null;
const all = (selector, root = app) => Array.from(root.querySelectorAll(selector));
const one = (selector, root = app) => root.querySelector(selector);

function render() {
  closeDialog();
  const route = location.hash.slice(1) || "/";
  currentRoute = Object.hasOwn(PAGE_TEMPLATES, route) ? route : "/";
  app.innerHTML = PAGE_TEMPLATES[currentRoute];
  document.title = names[currentRoute] + " — Wireframe";
  window.scrollTo(0, 0);
  bindCommon();
  if (currentRoute === "/") bindHome();
  if (["/deals", "/devices"].includes(currentRoute)) bindCatalog();
  if (currentRoute === "/upgrades") bindUpgrades();
  if (currentRoute === "/store-locator") bindLocator();
  if (currentRoute === "/yello-trader") bindTrader();
  if (currentRoute === "/contact") bindContact();
}

function bindCommon() {
  const toggle = one(".menu-toggle");
  toggle.addEventListener("click", () => {
    const open = one("header nav").classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  one(".search-icon").addEventListener("click", openSearch);
  one('[aria-label="Back to top"]').addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
  all("header nav a").forEach((link) =>
    link.addEventListener("click", () => {
      one("header nav").classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }),
  );
}

function closeDialog() {
  if (!activeDialog) return;
  activeDialog.close();
  activeDialog.remove();
  activeDialog = null;
  document.body.style.overflow = "";
}

function openDialog(template) {
  closeDialog();
  const dialog = document.createElement("dialog");
  dialog.className = "modal";
  dialog.innerHTML = PREVIEW_TEMPLATES[template];
  dialog.setAttribute("aria-label", dialog.querySelector("h2").textContent);
  document.body.append(dialog);
  activeDialog = dialog;
  dialog.querySelector('[aria-label="Close preview"]').addEventListener("click", closeDialog);
  dialog.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeDialog();
  });
  dialog.addEventListener("click", (e) => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
      closeDialog();
  });
  all("a", dialog).forEach((link) => link.addEventListener("click", closeDialog));
  document.body.style.overflow = "hidden";
  dialog.showModal();
  return dialog;
}

function openSearch() {
  const dialog = openDialog("search");
  const input = one("input", dialog);
  const links = all(".search-results a", dialog);
  input.addEventListener("input", () =>
    links.forEach(
      (link) => (link.hidden = !link.textContent.toLowerCase().includes(input.value.toLowerCase())),
    ),
  );
  input.focus();
}

function bindHome() {
  let slide = 0;
  const tabs = all(".hero-tabs button");
  function update(value) {
    slide = (value + 3) % 3;
    tabs.forEach((tab, i) => {
      tab.classList.toggle("selected", i === slide);
      tab.setAttribute("aria-pressed", String(i === slide));
    });
    const href = ["#/deals", "#/devices", "#/upgrades"][slide];
    const cta = one(".hero-cta");
    cta.href = href;
    cta.firstChild.textContent = ["DEALS", "DEVICES", "UPGRADES"][slide];
    one(".carousel-controls > span").innerHTML = `0${slide + 1}<small> / 03</small>`;
  }
  tabs.forEach((tab, i) => tab.addEventListener("click", () => update(i)));
  one('[aria-label="Previous slide"]').addEventListener("click", () => update(slide - 1));
  one('[aria-label="Next slide"]').addEventListener("click", () => update(slide + 1));
}

function bindCatalog() {
  let page = 1,
    filter = 0;
  const cards = all(".product-card");
  const tabs = all(".catalog-toolbar .tabs button");
  const paging = all(".pagination button");
  const checkboxes = all(".filters input");
  function update() {
    const checked = checkboxes.some((input) => input.checked);
    const count = checked ? 2 : filter === 0 ? 6 : 3;
    cards.forEach((card, i) => (card.hidden = i >= count));
    tabs.forEach((tab, i) => {
      tab.classList.toggle("selected", i === filter);
      tab.setAttribute("aria-pressed", String(i === filter));
    });
    paging.forEach((button, i) => {
      if (i > 0 && i < 4) {
        button.classList.toggle("selected", i === page);
        button.setAttribute("aria-current", i === page ? "page" : "false");
      }
    });
    paging[0].disabled = page === 1;
    paging[4].disabled = page === 3;
  }
  tabs.forEach((tab, i) =>
    tab.addEventListener("click", () => {
      filter = i;
      page = 1;
      update();
    }),
  );
  paging.forEach((button, i) =>
    button.addEventListener("click", () => {
      page = i === 0 ? Math.max(1, page - 1) : i === 4 ? Math.min(3, page + 1) : i;
      update();
    }),
  );
  checkboxes.forEach((input) =>
    input.addEventListener("change", () => {
      page = 1;
      update();
    }),
  );
  one(".filters .reset").addEventListener("click", () => {
    checkboxes.forEach((input) => (input.checked = false));
    filter = 0;
    page = 1;
    update();
  });
  one(".sort select").addEventListener("change", (e) => {
    const grid = one(".product-grid");
    const order = e.target.selectedIndex === 0 ? cards : cards.slice().reverse();
    order.forEach((card) => grid.append(card));
  });
  cards.forEach((card) =>
    card.addEventListener("click", () => {
      const dialog = openDialog(currentRoute === "/devices" ? "device" : "deal");
      all(".color-swatches button", dialog).forEach((button) =>
        button.addEventListener("click", () => {
          all(".color-swatches button", dialog).forEach((b) =>
            b.setAttribute("aria-pressed", String(b === button)),
          );
          one(".phone-outline", dialog).style.background = getComputedStyle(button).backgroundColor;
        }),
      );
    }),
  );
}

function bindUpgrades() {
  one(".form-panel form").addEventListener("submit", (e) => {
    e.preventDefault();
    one(".form-panel form").outerHTML = PREVIEW_TEMPLATES.eligibility;
    all(".steps > span")[1].classList.add("current");
    one(".form-result .reset").addEventListener("click", render);
  });
}

function bindLocator() {
  let selected = 0,
    count = 4,
    zoom = 1,
    view = "Map";
  const stores = all(".store-card");
  const pins = all(".map-pin");
  const tabs = all(".locator-toolbar .tabs button");
  function update() {
    stores.forEach((store, i) => {
      store.hidden = i >= count;
      store.classList.toggle("selected", i === selected);
      store.setAttribute("aria-pressed", String(i === selected));
    });
    pins.forEach((pin, i) => {
      pin.hidden = i >= count;
      pin.classList.toggle("selected", i === selected);
      pin.setAttribute("aria-pressed", String(i === selected));
    });
    tabs.forEach((tab) => tab.classList.toggle("selected", tab.textContent.trim() === view));
    one(".locator").classList.toggle("list-view", view === "List");
    one(".map-placeholder").hidden = view === "List";
    one(".map-grid").style.transform = `scale(${zoom})`;
  }
  stores.forEach((store, i) =>
    store.addEventListener("click", () => {
      selected = i;
      update();
    }),
  );
  pins.forEach((pin, i) =>
    pin.addEventListener("click", () => {
      selected = i;
      update();
    }),
  );
  one(".locator-toolbar form").addEventListener("submit", (e) => {
    e.preventDefault();
    count = 2;
    selected = 0;
    update();
  });
  one(".locator-toolbar input").addEventListener("input", () => {
    count = 4;
    update();
  });
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      view = tab.textContent.trim();
      update();
    }),
  );
  one('[aria-label="Zoom in"]').addEventListener("click", () => {
    zoom = Math.min(zoom + 0.2, 1.8);
    update();
  });
  one('[aria-label="Zoom out"]').addEventListener("click", () => {
    zoom = Math.max(zoom - 0.2, 0.8);
    update();
  });
}

function bindTrader() {
  const open = () => {
    let sheet = 1;
    const dialog = openDialog("catalogue");
    const controls = all(".pagination button", dialog);
    function update() {
      one(".pagination > span", dialog).textContent = `${sheet} / 8`;
      controls[0].disabled = sheet === 1;
      controls[1].disabled = sheet === 8;
      one(".catalogue-sheet", dialog).setAttribute(
        "aria-label",
        `Catalogue page ${sheet} placeholder`,
      );
    }
    controls[0].addEventListener("click", () => {
      sheet--;
      update();
    });
    controls[1].addEventListener("click", () => {
      sheet++;
      update();
    });
    update();
  };
  one(".trader-feature button").addEventListener("click", open);
  all(".publication").forEach((button) => button.addEventListener("click", open));
  one('[aria-label="Filter catalogues by year"]').addEventListener("change", (e) =>
    all(".publication").forEach((card, i) => (card.hidden = e.target.value !== "All" && i >= 2)),
  );
}

function bindContact() {
  one(".form-panel form").addEventListener("submit", (e) => {
    e.preventDefault();
    one(".form-panel").innerHTML = PREVIEW_TEMPLATES.contact;
    one(".form-result button").addEventListener("click", render);
  });
  all(".faq-row").forEach((row) => {
    const button = one("button", row);
    const answer = document.createElement("div");
    answer.className = "lines";
    answer.innerHTML = "<span></span><span></span><span></span>";
    answer.hidden = true;
    row.append(answer);
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      all(".faq-row").forEach((other) => {
        one("button", other).setAttribute("aria-expanded", "false");
        other.lastElementChild.hidden = true;
      });
      button.setAttribute("aria-expanded", String(!expanded));
      answer.hidden = expanded;
    });
  });
}

window.addEventListener("hashchange", render);
render();
