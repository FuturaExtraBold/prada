import "./ActionButton.css";

export default function ActionButton({
  children,
  onClick,
  href,
  ariaLabel,
  small,
}) {
  const className = `action-btn${small ? " action-btn--small" : ""}`;

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
        <span className="action-btn__shimmer" aria-hidden="true" />
      </a>
    );
  }

  return (
    <button className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
      <span className="action-btn__shimmer" aria-hidden="true" />
    </button>
  );
}
