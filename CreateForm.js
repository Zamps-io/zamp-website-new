import React from "react";
import { Button, Input } from "antd";
import { CreateFormStyled } from "./components/CreateFormStyle";
const CreateForm = () => {
  return (
    <CreateFormStyled>
      <form>
        <div>
          <div>
            <h2 style={{ textAlign: "center" }}>
              Create Business NFT Contract
            </h2>
            <label>IPFS MetaData</label>
            <Input type="text" placeholder="Enter IPFS MetaData" />
          </div>
          <br></br>
          <Button>Create Business</Button>
          {/* <div>
            <label>Royalty Amount</label>
            <Input type="text" placeholder="supply" />
          </div>
          <div>
            <label>External Link</label>
            <Input type="text" placeholder="External Link" />
          </div>
          <div>
            <label>Business Description</label>
            <Input.TextArea type="text" placeholder="Business Description" />
          </div>
          <div>
            <label>Set URL</label>
            <Input type="text" placeholder="Set Url" />
          </div>
        </div>
        <div className="tree">
          <div>
            <label>Set merkle Tree</label>
            <Input.TextArea type="text" placeholder="Set merklt Tree" />
          </div>
          <br></br>
          <div>
            <button>Generate</button>
          </div>
          <div>
            {" "}
            <button>View on EtherScan</button>
          </div>

          <div>
            {" "}
            <button>View on OpenSea</button>
          </div> */}
        </div>
      </form>
    </CreateFormStyled>
  );
};

export default CreateForm;
