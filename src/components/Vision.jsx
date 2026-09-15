import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Vision() {
  return (
    <Box
      component="section"
      id="vizia"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 10 },
        bgcolor: 'primary.main',
      }}
    >
      <Typography
        aria-hidden
        sx={{
          position: 'absolute',
          right: { xs: -40, md: 30 },
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: '"Bricolage Grotesque", sans-serif',
          fontSize: { xs: '5rem', md: '13rem' },
          fontWeight: 800,
          color: 'rgba(255,255,255,0.08)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}
      >
        2026→2030
      </Typography>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.75)' }}>
          Moja vízia
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.5rem' }, mb: 2, mt: 1, color: '#fff' }}>
          Vízia napredovania obce
        </Typography>
        <Typography sx={{ fontSize: '1.1rem', maxWidth: 620, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
          Liptovská Lúžna má potenciál rásť a držať si svojich obyvateľov. Verím, že spoločnou
          prácou dokážeme obec posunúť ďalej — s rešpektom k jej histórii aj k potrebám
          budúcich generácií.
        </Typography>
      </Container>
    </Box>
  );
}
