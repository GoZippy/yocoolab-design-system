import React from 'react';
import { brand, secondary, semantic } from '../../tokens/colors';

export type PointerPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

interface YocoolabMarkerIconProps {
  /** Where the triangular pointer should point (toward the comment panel) */
  pointerPosition?: PointerPosition;
  /** Rendered size in pixels */
  size?: number;
  /** When true, uses success green instead of brand colors */
  resolved?: boolean;
  className?: string;
}

// SVG paths extracted from logo-icon.svg (viewBox 0 0 650 661)
// Base orientation: pointer at top-right, eye cutout on right side
const CIRCLE_PATH =
  'M244.009 190.886C279.836 179.245 318.428 179.245 354.255 190.886C390.082 202.527 421.305 225.211 443.447 255.687C465.589 286.163 477.514 322.868 477.514 360.538C477.514 398.208 465.589 434.912 443.447 465.388C421.305 495.864 390.082 518.548 354.255 530.189C318.428 541.83 279.836 541.83 244.009 530.189C208.182 518.548 176.96 495.864 154.818 465.388C132.676 434.912 120.75 398.209 120.75 360.538C120.75 322.867 132.676 286.163 154.818 255.687C176.96 225.211 208.182 202.527 244.009 190.886ZM309.962 190.413C302.923 188.126 295.341 188.126 288.302 190.413C281.263 192.7 275.129 197.157 270.778 203.145C266.428 209.132 264.085 216.344 264.085 223.745C264.085 231.146 266.428 238.358 270.778 244.345C275.129 250.333 281.263 254.789 288.302 257.076C295.341 259.364 302.923 259.364 309.962 257.076C317.001 254.789 323.135 250.333 327.486 244.345C331.836 238.358 334.179 231.146 334.179 223.745C334.179 216.344 331.836 209.132 327.486 203.145C323.135 197.157 317.001 192.7 309.962 190.413Z';

const TRIANGLE_PATH =
  'M505.485 271.899C482.848 219.643 441.25 177.513 389.367 154.184H505.485V271.899Z';

const VB_W = 650;
const VB_H = 661;

export const YocoolabMarkerIcon: React.FC<YocoolabMarkerIconProps> = ({
  pointerPosition = 'top-right',
  size = 40,
  resolved = false,
  className,
}) => {
  const flipX = pointerPosition === 'top-left' || pointerPosition === 'bottom-left';
  const flipY = pointerPosition === 'bottom-right' || pointerPosition === 'bottom-left';

  const scaleX = flipX ? -1 : 1;
  const scaleY = flipY ? -1 : 1;
  const translateX = flipX ? -VB_W : 0;
  const translateY = flipY ? -VB_H : 0;

  const groupTransform =
    flipX || flipY
      ? `scale(${scaleX},${scaleY}) translate(${translateX},${translateY})`
      : undefined;

  const circleColor = resolved ? semantic.success : brand[700];
  const pointerColor = resolved ? semantic.success : secondary[700];

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="presentation"
      aria-hidden
    >
      <g transform={groupTransform}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={CIRCLE_PATH}
          fill={circleColor}
        />
        <path d={TRIANGLE_PATH} fill={pointerColor} />
      </g>
    </svg>
  );
};
