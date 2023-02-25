import Form from "react-bootstrap/Form";

const SearchElasticSwitch=({searchElastic,handleSearchElastic})=>{
    return <div>
    <Form.Check
      type="switch"
      id="search-elastic"
      label="Elastik Qidirish"
      checked={searchElastic}
      onChange={handleSearchElastic}
    />
    </div>
}

export default SearchElasticSwitch;