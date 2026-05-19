import "./ActionButton.css";

export default function ActionButton({
  children,
  onClick,
  href,
  ariaLabel,
  small,
  ...rest
}) {
  const Tag = href ? "a" : "button";
  const className = `action-btn${small ? " action-btn--small" : ""}`;
  const tagProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  return (
    <Tag className={className} aria-label={ariaLabel} {...tagProps} {...rest}>
      {children}
      <span className="action-btn__shimmer" aria-hidden="true" />
    </Tag>
  );
}
