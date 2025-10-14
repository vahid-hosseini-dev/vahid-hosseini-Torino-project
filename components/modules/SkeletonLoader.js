import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <>
    <ContentLoader
      speed={2}
      width={330}
      height={160}
      viewBox="0 0 330 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="25" y="2" rx="12" ry="12" width="265" height="92" />
      <rect x="165" y="99" rx="6" ry="6" width="121" height="14" />
      <rect x="89" y="119" rx="8" ry="8" width="199" height="11" />
      <rect x="225" y="137" rx="6" ry="6" width="61" height="16" />
      <rect x="28" y="139" rx="0" ry="0" width="61" height="16" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width={330}
      height={160}
      viewBox="0 0 330 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="25" y="2" rx="12" ry="12" width="265" height="92" />
      <rect x="165" y="99" rx="6" ry="6" width="121" height="14" />
      <rect x="89" y="119" rx="8" ry="8" width="199" height="11" />
      <rect x="225" y="137" rx="6" ry="6" width="61" height="16" />
      <rect x="28" y="139" rx="0" ry="0" width="61" height="16" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width={330}
      height={160}
      viewBox="0 0 330 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="25" y="2" rx="12" ry="12" width="265" height="92" />
      <rect x="165" y="99" rx="6" ry="6" width="121" height="14" />
      <rect x="89" y="119" rx="8" ry="8" width="199" height="11" />
      <rect x="225" y="137" rx="6" ry="6" width="61" height="16" />
      <rect x="28" y="139" rx="0" ry="0" width="61" height="16" />
    </ContentLoader>
  </>
);

export default MyLoader;
