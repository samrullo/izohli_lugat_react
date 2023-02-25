import Form from "react-bootstrap/Form";

const SearchCyrillicSwitch = ({ searchCyrillic, handleSearchCyrillic }) => {
  return (
    <>
      <Form.Check
        type="switch"
        id="search-cyr"
        label="Kirilchada qidirish"
        checked={searchCyrillic}
        onChange={handleSearchCyrillic}
      />
    </>
  );
};

export default SearchCyrillicSwitch;
