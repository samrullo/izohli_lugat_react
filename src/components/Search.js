
const Search = ({inputValue,handleInputChange,handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label>Qidirish so'zi</label>
      <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />      
    </form>
  );
};

export default Search;