import Form from "react-bootstrap/Form";

const ViewCyrillicSwitch=({viewCyrillic,handleViewCyrillic})=>{
    return <div>
    <Form.Check
      type="switch"
      id="view-cyr"
      label="Kirilchada Kurish"
      checked={viewCyrillic}
      onChange={handleViewCyrillic}
    />
    </div>
}

export default ViewCyrillicSwitch;