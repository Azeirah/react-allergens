import React from 'react';
import PropTypes from 'prop-types';
import SvgWrapper from './SvgWrapper';

const CrustaceanIcon = ({ innerColor, outerColor, ...props }) => {
  return (
    <SvgWrapper {...props} style={{color: outerColor}}>
      <path
        d="M215.37 107.75c0 59.59-48.06 108.11-107.87 108.11C48.06 215.86 0 167.34 0 107.75 0 47.81 48.06 0 107.51 0c59.81 0 107.86 47.81 107.86 107.75z"
        fill="currentColor"
      />
      <path
        d="M138.48 140.23c3.56-6.07 4.63-18.56 4.63-22.48v-3.57c-.71-1.79-1.42-3.56-3.2-5.71-1.42-1.78-2.85-6.06-4.62-10.34-1.42-3.23-2.85-6.42-5.34-8.21-1.78-1.07-3.91-1.79-5.69-2.86-1.07-.71-1.79-1.78-2.14-2.49-.36-1.79 0-4.28-3.2-3.93-1.07 0-2.85 1.44-3.57 1.79-2.12 1.07-4.26.35-6.04.35-.36 0-.36 0-.72.36-.36 0-.71 0-.71.36-.36-.36-.72-.36-1.07-.36 0-.36-.35-.36-.71-.36-1.78 0-3.92.72-5.7-.35-1.06-.35-2.49-1.79-3.91-1.79-2.85-.35-2.85 2.14-3.21 3.93-.36.72-1.06 1.78-2.13 2.49-1.42 1.07-3.92 1.79-5.34 2.86-2.85 1.79-4.28 4.98-5.7 8.21-1.77 4.28-2.84 8.56-4.62 10.34-1.78 2.15-2.5 3.92-2.86 5.71-.35 1.07-.35 2.14-.35 3.57 0 3.92 1.07 16.41 4.62 22.48.72 1.06 2.85 2.86 5.7 4.98 5.34 3.94 12.46 8.21 13.53 8.21 1.42 0 7.12.36 11.75 0 4.27.36 10.32 0 11.39 0 1.07 0 8.54-4.28 13.52-8.21 2.84-2.13 4.97-3.92 5.69-4.98zm40.23-40.33c-.36 0-1.07 2.14-1.78 4.28-.72 2.5-1.42 4.64-1.77 5-.36 1.08 0 2.14 1.06 2.49.72.72 2.14.35 2.5-1.06.35-.36 1.07-3.22 1.07-5.72-.02-2.85-.73-5.34-1.08-4.99zm-16.02 61.73c-1.07-.36-2.13.35-2.49 1.42 0 .36-.35 2.85-1.43 5-1.06 2.5-2.48 4.28-2.12 4.64.36.71 2.84-.72 4.62-2.86 1.78-2.13 2.85-5.35 2.85-5.7.35-1.43-.37-2.5-1.43-2.5zm-4.99-17.84c-1.42 1.07-1.78 2.85-1.07 3.93 2.84 5.7 3.21 8.56 3.92 10.34.71 1.79 1.42 2.15 2.13 2.15s1.78 0 2.14-2.5c.35-1.78.71-6.42-2.85-12.85-1.07-1.43-2.85-2.14-4.27-1.07zm-87.93-2.86c-2.13 2.85-2.84 4.99-3.2 6.42 0 2.85 1.07 3.2 2.49 3.56 1.08.71 2.5.71 3.91-.71.72-.71 1.78-1.78 3.21-2.49 1.08-.72 2.14-1.43 3.91-2.14-2.49-1.79-3.91-3.57-4.62-4.64-3.91-6.42-4.99-19.27-4.99-23.19 0-1.79 0-2.85.36-3.93 0-1.43.72-2.49 1.42-3.92-14.24-4.64-13.17-3.93-15.66-1.79-2.14 1.08-2.14 5.71 12.82 11.06-7.48 1.08-11.04 1.44-12.82 1.79-1.78.72-2.14 1.79-2.49 3.22-.36 1.06-.72 2.5 1.78 3.57 2.49 1.06 6.76 1.78 14.59.71-4.27 1.07-7.12 3.22-8.9 4.63-2.49 2.15-3.56 3.93-4.27 5.36-1.07 2.5 0 3.21 1.07 4.29 1.07.71 2.13 1.43 4.27.36 2.13-.72 4.62-3.58 10.67-5-1.41.7-2.48 1.77-3.55 2.84zm87.93-2.5c-.36-1.43-1.42-3.21-3.92-5.36-2.13-1.42-4.97-3.56-9.25-4.63 7.84 1.07 12.46.35 14.95-.71 2.5-1.07 2.14-2.5 1.78-3.57-.36-1.43-.71-2.5-2.5-3.22-1.77-.35-5.69-.7-12.81-1.79 14.95-5.35 14.95-9.98 12.81-11.06-2.48-2.14-1.42-2.85-15.66 1.79 1.07 1.07 1.42 2.49 1.77 3.92 0 1.08.37 2.14.37 3.93 0 3.92-1.43 16.77-4.99 23.19-.71 1.07-2.5 2.85-4.98 4.64 1.78.71 2.85 1.42 3.92 2.14 1.42.71 2.13 1.78 3.2 2.49 1.42 1.42 2.48 1.42 3.92.71 1.42-.36 2.5-.71 2.13-3.56 0-1.43-.71-3.57-3.2-6.42-.72-1.07-1.78-2.14-3.56-2.86 6.4 1.43 8.89 4.28 11.04 5 1.77 1.07 2.84.35 3.91-.36 1.07-1.06 2.13-1.77 1.07-4.27zM60.51 92.76c2.5 6.07 7.48 13.56 11.04 16.41.35 0 .7 0 .7.35.71-.71 1.07-1.79 2.13-2.49.71-1.08 1.43-3.21 2.14-5.35.72-1.79 1.07-3.21 1.78-4.64-2.5-2.15-5.71-4.28-7.84-6.07 3.2-3.57 2.49-10.35 1.42-16.06.36 0 .71-.35 1.07-.35.36-.36 23.14-12.5 16.74-32.12C84.7 53.5 76.52 59.21 73.67 60.99c-.72.36-2.13 1.07-3.2 1.79-.35-9.64 3.2-18.21 7.48-27.83-4.27 2.85-8.19 5.35-9.97 6.77-4.98 4.65-9.26 10.36-11.75 16.77-3.92 11.42-2.85 21.05-1.07 26.05.73 2.87 2.15 6.8 5.35 8.22zM175.5 113.1c-.71-.71-1.42-.71-2.85.36-1.42 1.08-3.55 2.5-9.25 5.7-.71.71-1.42 1.44-1.42 2.15 0 .72.35 1.43.71 2.14.35.72 1.06 1.07 2.14 1.07.35 0 1.07 0 1.78-.35 2.5-1.43 4.99-2.86 6.41-4.64 1.43-1.42 2.49-2.5 2.85-3.57.7-2.14.34-2.5-.37-2.86zM46.27 91.7c1.07-.36 1.42-1.43 1.42-2.5-.35-.72-1.07-2.86-1.42-5.35-.71-2.14-1.07-4.64-1.78-4.64-.35 0-1.06 2.5-1.06 5s.35 5.35.35 5.71c.36 1.42 1.43 2.13 2.49 1.78zm-6.05 17.48c-.35-.36-1.42-2.5-2.13-5-.72-2.14-1.08-4.28-1.42-4.28-.71-.35-1.07 2.14-1.07 5 0 2.5.72 5.36 1.07 5.72.35 1.41 1.42 1.78 2.49 1.06 1.06-.36 1.42-1.43 1.06-2.5zm6.41-16.42c-.72.36-1.42.72-1.07 2.86.35 1.78 1.42 5.7 5.69 11.06 1.43 1.42 3.21 1.42 4.28.36 1.07-1.43 1.07-2.86.36-4.28-3.93-4.64-5.35-7.5-6.42-8.92-1.41-1.43-2.12-1.43-2.84-1.08zm112.85 14.28c1.42 1.06 3.21 1.06 4.27-.36 4.63-5.35 5.71-9.28 6.06-11.06 0-2.15-.35-2.5-1.42-2.86-.71-.36-1.42-.36-2.49 1.07-1.07 1.43-2.49 4.29-6.41 8.92-1.08 1.43-1.08 2.86-.01 4.29zm9.62-15.34c.71.35 2.13-.36 2.13-1.79.36-.36.72-3.21.72-5.71-.36-2.5-.72-5-1.42-5-.36 0-.71 2.5-1.42 4.64-.36 2.5-1.42 4.63-1.42 5.35-.37 1.08.34 2.15 1.41 2.51zm-26.7-17.13c.35 0 .35.35.71.35-.71 5.71-1.42 12.49 1.77 16.06-2.48 1.78-5.33 3.92-7.83 6.07.71 1.43 1.07 2.85 1.78 4.64.72 2.14 1.77 4.28 2.49 5.35.71.7 1.07 1.42 1.78 2.49 0-.35.36-.35.36-.35 3.56-2.85 8.9-10.34 11.39-16.41 2.85-1.43 4.62-5.35 5.34-8.2 1.42-5 2.85-14.63-1.08-26.05-2.48-6.42-6.75-12.13-11.74-16.77-1.78-1.42-5.69-3.92-10.33-6.77 4.63 9.63 8.19 18.19 7.83 27.83-1.42-.72-2.48-1.43-3.19-1.79-2.85-1.78-11.05-7.49-16.02-18.55-6.76 19.61 16.38 31.74 16.74 32.1zm-89.71 48.88c.36-.71.71-1.42.71-2.14 0-.71-.71-1.43-1.43-2.15-6.05-3.21-7.83-4.63-9.25-5.7-1.43-1.07-2.14-1.07-2.85-.36-.72.36-1.43.72-.36 2.85.36 1.07 1.07 2.15 2.85 3.57 1.42 1.78 3.91 3.22 6.4 4.64.71.35 1.08.35 1.78.35.71.01 1.79-.34 2.15-1.06zM83.3 167.7c-2.49-.72-4.63-1.43-5.34-1.43-.71-.36-2.14 0-2.49 1.07-.37 1.07.35 2.14 1.42 2.49.72.36 3.56.72 6.05.72 2.85 0 5.34-.72 5.34-1.07.01-.71-2.49-1.07-4.98-1.78zm53.75-1.43c-.36 0-2.85.71-5.34 1.43-2.13.71-4.63 1.07-4.63 1.78 0 .35 2.49 1.07 4.99 1.07 2.85 0 5.69-.36 6.05-.72 1.42-.35 2.13-1.43 1.42-2.49-.35-1.07-1.41-1.43-2.49-1.07zm9.62-13.92c-1.42.72-2.5 2.14-2.14 3.57.72 4.99-1.78 6.42-2.85 8.21-1.08 1.06-1.08 1.78-.72 2.49.36 1.08.72 1.79 2.84 1.08 1.07-.36 2.86-1.08 4.28-3.22 1.78-1.78 2.84-5.71 2.14-9.63.01-1.78-1.77-2.85-3.55-2.5zm-75.83 3.57c.35-1.43-.71-2.85-2.49-3.57-1.43-.35-3.21.72-3.56 2.5-.71 3.92.7 7.85 2.14 9.63 1.78 2.14 3.21 2.86 4.27 3.22 2.14.71 2.85 0 3.2-1.08.36-.71.36-1.43-.71-2.49-1.08-1.79-3.55-3.22-2.85-8.21zm-13.17-12.13c-1.43-1.07-3.56-.35-4.28 1.07-3.55 6.42-3.55 11.06-3.2 12.85.7 2.5 1.41 2.5 2.13 2.5 1.07 0 1.78-.35 2.13-2.15.72-1.78 1.43-4.64 4.27-10.34.73-1.08.37-2.86-1.05-3.93zm-2.85 19.26c0-1.07-1.07-1.78-2.13-1.42-1.07 0-1.78 1.07-1.43 2.5 0 .35 1.07 3.57 2.86 5.7 1.78 2.14 3.91 3.57 4.27 2.86.35-.36-1.07-2.14-1.78-4.64-1.07-2.14-1.43-4.63-1.79-5z"
        fill={innerColor}
      />
    </SvgWrapper>
  );
};

CrustaceanIcon.defaultProps = {
  outerColor: '#00a1db',
  innerColor: 'white',
};
CrustaceanIcon.propTypes = {
  ...SvgWrapper.propTypes,
  outerColor: PropTypes.string,
  innerColor: PropTypes.string,
};

export default CrustaceanIcon;
