const WordDefinition = ({ definition }) => {
  const styles = {
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  };
  return (
    <div className="col-md-6">{definition && <p style={styles}>{definition}</p>}</div>
  );
};

export default WordDefinition;
