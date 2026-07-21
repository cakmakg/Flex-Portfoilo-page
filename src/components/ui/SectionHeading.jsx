import { Box, Chip, Typography } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import { accents, alpha } from '../../theme/tokens';
import { Reveal } from './Reveal';

// Bölüm başlığı: numaralı eyebrow chip + başlık + opsiyonel alt metin.
// About/Skills/Projects/Certificates/Contact'taki tekrar eden başlık bloğu.
export const SectionHeading = ({
  index,
  overline,
  title,
  subtitle,
  accent = accents.cyan,
  align = 'center',
  icon,
}) => (
  <Reveal>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        mb: { xs: 6, md: 8 },
      }}
    >
      <Chip
        icon={icon || <TerminalIcon sx={{ fontSize: 16 }} />}
        label={`${index} — ${overline}`}
        sx={{
          mb: 2.5,
          bgcolor: alpha(accent, 0.1),
          color: accent,
          fontFamily: 'Victor Mono, monospace',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: 2,
          border: `1px solid ${alpha(accent, 0.3)}`,
          '& .MuiChip-icon': { color: accent },
        }}
      />
      <Typography variant="h2" sx={{ color: '#fff', maxWidth: 900 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', maxWidth: 640 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  </Reveal>
);
