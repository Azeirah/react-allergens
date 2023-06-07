import React from 'react';
import PropTypes from 'prop-types';
import SvgWrapper from './SvgWrapper';

const CeleryIcon = ({ innerColor, outerColor, ...props }) => {
  const style = {
    fill: innerColor,
  };

  return (
    <SvgWrapper {...props} style={{color: outerColor}}>
      <path
        d="M107.73 215.86C48.16 215.86 0 167.34 0 107.75 0 47.81 48.16 0 107.73 0c59.94 0 108.09 47.81 108.09 107.75.01 59.59-48.15 108.11-108.09 108.11z"
        fill="currentColor"
      />
      <path
        style={style}
        d="M141.63 54.23c-1.43 3.21 8.21 5 9.63.72.71-2.15 0-4.99-2.5-6.42-1.78-1.07-7.84-.36-8.92-1.07 2.15 1.78 2.86 4.27 1.79 6.77zM90.97 53.52c2.14 1.79 6.06 6.78 9.64 6.43 2.5-.36 2.5-6.79 2.85-7.85 1.78-8.57 14.98.35 19.61 1.78-.71-2.15-2.13-5.35.72-6.42 3.57-1.79 7.85-2.14 11.78-1.43-1.78-4.28-6.07-10.71-12.5-8.21-4.63 2.14-5.35.72-9.62-.36-.71-.35-1.08-.35-1.42-.35-2.14 0-3.93 1.43-4.99 3.2-1.07 1.43-2.14 3.22-4.64 3.22-1.42.35-2.49-.71-3.56-1.43-1.08-.72-2.14-1.43-3.57-1.07-8.23 1.07 3.2 10.7-4.3 12.49zM73.84 62.44c1.43 2.15 1.08 5.72-1.42 7.5 2.5-.72 4.99-1.07 7.49-2.14 3.21-1.79 1.79-5 2.5-7.85.71-1.79 4.63-5.35 2.5-7.14-1.08-.7-2.85-1.43-4.65-1.43-.71 0-1.42 0-2.13.36-3.92 1.42-.72 6.06-6.42 7.14-1.79.35 1.78 2.85 2.13 3.56z"
      />
      <path
        style={style}
        d="M152.69 69.57c-10.34-1.07-1.79-6.42 0-11.05-2.85 1.43-7.14 1.78-10.34.72-4.64-1.43-3.57-4.28-2.86-7.5.71-3.21-3.21-3.57-6.43-3.57h-1.77c-5.72.36-5.72 1.42-5.35 5.71.71 3.92-3.92 1.79-8.92 0-4.99-2.14-10.35-3.92-11.42.35-.35 2.15-.35 6.42-3.2 7.85-5 2.5-10.7-4.64-13.92-6.78-1.43 2.14-2.49 4.65-2.85 7.5-.36 2.15 0 4.28-2.5 6.07-3.92 2.86-9.28 3.22-13.91 4.65 4.99 2.49 10.7 3.92 16.41 5.34 3.21.71 3.21 5 6.42 5.35 8.2.72 1.77 6.06 4.99 6.78.71 5.71.71 13.92.71 26.05-.71 5.71-1.42 11.06-1.77 16.41-2.16 22.13-2.51 36.4 3.2 41.04h.35c1.43 4.65 4.28 7.85 7.85 9.27-.36.72 10.7 1.42 10.34 0 2.14-1.42 4.29-3.57 5.35-6.42 1.07 0 2.15-1.08 3.93-2.5 8.2-10.71 2.5-29.62 2.86-46.39.7-16.77-.36-33.17-.36-41.39.71 0 .71.36 1.41.72 2.87.72 1.08.72 4.29-2.49 4.64-4.64-.71-2.85 4.64-7.14 4.28-3.21 10.35-4.28 13.56-8.57h-.71zm-53.51 63.87c.71-5 1.07-10.7 1.78-16.41.36-12.13 0-20.34-.72-25.69.36-1.07.72-2.49.36-5.71 0-.7-.72-2.5-1.78-3.93-.36-1.07-.72-1.78-.72-2.14 2.14 1.43 5.71 5 7.14 10.7l-.72 21.05c.36 2.86 0 5.72 0 8.93-2.14 17.11-6.06 30.68-5.7 49.23v1.08c-2.5-6.06-1.08-19.98.36-37.11zm17.84 45.68c-6.07 4.99-13.2 0-14.27-9.29-.36-4.28 0-13.2.72-23.91 1.42-9.99 3.56-24.26 3.2-34.61v-4.63l1.42-15.7h.36c-.36-1.07-.36-2.85-.36-6.06-.71-9.64-9.63-15.71-9.63-15.71s9.27 5.35 7.84.35c-1.42-3.92 7.14 9.64 9.64 13.21 1.43 1.79 2.14 4.64 2.5 7.14h.35l.37 9.63c-.37 10.71-.72 25.33-.72 25.33 1.78 35.33 4.63 49.61-1.42 54.25zm9.98-51.74c2.14 28.53 2.14 42.81-1.43 46.02-.71.71-1.42 1.43-1.78 1.43.36-1.78.72-3.57.36-6.06-.36-6.43-1.07-15.35-1.78-26.41-.35-8.21-.35-18.2 0-27.48l-1.42-22.84v-3.2h-.36c.36-4.28.36-11.77 0-14.63 0-3.93 1.78-8.92 1.78-7.86.36 1.43.36 9.64.71 10.35.72.72 2.5-.35 2.5 2.5 0 2.15.37 6.07.72 8.21-.01 8.57.7 39.97.7 39.97z"
      />
      <path
        d="M106.67 98.47h0s3.57 34.26 4.64 49.95c.72 6.79 0 19.28 0 19.28"
        fill="none"
        stroke={innerColor}
        strokeWidth={1.363}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
    </SvgWrapper>
  );
};

CeleryIcon.defaultProps = {
  outerColor: '#4cad3b',
  innerColor: 'white',
};
CeleryIcon.propTypes = {
  ...SvgWrapper.propTypes,
  outerColor: PropTypes.string,
  innerColor: PropTypes.string,
};

export default CeleryIcon;
