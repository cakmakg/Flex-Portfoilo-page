import { Card } from '@mui/material';
import { accents, alpha, shadows, easing } from '../../theme/tokens';
import { HudFrame } from './HudFrame';

// Premium kart tabanı. Temel cam/gölge stili tema MuiCard'dan gelir; burada
// accent'e göre üst kenarlık, HUD köşeleri ve hover'da kaldırma+parıltı eklenir.
// Projects/Certificates/Skills/About/Contact kartları bunun üzerine kurulur.
export const GlassCard = ({
  accent = accents.cyan,
  corners = ['tl'],
  interactive = true,
  children,
  sx,
  ...rest
}) => (
  <Card
    {...rest}
    sx={{
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderTop: `2px solid ${alpha(accent, 0.5)}`,
      transition: `transform 0.4s ${easing}, box-shadow 0.4s ${easing}, border-color 0.4s ${easing}`,
      ...(interactive && {
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: alpha(accent, 0.4),
          boxShadow: `${shadows.cardHover}, 0 0 26px ${alpha(accent, 0.18)}`,
        },
      }),
      ...sx,
    }}
  >
    {corners?.length > 0 && <HudFrame color={accent} corners={corners} size={20} />}
    {children}
  </Card>
);
