import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const SIGNAL = "#3DDC97";
const INK = "#071018";

function SignalGrid({ frame, fps }: { frame: number; fps: number }) {
  const lines = Array.from({ length: 14 }, (_, i) => i);
  const pulse = interpolate(Math.sin(frame / 18), [-1, 1], [0.1, 0.32]);

  return (
    <AbsoluteFill>
      {lines.map((i) => {
        const y = 40 + i * 52;
        const offset = interpolate((frame + i * 6) % 90, [0, 90], [-40, 40]);
        return (
          <div
            key={`h-${i}`}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: y,
              height: 1,
              background: `linear-gradient(90deg, transparent, rgba(61,220,151,${pulse}), transparent)`,
              transform: `translateX(${offset}px)`,
              opacity: 0.5,
            }}
          />
        );
      })}
      {Array.from({ length: 10 }, (_, i) => {
        const x = 60 + i * 120;
        const grow = spring({
          frame: frame - i * 3,
          fps,
          config: { damping: 20, stiffness: 80 },
        });
        return (
          <div
            key={`v-${i}`}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: x,
              width: 1,
              background:
                "linear-gradient(180deg, transparent, rgba(61,220,151,0.22), transparent)",
              transform: `scaleY(${0.3 + grow * 0.7})`,
              transformOrigin: "center",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
}

function SweepBeam({ frame, width, height }: { frame: number; width: number; height: number }) {
  const x = interpolate(frame % 120, [0, 120], [-200, width + 200]);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: x,
        width: 120,
        background: `linear-gradient(90deg, transparent, rgba(61,220,151,0.12), transparent)`,
        transform: "skewX(-18deg)",
        height,
      }}
    />
  );
}

export function HeroComposition() {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const ring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 18, stiffness: 60 },
  });
  const glow = interpolate(Math.sin(frame / 20), [-1, 1], [0.2, 0.5]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 70% 35%, #123048 0%, ${INK} 55%, #03070C 100%)`,
        overflow: "hidden",
      }}
    >
      <SignalGrid frame={frame} fps={fps} />
      <SweepBeam frame={frame} width={width} height={height} />

      <div
        style={{
          position: "absolute",
          width: 560 * ring,
          height: 560 * ring,
          borderRadius: "50%",
          right: width * 0.02,
          top: height * 0.05,
          border: `1px solid rgba(61,220,151,${0.15 + glow * 0.2})`,
          boxShadow: `inset 0 0 80px rgba(61,220,151,${glow * 0.25})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          right: width * 0.12,
          top: height * 0.22,
          background: `radial-gradient(circle, rgba(61,220,151,${glow}) 0%, transparent 70%)`,
          filter: "blur(10px)",
        }}
      />

      {/* Accent arc — visual only, no text badges */}
      <svg
        width={width}
        height={height}
        style={{ position: "absolute", inset: 0, opacity: 0.55 }}
      >
        <path
          d={`M ${width * 0.55} ${height * 0.15} Q ${width * 0.85} ${height * 0.4} ${width * 0.7} ${height * 0.85}`}
          fill="none"
          stroke={SIGNAL}
          strokeWidth={2}
          strokeDasharray="8 10"
          strokeDashoffset={-frame * 1.5}
          opacity={0.45}
        />
      </svg>
    </AbsoluteFill>
  );
}
