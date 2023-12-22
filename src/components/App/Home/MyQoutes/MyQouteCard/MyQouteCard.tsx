const MyQouteCard = (props: { qoute: string }) => {
  const { qoute } = props;
  const width = window.innerWidth;
  return (
    <div className="myqoutes__card">
      <p style={{ width: width < 400 ? width - 100 : 400 }}>"{qoute}"</p>
      <h5>- Steven Omole</h5>
    </div>
  );
};

export default MyQouteCard;
