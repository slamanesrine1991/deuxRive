import React from 'react';
import ShowMore from 'react-show-more';
import './centCard.css';

function OverflowText({ item }) {
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return (
    <ShowMore
      lines={3}
      more={
        <i className="fas fa-chevron-down expand" onClick={handleExpandClick} />
      }
      less={
        <i
          className="fas fa-chevron-up expand-up"
          onClick={handleExpandClick}
        />
      }
    >
      {item}
    </ShowMore>
  );
}

export default OverflowText