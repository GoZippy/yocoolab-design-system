import React from 'react';
import { brand, secondary } from '../../tokens/colors';

// Logo paths from the yocoolab brand mark (viewBox 0 0 651 661)
const CIRCLE_PATH =
  'M244.009 190.732C279.836 179.091 318.428 179.091 354.255 190.732C390.082 202.372 421.305 225.057 443.447 255.533C465.589 286.009 477.514 322.713 477.514 360.384C477.514 398.054 465.589 434.757 443.447 465.233C421.305 495.71 390.082 518.394 354.255 530.035C318.428 541.675 279.836 541.675 244.009 530.035C208.182 518.394 176.96 495.709 154.818 465.233C132.676 434.757 120.75 398.054 120.75 360.384C120.75 322.713 132.676 286.009 154.818 255.533C176.96 225.057 208.182 202.372 244.009 190.732Z';

const TRIANGLE_PATH =
  'M505.485 271.745C482.848 219.489 441.25 177.358 389.367 154.03H505.485V271.745Z';

export interface BrandedAvatarProps {
  /** Display text — typically initials (1-2 characters) or a single letter */
  initials: string;
  /** Background color of the egg circle. Defaults to brand pink */
  bgColor?: string;
  /** Size in pixels. Defaults to 28 (matches rc-avatar) */
  size?: number;
  /** Optional image URL — when provided, renders a circular photo instead of initials */
  src?: string;
  /** Alt text for image (used when src is provided) */
  alt?: string;
  /** Additional class name */
  className?: string;
}

export const BrandedAvatar: React.FC<BrandedAvatarProps> = ({
  initials,
  bgColor = brand[700],
  size = 28,
  src,
  alt = '',
  className,
}) => {
  const outerSize = size * 1.1;
  const fontSize = Math.round(size * 0.38);

  return (
    <span
      className={className}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: outerSize,
        height: outerSize,
        flexShrink: 0,
      }}
      role="img"
      aria-label={alt || initials}
    >
      <svg
        width={outerSize}
        height={outerSize}
        viewBox="0 0 651 661"
        fill="none"
        style={{ position: 'absolute', inset: 0 }}
        aria-hidden
      >
        <path d={CIRCLE_PATH} fill={bgColor} />
        <path d={TRIANGLE_PATH} fill={secondary[700]} />
      </svg>

      {src ? (
        <img
          src={src}
          alt={alt}
          style={{
            position: 'absolute',
            left: '42%',
            top: '52%',
            transform: 'translate(-50%, -50%)',
            width: size * 0.64,
            height: size * 0.64,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <span
          style={{
            position: 'absolute',
            left: '42%',
            top: '52%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            fontSize,
            fontWeight: 600,
            lineHeight: 1,
            pointerEvents: 'none',
          }}
        >
          {initials}
        </span>
      )}
    </span>
  );
};
