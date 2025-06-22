// Utility: Convert hex to RGB string (e.g. "#ffffff" → "255, 255, 255")
export const hexToRgb = (hex) => {
    if (!hex || typeof hex !== 'string') return '';
    const cleaned = hex.replace('#', '');
    const bigint = parseInt(cleaned, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
};

// Utility: Get rgba string from hex color
export const getRgbaColor = (hex, opacity = 1) =>
    `rgba(${hexToRgb(hex)}, ${opacity})`;

export const COLORS = {
    accent: '#2337ff',
    accentDark: '#000d8a',
    black: '#0f1219',
    gray: '#60739f',
    grayLight: '#e5e9f0',
    grayDark: '#222939',
    white: '#ffffff',
    offWhite: '#BFBFBF',
    mainSurfaceBackground: '#212121e6',
    semiSurfacePrimary: '#303030',
    surfaceBlend1: '#383838',
    surfaceBlend2: '#404040',
    outerSurfaceBackground: '#474747',
    messageSurface: '#323232d9',
    composerBlueBg: '#2a4a6d',
    composerBlueHover: '#1a416a',
    composerBlueText: '#48aaff',
    cardSurfaceBackground: '#292929',
};