import React from "react";
import "../styles/Level3.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';

const getTileId = (row, col) => String.fromCharCode(65 + row) + (col + 1);

export default function ChessBoard({ onTileClick }) {
  return (
    <div className="floating-wrapper">
      <div className="perspective-wrapper">
        <div className="chessboard grid-rotate">
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => {
              const id = getTileId(row, col);
              return (
                <div
                  key={id}
                  className={`chess-tile ${
                    (row + col) % 2 === 0 ? "tile-light" : "tile-dark"
                  }`}
                  onClick={() => onTileClick(id)}
                >
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}