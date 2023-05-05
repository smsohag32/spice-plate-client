import React from "react";

const SingleRecipe = ({ favRe }) => {
  const { recipeName, rating } = favRe;
  return (
    <tbody>
      <tr className="hover">
        <th>{recipeName}</th>
        <td>{rating}</td>
      </tr>
    </tbody>
  );
};

export default SingleRecipe;
