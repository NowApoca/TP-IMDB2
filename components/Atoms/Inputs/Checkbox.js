export default function CheckboxInput({
  value,
  setter,
  label,
  classNameInput,
  classNamelabel,
}) {
  return (
    <>
      <label className={classNamelabel ? classNamelabel : "login-input-header"}>
        {label}
      </label>
      <div style={{ marginTop: "2%" }}>
        <input
          type="checkbox"
          className={classNameInput ? classNameInput : ""}
          checked={value}
          onChange={(e) => {
            setter(!value);
          }}
        />
      </div>
    </>
  );
}
