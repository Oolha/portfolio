import React from "react";

interface AnimatedEmojiProps {
  symbol: string;
  label?: string;
  size?: number;
  animation?: "wave" | "pulse" | "bounce" | "spin" | "none";
}

const AnimatedEmoji: React.FC<AnimatedEmojiProps> = ({
  symbol,
  label,
  size = 24,
  animation = "none",
}) => {
  const getAnimationStyle = () => {
    const animations = {
      wave: `
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `,
      pulse: `
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `,
      bounce: `
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `,
      spin: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `,
      none: "",
    };

    return animations[animation];
  };

  return (
    <>
      <style>{getAnimationStyle()}</style>
      <span
        role="img"
        aria-label={label || ""}
        aria-hidden={label ? "false" : "true"}
        style={{
          fontSize: `${size}px`,
          display: "inline-block",
          animation: animation !== "none" ? `${animation} 2s infinite` : "none",
          transformOrigin: "center",
        }}
      >
        {symbol}
      </span>
    </>
  );
};

export default AnimatedEmoji;
