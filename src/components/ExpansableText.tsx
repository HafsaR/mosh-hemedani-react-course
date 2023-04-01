interface Props {
  children: string;
  isExpanded: boolean;
  maxChars?: number;
  onClick: () => void;
}

function ExpansableText({
  children,
  isExpanded,
  maxChars = 100,
  onClick,
}: Props) {
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}......
      <button onClick={onClick}>{isExpanded ? "Less" : "More"}</button>
    </p>
  );
}

export default ExpansableText;
