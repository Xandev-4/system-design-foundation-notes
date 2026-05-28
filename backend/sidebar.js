/* ════════════════════════════════════════
   SIDEBAR DATA
   Add new lectures / groups / topics here
════════════════════════════════════════ */
const SIDEBAR_DATA = [
  {
    id: "backend-roadmap",
    label: "Lec 1 — Backend Roadmap",
    groups: [
      {
        label: "Foundations",
        topics: [
          { href: "lec1.html#overview", label: "Overview" },
          { href: "lec1.html#http", label: "HTTP Protocol" },
          { href: "lec1.html#routing", label: "Routing" },
          { href: "lec1.html#serialisation", label: "Serialisation" },
        ],
      },
      {
        label: "Auth & Validation",
        topics: [
          { href: "lec1.html#auth", label: "Auth & Authorisation" },
          { href: "lec1.html#validation", label: "Validation & Transform" },
        ],
      },
      {
        label: "Request Handling",
        topics: [
          { href: "lec1.html#middlewares", label: "Middlewares" },
          { href: "lec1.html#request-context", label: "Request Context" },
          { href: "lec1.html#handlers", label: "Handlers & Controllers" },
          { href: "lec1.html#crud", label: "CRUD Deep Dive" },
          { href: "lec1.html#restful", label: "RESTful Architecture" },
        ],
      },
      {
        label: "Data & Logic",
        topics: [
          { href: "lec1.html#databases", label: "Databases" },
          { href: "lec1.html#bll", label: "Business Logic Layer" },
          { href: "lec1.html#caching", label: "Caching" },
        ],
      },
      {
        label: "Advanced Systems",
        topics: [
          {
            href: "lec1.html#transactional-emails",
            label: "Transactional Emails",
          },
          { href: "lec1.html#task-queuing", label: "Task Queuing" },
          { href: "lec1.html#elasticsearch", label: "Elasticsearch" },
        ],
      },
      {
        label: "Ops & Quality",
        topics: [
          { href: "lec1.html#error-handling", label: "Error Handling" },
          { href: "lec1.html#config", label: "Config Management" },
          { href: "lec1.html#logging", label: "Logging & Observability" },
          { href: "lec1.html#graceful-shutdown", label: "Graceful Shutdown" },
          { href: "lec1.html#security", label: "Security" },
          { href: "lec1.html#scaling", label: "Scaling & Performance" },
          { href: "lec1.html#concurrency", label: "Concurrency" },
          { href: "lec1.html#object-storage", label: "Object Storage" },
          { href: "lec1.html#realtime", label: "Real-Time Systems" },
          { href: "lec1.html#testing", label: "Testing & Quality" },
        ],
      },
      {
        label: "Standards & Infra",
        topics: [
          { href: "lec1.html#twelve-factor", label: "12 Factor App" },
          { href: "lec1.html#openapi", label: "OpenAPI Standards" },
          { href: "lec1.html#webhooks", label: "Webhooks" },
          { href: "lec1.html#devops", label: "DevOps for Backend" },
        ],
      },
    ],
  },
  {
    id: "what-is-backend",
    label: "Lec 2 — What is a Backend?",
    groups: [
      {
        label: "Core Concepts",
        topics: [
          { href: "lec2.html#what-is-backend", label: "What is a Backend?" },
          { href: "lec2.html#request-flow", label: "How a Request Travels" },
          { href: "lec2.html#why-backends", label: "Why Do We Need Backends?" },
        ],
      },
      {
        label: "Frontend vs Backend",
        topics: [
          { href: "lec2.html#how-frontends-work", label: "How Frontends Work" },
          {
            href: "lec2.html#why-not-frontend",
            label: "Why Not Frontend Logic?",
          },
          { href: "lec2.html#mental-model", label: "Mental Model" },
        ],
      },
    ],
  },
  {
    id: "http-deep-dive",
    label: "Lec 3 — Understanding HTTP",
    groups: [
      {
        label: "Basics",
        topics: [
          { href: "lec3.html#http-intro", label: "HTTP Fundamentals" },
          { href: "lec3.html#http-versions", label: "Evolution of HTTP" },
          { href: "lec3.html#http-messages", label: "HTTP Messages" },
          { href: "lec3.html#http-headers", label: "HTTP Headers" },
        ],
      },
      {
        label: "Methods & Security",
        topics: [
          { href: "lec3.html#http-methods", label: "HTTP Methods" },
          { href: "lec3.html#cors", label: "CORS & OPTIONS" },
          { href: "lec3.html#status-codes", label: "Status Codes" },
        ],
      },
      {
        label: "Advanced",
        topics: [
          { href: "lec3.html#http-caching", label: "HTTP Caching" },
          {
            href: "lec3.html#content-negotiation",
            label: "Content Negotiation",
          },
          { href: "lec3.html#advanced-http", label: "Advanced HTTP Concepts" },
          { href: "lec3.html#ssl-tls", label: "SSL / TLS / HTTPS" },
        ],
      },
    ],
  },
  {
    id: "routing",
    label: "Lec 4 — Routing in Backend",
    groups: [
      {
        label: "Route Types",
        topics: [
          { href: "lec4.html#what-is-routing", label: "What is Routing?" },
          { href: "lec4.html#static-routes", label: "Static Routes" },
          { href: "lec4.html#dynamic-routes", label: "Dynamic Routes" },
          { href: "lec4.html#query-params", label: "Query Parameters" },
          { href: "lec4.html#nested-routes", label: "Nested Routes" },
        ],
      },
      {
        label: "API Design",
        topics: [
          { href: "lec4.html#versioning", label: "Versioning & Deprecation" },
          { href: "lec4.html#catch-all", label: "Catch-All Routes" },
        ],
      },
    ],
  },
];

