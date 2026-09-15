import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 3, bgcolor: '#1c2333' }}>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
        © 2026 Eva Veselovská — kandidátka na starostku obce Liptovská Lúžna
      </Typography>
    </Box>
  );
}
