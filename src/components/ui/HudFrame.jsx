import { Box } from '@mui/material';
import { accents } from '../../theme/tokens';

// Kartların/kutuların köşesindeki dekoratif HUD parantezleri.
// Ebeveyn position: relative olmalı. Salt dekoratif → aria-hidden.
const CORNER_SX = {
  tl: { top: 0, left: 0, borderTopWidth: 2, borderLeftWidth: 2, borderTopLeftRadius: 'inherit' },
  tr: { top: 0, right: 0, borderTopWidth: 2, borderRightWidth: 2, borderTopRightRadius: 'inherit' },
  bl: { bottom: 0, left: 0, borderBottomWidth: 2, borderLeftWidth: 2, borderBottomLeftRadius: 'inherit' },
  br: { bottom: 0, right: 0, borderBottomWidth: 2, borderRightWidth: 2, borderBottomRightRadius: 'inherit' },
};

export const HudFrame = ({ color = accents.cyan, corners = ['tl', 'br'], size = 24 }) => (
  <>
    {corners.map((c) => (
      <Box
        key={c}
        aria-hidden
        sx={{
          position: 'absolute',
          width: size,
          height: size,
          borderStyle: 'solid',
          borderColor: typeof color === 'object' ? color[c] || accents.cyan : color,
          borderWidth: 0,
          pointerEvents: 'none',
          zIndex: 3,
          ...CORNER_SX[c],
        }}
      />
    ))}
  </>
);
