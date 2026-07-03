import { useState } from "react";
import { C } from "../../constants/theme";

export default function BentoCard({ sport }) {
  const [hov, setHov] = useState(false);
  const large = sport.span === "large";

  return (
    <div
      data-cur
      className={large ? "ku-bento-large" : "ku-bento-small"}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderTop: `3px solid ${hov ? C.og : "transparent"}`,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Full-cover image */}
      <img
        src={sport.image}
        alt={sport.name}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform .4s ease",
          transform: hov ? "scale(1.08)" : "scale(1)",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hov
            ? "linear-gradient(to top, rgba(8,12,18,.92) 0%, rgba(8,12,18,.3) 60%, rgba(8,12,18,.05) 100%)"
            : "linear-gradient(to top, rgba(8,12,18,.75) 0%, rgba(8,12,18,.2) 60%, rgba(8,12,18,.05) 100%)",
          transition: "background 0.3s",
        }}
      />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: -20,
          right: -10,
          fontFamily: C.FD,
          fontWeight: 900,
          fontStyle: "italic",
          fontSize: large ? 130 : 80,
          color: hov ? "rgba(232,118,42,0.07)" : "rgba(255,255,255,0.02)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          transition: "color 0.3s",
        }}
      >
        {sport.name.toUpperCase()}
      </div>

      {/* Diagonal corner accent */}
      {hov && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: `0 40px 40px 0`,
            borderColor: `transparent ${C.og} transparent transparent`,
          }}
        />
      )}

      {/* Content pinned to bottom-left */}
      <div
        style={{
          position: "absolute",
          left: large ? 40 : 28,
          bottom: large ? 40 : 28,
          zIndex: 5,
        }}
      >
        <div
          style={{
            fontFamily: C.FD,
            color: "#fff",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: large ? 34 : 24,
            marginBottom: 8,
            textShadow: "0 2px 12px rgba(0,0,0,.8)",
          }}
        >
          {sport.name}
        </div>

        <div
          style={{
            display: "inline-block",
            border: `1px solid ${C.og}`,
            background: "rgba(8,12,18,.7)",
            color: C.og,
            padding: "4px 10px",
            fontSize: 10,
            letterSpacing: 2,
          }}
        >
          {sport.age}
        </div>
      </div>
    </div>
  );
}