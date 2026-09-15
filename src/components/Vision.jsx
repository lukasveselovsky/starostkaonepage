import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useParallax from '../hooks/useParallax';

export default function Vision() {
  const bgRef = useParallax(0.15);

  return (
    <Box
      component="section"
      id="vizia"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        ref={bgRef}
        sx={{
          position: 'absolute',
          inset: '-15% 0',
          background: 'linear-gradient(120deg, #4f1119, #7a1f2b)',
          willChange: 'transform',
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="overline" sx={{ color: 'secondary.main' }}>
          Moja vízia
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, mb: 3, color: '#fff' }}>
          Vízia napredovania obce
        </Typography>
        <Typography sx={{ fontSize: '1.2rem', maxWidth: 640, color: '#f1e6d8' }}>
          Liptovská Lúžna má potenciál rásť a držať si svojich obyvateľov. Verím, že spoločnou
          prácou dokážeme obec posunúť ďalej — s rešpektom k jej histórii aj k potrebám
          budúcich generácií.
        </Typography>
      </Container>
    </Box>
  );
}
