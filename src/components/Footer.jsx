import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 2.5, bgcolor: '#171712', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
        © 2026 Eva Veselovská — kandidátka na starostku obce Liptovská Lúžna
      </Typography>
    </Box>
  );
}
