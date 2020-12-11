import React, { useState } from "react";
import { ListGroup, ListGroupItem, Tooltip } from "reactstrap";

const TooltipTest = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <p id="TooltipExample">Hover me!</p>
      <Tooltip
        autohide={false}
        placement="right"
        isOpen={tooltipOpen}
        target="TooltipExample"
        toggle={toggle}
      >
        <ListGroup flush>
          <ListGroupItem>
            <a href="/">Products</a>
          </ListGroupItem>
          <ListGroupItem active>
            <a href="/">Linesheets</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/">Categories</a>
          </ListGroupItem>
        </ListGroup>
      </Tooltip>
    </div>
  );
};

export default TooltipTest;
