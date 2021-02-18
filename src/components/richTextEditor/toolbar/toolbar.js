import React from "react";
import Button from "../../common/button";

import "./toolbar.css";

const Toolbar = ({ onActionApplied }) => {
  return (
    <div className="toolbar">
      <div className="toolbar-action">
        <Button
          onClick={onActionApplied}
          dataAttributes={{ "data-command": "bold" }}
        >
          Bold
        </Button>
      </div>
      <div className="toolbar-action">
        <Button
          onClick={onActionApplied}
          dataAttributes={{ "data-command": "italic" }}
        >
          Italic
        </Button>
      </div>
      <div className="toolbar-action">
        <Button
          onClick={onActionApplied}
          dataAttributes={{ "data-command": "underline" }}
        >
          Underline
        </Button>
      </div>
      <div className="toolbar-action">
        <input
          type="text"
          name="fontSize"
          placeholder="Font Size(px)"
          onBlur={onActionApplied}
          data-command="fontSize"
        />
      </div>
      <div className="toolbar-action">
        <input
          type="text"
          name="color"
          placeholder="Color Hex Code"
          onBlur={onActionApplied}
          data-command="foreColor"
        />
      </div>
      <div className="toolbar-action">
        <Button
          onClick={onActionApplied}
          dataAttributes={{ "data-command": "insertUnorderedList" }}
        >
          List
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
