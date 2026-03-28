/** Simple Icons CDN — mint single-color SVG. Devicon fallbacks where CDN slug is missing. */
const ACCENT = '64ffda'

const devicon = (folder, file) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${folder}/${file}.svg`

/** Keys match `icon` field in `skills.js` */
const ICON_SRC = {
  vscode: devicon('vscode', 'vscode-original'),
  aws: devicon('amazonwebservices', 'amazonwebservices-plain-wordmark'),
}

export function skillIconSrc(slug) {
  if (!slug) return null
  if (ICON_SRC[slug]) return ICON_SRC[slug]
  return `https://cdn.simpleicons.org/${slug}/${ACCENT}`
}
