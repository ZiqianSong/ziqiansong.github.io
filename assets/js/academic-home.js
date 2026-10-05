const academicViews = document.querySelectorAll("[data-academic-view]");
const academicLinks = document.querySelectorAll(".academic-navigation a");

function showAcademicView() {
  const requestedView = window.location.hash.slice(1);
  const currentView = ["research", "cv", "teaching"].includes(requestedView) ? requestedView : "research";

  academicViews.forEach((view) => {
    view.hidden = view.dataset.academicView !== currentView;
  });
  academicLinks.forEach((link) => {
    if (link.hash === `#${currentView}`) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", showAcademicView);
showAcademicView();
