import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, i) => (
        <Tile key={i} name={tile.name} description={tile} />
      ))}
    </div>
  );
};
