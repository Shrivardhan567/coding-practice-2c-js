const Box = (props) => {
  //  Write your code here.
  const { boxType, className } = props;
  return <div className={`box ${className}`}>{boxType}</div>;
};

const element = (
  //  Write your code here.
  <div class="container">
    <h1 class="heading">Boxes</h1>
    <div class="boxes-container">
      <Box boxType="small" className="smallBox" />
      <Box boxType="medium" className="mediumBox" />
      <Box boxType="large" className="largeBox" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
