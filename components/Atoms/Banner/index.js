import { React } from "react";

const Banner = ({
  text,
  color,
  borderColor,
  rightText,
  type,
  align,
  rightElement,
}) => {
  switch (type) {
    case "title":
      return (
        <Title
          text={text}
          color={color}
          borderColor={borderColor}
          rightText={rightText}
          rightElement={rightElement}
        />
      );
    case "subTitle":
      return (
        <SubTitle
          text={text}
          color={color}
          borderColor={borderColor}
          rightText={rightText}
          rightElement={rightElement}
        />
      );
    case "minTitle":
      return (
        <MinTitle
          text={text}
          color={color}
          borderColor={borderColor}
          rightText={rightText}
        />
      );
    case "tableBanner":
      return <TableBanner text={text} color={color} />;
    case "customSubTitle":
      return <CustomSubTtitle text={text} color={color} align={align} />;
    case "customText":
      return <CustomText text={text} color={color} align={align} />;
    default:
      return (
        <Title
          text={text}
          color={color}
          borderColor={borderColor}
          rightText={rightText}
          rightElement={rightElement}
        />
      );
  }
};

/**
 * H1
 */

const Title = ({ text, borderColor, color, rightText, rightElement }) => {
  return rightText ? (
    <div
      className="banner-title"
      style={{
        lineHeight: "25px",
        borderBottom: `5px solid ${borderColor ? borderColor : "goldenrod"}`,
      }}
    >
      <h1 style={{ color: `${color}`, marginLeft: "5%", marginTop: "2%" }}>
        <b>{text}</b>
      </h1>
      <h3 style={{ color: `${color}`, marginRight: "5%", marginTop: "2%" }}>
        <b>{rightText}</b>
      </h3>
      {rightElement ? rightElement : null}
    </div>
  ) : (
    <div
      className="banner-title"
      style={{
        lineHeight: "25px",
        borderBottom: `5px solid ${borderColor ? borderColor : "goldenrod"}`,
      }}
    >
      <h1 style={{ color: `${color}`, marginLeft: "5%", marginTop: "2%" }}>
        <b>{text}</b>
      </h1>
    </div>
  );
};

const TableBanner = ({ text, color }) => {
  return (
    <div
      className={styles["thead-darkened-title"]}
      style={{ lineHeight: "25px", textAlign: "center" }}
    >
      <h3 style={{ color: `${color}` }}>
        <b>{text}</b>
      </h3>
    </div>
  );
};

/**
 * H3
 */

const SubTitle = ({ text, borderColor, color, rightText, rightElement }) => {
  return rightText ? (
    <div
      className="banner-title"
      style={{
        lineHeight: "25px",
        borderBottom: `5px solid ${borderColor ? borderColor : "goldenrod"}`,
      }}
    >
      <h3 style={{ color: `${color}`, marginLeft: "5%", marginTop: "2%" }}>
        <b>{text}</b>
      </h3>
      <h5 style={{ color: `${color}`, marginRight: "%", marginTop: "" }}>
        <b>{rightText}</b>
      </h5>
      {rightElement ? rightElement : null}
    </div>
  ) : (
    <div
      className="banner-title"
      style={{
        lineHeight: "25px",
        borderBottom: `5px solid ${borderColor ? borderColor : "goldenrod"}`,
      }}
    >
      <h3 style={{ color: `${color}`, marginLeft: "5%", marginTop: "2%" }}>
        <b>{text}</b>
      </h3>
    </div>
  );
};

const CustomSubTtitle = ({ text, color, align }) => {
  return (
    <div className="mb-4" style={{ lineHeight: "25px", textAlign: `${align}` }}>
      <h3 style={{ color: `${color}`, marginRight: "10%", marginTop: "2%" }}>
        <b>{text}</b>
      </h3>
    </div>
  );
};

const CustomText = ({ text, color, align }) => {
  return (
    <div
      className="mb-4"
      style={{ lineHeight: "15px", textAlign: `${align || "center"}` }}
    >
      <h5 style={{ color: `${color}`, marginTop: "2%" }}>
        <b>{text}</b>
      </h5>
    </div>
  );
};

/**
 * H5
 */

const MinTitle = ({ text, borderColor, color, rightText }) => {
  return rightText ? (
    <div
      className="d-sm-flex align-items-center justify-content-between mb-4"
      style={{
        lineHeight: "25px",
        borderBottom: `5px solid ${borderColor ? borderColor : "goldenrod"}`,
      }}
    >
      <h5 style={{ color: `${color}`, marginLeft: "5%", marginTop: "2%" }}>
        <b>{text}</b>
      </h5>
      <h6 style={{ color: `${color}`, marginRight: "5%", marginTop: "2%" }}>
        <b>{rightText}</b>
      </h6>
    </div>
  ) : (
    <div
      className="d-sm-flex align-items-center justify-content-between mb-4"
      style={{
        lineHeight: "25px",
        borderBottom: `5px solid ${borderColor ? borderColor : "goldenrod"}`,
      }}
    >
      <h5 style={{ color: `${color}`, marginLeft: "5%", marginTop: "2%" }}>
        <b>{text}</b>
      </h5>
    </div>
  );
};

export default Banner;
