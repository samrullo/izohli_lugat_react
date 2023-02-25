const SearchElastic = ({
  inputValue,
  handleInputChange,
  handleSubmit,
  fuzziness,
  setFuzziness,
}) => {
  const handleFuzziness = (event) => {
    setFuzziness(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label>Qidirish so'zi</label>      
      <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      </div>
      <div>
        <label>Mavhumlik darajasi</label>
      <input
        className="form-control"
        type="number"
        value={fuzziness}
        onChange={handleFuzziness}
      />
      </div>
    </form>
  );
};

export default SearchElastic;
