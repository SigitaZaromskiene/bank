function AccWithoutImg(props) {
  const getImg = () => {
    const av = props.clientList.filter((list) => list.image === null);
    return av.length;
  };

  return (
    <div className={props.className}>
      Accounts without img: {getImg()} &euro;
    </div>
  );
}

export default AccWithoutImg;
