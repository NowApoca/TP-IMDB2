export default function DropdownInput({
  value,
  setter,
  options,
  label,
  classNameInput,
  classNamelabel,
}) {
  const optionElements = options.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.text}
      </option>
    );
  });
  if (!value) setter(options[0].value);
  return (
    <>
      <label className={classNamelabel ? classNamelabel : "login-input-header"}>
        {label}
      </label>
      <div style={{ marginTop: "2%" }}>
        <select
          className={classNameInput ? classNameInput : ""}
          value={value}
          onChange={(e) => {
            setter(e.target.value);
          }}
        >
          {optionElements}
        </select>
      </div>
    </>
  );
}
