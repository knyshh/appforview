export const SIZE = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 420,
  tabletPortrait: 768,
  tabletLandscape: 1024,
  tabletXL: 1250,
  laptop: 1440,
  desktopM: 1600,
  desktop: 1800
};

export const DEVICE = {
  mobileS: `(max-width: ${SIZE.mobileM - 1}px)`, // <375px
  mobile: `(max-width: ${SIZE.tabletPortrait - 1}px)`, //<768px
  tabletFrom: `(min-width: ${SIZE.tabletPortrait}px)`, //>=768px
  tablet: `(min-width: ${
    SIZE.tabletPortrait
  }px) and (max-width: ${SIZE.tabletLandscape - 1}px)`, //768px - 1024
  tabletLaptopS: `(min-width: ${SIZE.tabletLandscape}px) and (max-width: ${
    SIZE.tabletXL
  }px)`, //1024px - 1250
  tabletLaptop: `(min-width: ${
    SIZE.tabletLandscape
  }px) and (max-width: ${SIZE.laptop - 1}px)`, //1024px - 1440
  tabletLaptopM: `(min-width: ${
    SIZE.tabletXL
  }px) and (max-width: ${SIZE.laptop - 1}px)`, //1250px - 1440
  mobileTablet: `(max-width: ${SIZE.tabletLandscape - 1}px)`, //<1024px
  laptop: `(min-width: ${SIZE.laptop}px)`, // > 1440
  desktopS: `(min-width: ${SIZE.laptop}px) and (max-width: ${SIZE.desktopM -
    1}px)`, //1440 - 1600
  desktopM: `(min-width: ${SIZE.desktopM}px)`, //>1600
  desktop: `(min-width: ${SIZE.desktop}px)`, //> 1800

  mobileTabletDevices: `(max-width: ${SIZE.laptop - 1}px)` // <1249
};

//for using in styled components @media ${DEVICE.desktop} {...}
