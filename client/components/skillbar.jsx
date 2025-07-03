const SkillBar = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="skillBar">
      <img src={imgSrc} alt={altText} className="skillBarImg" />
      <div className="skillBarText">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillBar;
