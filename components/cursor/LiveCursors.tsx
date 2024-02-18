import { LiveCursorProps } from "@/types/type";
import React from "react";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";

const LiveCursors = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence }) => {
    if (!presence?.cursor) return null;

    return (
      <Cursor
        key={connectionId}
        message={presence.message}
        x={presence.cursor.x}
        y={presence.cursor.y}
        color={COLORS[Number(connectionId) % COLORS.length]}
      />
    );
  });
};

export default LiveCursors;
