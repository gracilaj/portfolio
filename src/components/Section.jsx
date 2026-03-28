export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container section-inner">
        {(eyebrow || title) && (
          <header className="section-header">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
