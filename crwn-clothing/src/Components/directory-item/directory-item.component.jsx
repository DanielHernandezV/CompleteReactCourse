import "./directory-item.style.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, id, title } = category;

  return (
    <div className="directory-item-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* <img /> */}
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
