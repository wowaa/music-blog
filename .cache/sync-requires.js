
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/waldemar/Dev/90rnb/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/waldemar/Dev/90rnb/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/waldemar/Dev/90rnb/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/waldemar/Dev/90rnb/src/pages/index.js"))
}

