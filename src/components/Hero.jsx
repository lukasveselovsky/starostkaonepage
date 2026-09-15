import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useParallax from '../hooks/useParallax';

export default function Hero() {
  const bgRef = useParallax(0.35);
  const portraitRef = useParallax(0.12);

  return (
    <Box
      component="header"
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: '#1c2333',
      }}
    >
      <Box
        ref={bgRef}
        sx={{
          position: 'absolute',
          inset: '-10% 0 -10% 0',
          backgroundImage: 'url(/images/dedina.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(100deg, rgba(20,10,12,0.72) 0%, rgba(20,10,12,0.42) 32%, rgba(20,10,12,0.08) 55%, transparent 70%)',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 700,
          px: { xs: 3, md: 0 },
          pl: { md: '5vw' },
          pt: { xs: '7rem', md: '8rem' },
          pb: { xs: '3rem', md: '4rem' },
          color: '#fff',
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: 'secondary.main', display: 'block', mb: 2 }}
        >
          Voľby 2026 · Liptovská Lúžna
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.6rem', md: '4.5rem' },
            lineHeight: 1.08,
            mb: 3,
            textShadow: '0 4px 30px rgba(0,0,0,0.35)',
          }}
        >
          Starostka
          <br />
          pre všetkých
          <br />
          Lúžňanov
        </Typography>
        <Typography sx={{ fontSize: '1.15rem', color: '#f1e6d8', mb: 4 }}>
          Eva Veselovská — nezávislá kandidátka na starostku
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() =>
            document.querySelector('#o-mne')?.scrollIntoView({ behavior: 'smooth' })
          }
          sx={{
            color: '#4f1119',
            fontSize: '1rem',
            boxShadow: '0 8px 30px rgba(201,162,75,0.35)',
          }}
        >
          Spoznajte môj program ↓
        </Button>
      </Box>

      <Box
        ref={portraitRef}
        sx={{
          position: 'absolute',
          right: { xs: '-10vw', md: '6vw' },
          bottom: 0,
          width: { xs: '55vw', md: 'min(38vw, 480px)' },
          display: { xs: 'none', sm: 'block' },
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <Box
          component="img"
          src="/images/eva-portrait.png"
          alt="Eva Veselovská"
          sx={{
            width: '100%',
            display: 'block',
            filter: 'drop-shadow(0 25px 40px rgba(0,0,0,0.45))',
          }}
        />
      </Box>
    </Box>
  );
}
