import React from 'react';
import PropTypes from 'prop-types';
import SvgWrapper from './SvgWrapper';

const PeanutIcon = ({ innerColor, outerColor, ...props }) => {
  const style = {
    fill: 'none',
    stroke: innerColor,
    strokeWidth: 1.3628,
    strokeMiterlimit: 10,
  };

  return (
    <SvgWrapper {...props}>
      <path
        d="M107.74 215.86C48.16 215.86 0 167.34 0 107.76 0 47.81 48.16 0 107.74 0c59.93 0 108.08 47.81 108.08 107.76.01 59.58-48.15 108.1-108.08 108.1z"
        fill={outerColor}
      />
      <path
        style={{ fill: innerColor }}
        d="M131.99 129.51c-16.41-2.85-15.34 21.41-8.91 36.39 6.42 14.63 23.19 10.71 24.26 10.35 10.7-4.99 14.98-19.98 8.2-33.9-12.48-26.4-21.76-13.55-21.76-13.55l5.71 29.26-7.5-28.55zM194.79 97.05c12.84 10.71-6.43 25.69-22.12 30.69-14.99 4.64-21.41-10.35-21.76-11.42-2.86-8.91 3.92-24.61 18.91-28.55 28.18-7.48 24.26 7.86 24.26 7.86l-25.68 14.63 26.39-13.21zM36.75 138.08c4.99 21.77 40.31 15.7 58.87 7.13 14.27-6.06 16.76-24.26 29.61-40.32 11.06-14.27 28.54-16.41 33.17-29.61 10.71-28.54-10.34-50.3-42.44-42.46-16.78 3.94-26.06 28.2-33.19 46.03-22.83 5.71-53.52 28.19-46.02 59.23zM86.33 86c9.99-23.92 30.69-63.52 63.15-36.75 12.84 28.9-19.98 34.96-31.4 49.95-7.83 9.63-8.19 24.98-18.54 33.18-13.21 10.34-21.41 10.34-34.61 11.41-6.42.36-14.97-2.5-19.62-7.84C44.6 105.26 61.72 91.34 86.33 86z"
      />
      <path
        style={style}
        d="M129.14 38.18c0 1.08-.36 1.79-.72 2.85-1.78 7.5-3.56 12.85-7.49 21.77-2.14 4.28-4.64 8.91-7.14 13.19-2.5 5-6.06 8.92-9.27 13.92-3.57 4.98-7.49 9.63-11.41 13.92-3.58 4.63-7.5 8.91-11.42 12.85-6.06 5.7-12.48 11.06-18.91 16.05-2.85 2.14-5.35 4.28-8.2 6.42-.71 1.08-6.07 4.28-7.5 3.93"
      />
      <path
        style={style}
        d="M139.84 38.18c0 1.08-7.49 24.98-11.41 34.26-3.57 9.28-12.12 17.12-17.48 26.05-6.06 7.49-13.2 18.2-15.34 20.33-5.71 5.72-9.28 8.92-15.7 13.92-2.85 2.14-5.35 4.28-8.21 6.42-2.14 2.49-18.2 11.42-13.55 5.35M39.24 133.08c2.14 0 8.21-3.92 9.64-5.34 4.99-5.35 12.12-9.64 17.83-14.28 9.98-7.85 27.82-25.69 31.74-31.75 3.93-6.07 9.28-13.21 13.56-23.2 4.63-10.34 2.5-9.27 4.28-16.76M124.15 97.4c1.78-3.56 8.21-5.7 9.98-9.28.72-1.42 5.72-12.49 10-27.46.35-1.43 1.78-11.77 1.78-15.7"
      />
      <path
        style={style}
        d="M42.82 113.11c2.49-.37 16.05.71 31.38 9.99 4.64 3.21 16.06 16.06 16.06 18.55M57.44 98.12c8.2 1.42 22.83 2.49 32.82 11.41 9.99 9.28 11.77 18.56 12.85 19.27M118.8 105.61c-2.15-.35-4.99-9.28-16.06-15.34-14.62-7.85-17.13-2.86-25.33-4.64M136.28 88.48c-2.5-3.92-8.56-10.69-16.06-16.05-7.85-5.71-23.9-8.2-29.61-5.71M152.69 75.64c-1.79-3.92-12.49-12.84-23.55-18.54-5-2.86-21.76-9.28-30.69-6.43"
      />
    </SvgWrapper>
  );
};

PeanutIcon.defaultProps = {
  outerColor: '#c57b4f',
  innerColor: '#fefefe',
};
PeanutIcon.propTypes = {
  ...SvgWrapper.propTypes,
  outerColor: PropTypes.string,
  innerColor: PropTypes.string,
};

export default PeanutIcon;
