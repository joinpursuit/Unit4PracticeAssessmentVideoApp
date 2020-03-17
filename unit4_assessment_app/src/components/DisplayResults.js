import React from "react";

const DisplayResults = ({ videos }) => {
  return (
    <div className="displayResults">
      {videos ? (
        <p>No Search Results Yet! Please submit a search above!</p>
      ) : (
        <p>{videos}</p>
      )}
    </div>
  );
};

export default DisplayResults;
