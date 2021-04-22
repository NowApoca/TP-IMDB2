import DropdownInput from "./Dropdown.js";

export default function PriceType({
  value,
  setter,
  setterIsOk,
  inputClass,
  labelClass,
}) {
  const options = [
    { value: "price_low", text: "Bajo" },
    { value: "price_middle", text: "Medio" },
    { value: "price_high", text: "Alto" },
    { value: "price_custom", text: "Especial" },
  ];

  const translatePrices = (value) => {
    switch (value) {
      case "price_low":
        return "Bajo";
      case "price_middle":
        return "Medio";
      case "price_high":
        return "Alto";
      case "price_custom":
        return "Especial";
    }
  };

  return (
    <DropdownInput
      value={value}
      setter={setter}
      options={options}
      label={`${translatePrices(value)}`}
      classNameInput={inputClass}
      classNamelabel={labelClass}
    />
  );
}
