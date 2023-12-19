import React, { useEffect, useRef, useState } from "react";
import useInterval from "@use-it/interval";
import localFont from "next/font/local";

// Constants
const matrixFont = localFont({ src: "../public/fonts/matrixFont.ttf" });
const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const STREAM_MUTATION_ODDS = 0.0002;

const MIN_STREAM_SIZE = 35;
const MAX_STREAM_SIZE = 40;

const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 100;

const MIN_DELAY_BETWEEN_STREAMS = 1;
const MAX_DELAY_BETWEEN_STREAMS = 3;

function getRandInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandChar() {
  return VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));
}

function getRandStream() {
  return new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
    .fill(undefined)
    .map((_) => getRandChar());
}

function getMutatedStream(stream: string[]) {
  const newStream = [];
  for (let i = 1; i < stream.length; i++) {
    if (Math.random() < STREAM_MUTATION_ODDS) {
      newStream.push(getRandChar());
    } else {
      newStream.push(stream[i]);
    }
  }
  newStream.push(getRandChar());
  return newStream;
}

function RainStream({ height }: { height: number }) {
    const [stream, setStream] = useState<string[]>(getRandStream());
    const [topPadding, setTopPadding] = useState(stream.length * -50);
    const [intervalDelay, 

export default function MatrixRain() {
        const containerRef = useRef<HTMLDivElement>(null);
        const [containerSize, setContainerSize] = useState<null | {
            width: number;
            height: number;
        }>(null); // ?{width, height}

        useEffect(() => {
            if (containerRef.current) {
                const boundingClientRect = containerRef.current.getBoundingClientRect();
                setContainerSize({
                    width: boundingClientRect.width,
                    height: boundingClientRect.height,
                });
            }
        }, []);

        const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

        return (
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    overflow: "ignore",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
                ref={containerRef}
            >
                {new Array(streamCount).fill(undefined).map((_, i) => (
                    <RainStream height={containerSize?.height ?? 0} key={i} />
                ))}
            </div>
        );
    }
