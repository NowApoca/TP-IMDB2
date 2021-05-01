export default function Button({
  text,
  onClick = () => {},
  className,
  variant
}) {
  return (
    <button className={(className? className : 'button-general-class') + ` variant-${variant? variant : 'primary'}`} onClick={() => onClick()}>
      <b>{text}</b>
    </button>
  );
}