/* ════════════════════════════════════════
   SIDEBAR RENDERER
════════════════════════════════════════ */
function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  // Which lecture is active on this page (set by each HTML file)
  const currentId =
    typeof CURRENT_LECTURE !== "undefined" ? CURRENT_LECTURE : null;

  let html = '<div class="sidebar-section-label">Lectures</div>';

  SIDEBAR_DATA.forEach((lecture) => {
    const isCurrentLecture = lecture.id === currentId;

    html += `<div class="nav-lecture" data-id="${lecture.id}"${isCurrentLecture ? ' data-active="true"' : ""}>`;
    html += `<div class="nav-lecture-title">${lecture.label}</div>`;
    html += `<div class="nav-lecture-body">`;

    lecture.groups.forEach((group, gi) => {
      html += `<div class="nav-group">`;
      html += `<div class="nav-group-title">${group.label}</div>`;
      html += `<div class="nav-group-body">`;
      html += `<ul class="nav-links">`;

      group.topics.forEach((topic) => {
        const soonClass = topic.soon ? ' class="soon"' : "";
        html += `<li${soonClass}><a href="${topic.href}" data-label="${topic.label}">${topic.label}</a></li>`;
      });

      html += `</ul></div></div>`;
    });

    html += `</div></div>`;
  });

  html += '<div class="sidebar-footer">v1.0 · study notes</div>';
  sidebar.innerHTML = html;
}

/* ════════════════════════════════════════
   ACCORDION LOGIC
════════════════════════════════════════ */
function setOpen(el, open) {
  el.classList.toggle("is-open", open);
  const body = el.querySelector(
    ":scope > .nav-lecture-body, :scope > .nav-group-body",
  );
  if (!body) return;
  if (open) {
    body.style.maxHeight = body.scrollHeight + "px";
    body.addEventListener(
      "transitionend",
      () => {
        if (el.classList.contains("is-open")) body.style.maxHeight = "none";
      },
      { once: true },
    );
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
    requestAnimationFrame(() => {
      body.style.maxHeight = "0";
    });
  }
}

function initAccordion() {
  const activeLink = document.querySelector(".nav-links li.active a");

  // Level 1: Lectures
  document.querySelectorAll(".nav-lecture").forEach((lecture) => {
    const isCurrentLecture =
      lecture.dataset.active === "true" || lecture.contains(activeLink);
    const body = lecture.querySelector(":scope > .nav-lecture-body");
    if (body) body.style.maxHeight = isCurrentLecture ? "none" : "0";
    lecture.classList.toggle("is-open", isCurrentLecture);

    // Level 2: Groups — open first group by default inside active lecture
    if (isCurrentLecture) {
      lecture.querySelectorAll(".nav-group").forEach((group, idx) => {
        const groupBody = group.querySelector(":scope > .nav-group-body");
        const shouldOpen = group.contains(activeLink) || idx === 0;
        if (groupBody) groupBody.style.maxHeight = shouldOpen ? "none" : "0";
        group.classList.toggle("is-open", shouldOpen);
      });
    } else {
      // Ensure all groups inside collapsed lectures start closed
      lecture.querySelectorAll(".nav-group .nav-group-body").forEach((gb) => {
        gb.style.maxHeight = "0";
      });
    }

    // Click handler for lecture title
    const title = lecture.querySelector(":scope > .nav-lecture-title");
    if (title) {
      title.addEventListener("click", () => {
        const willOpen = !lecture.classList.contains("is-open");
        if (willOpen) {
          document.querySelectorAll(".nav-lecture").forEach((l) => {
            if (l !== lecture) setOpen(l, false);
          });
        }
        setOpen(lecture, willOpen);
      });
    }
  });

  // Level 2: Group click handlers
  document.querySelectorAll(".nav-group").forEach((group) => {
    const title = group.querySelector(":scope > .nav-group-title");
    if (title) {
      title.addEventListener("click", () => {
        setOpen(group, !group.classList.contains("is-open"));
      });
    }
  });
}

/* ════════════════════════════════════════
   ACTIVE LINK + BREADCRUMB
════════════════════════════════════════ */
function initNavLinks() {
  const isMobile = () => window.innerWidth <= 640;
  const navLinks = document.querySelectorAll(".nav-links li:not(.soon)");
  const breadcrumb = document.getElementById("breadcrumbCurrent");

  navLinks.forEach((li) => {
    li.querySelector("a").addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      li.classList.add("active");
      const label = this.dataset.label || this.textContent.trim();
      if (breadcrumb) breadcrumb.textContent = label;
      if (isMobile()) setSidebar(false);
    });
  });
}

/* ════════════════════════════════════════
   BOOT — render then wire up
════════════════════════════════════════ */
renderSidebar();
initAccordion();
initNavLinks();
