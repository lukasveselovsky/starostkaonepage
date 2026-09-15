import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useParallax from '../hooks/useParallax';

export default function Hero() {
  const photoRef = useParallax(0.06);
  const portraitRef = useParallax(-0.04);
  const base = import.meta.env.BASE_URL;

  return (
    <Box component="header" id="hero" sx={{ pt: { xs: 12, md: 14 }, pb: { xs: 6, md: 4 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 6, md: 5 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2.75 }}>
            <Box
              sx={{
                px: 2.25,
                py: 1,
                borderRadius: 999,
                bgcolor: '#eee7da',
                color: 'text.secondary',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
              }}
            >
              VOĽBY 2026 · LIPTOVSKÁ LÚŽNA
            </Box>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2.8rem', md: '4rem' }, lineHeight: 1.04 }}
            >
              Starostka
              <br />
              pre všetkých
              <br />
              <Box component="span" sx={{ color: 'primary.main' }}>
                Lúžňanov
              </Box>
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', color: 'text.secondary', maxWidth: 460, lineHeight: 1.55 }}>
              Eva Veselovská — nezávislá kandidátka na starostku obce, 30 rokov skúseností priamo na
              obecnom úrade.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.75, mt: 1, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => document.querySelector('#o-mne')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Spoznajte program
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{ borderColor: 'text.primary', borderWidth: 2, color: 'text.primary', '&:hover': { borderWidth: 2, borderColor: 'text.primary', bgcolor: 'rgba(27,27,24,0.04)' } }}
              >
                Kontakt
              </Button>
            </Box>
          </Box>

          <Box sx={{ position: 'relative', height: { xs: 420, md: 540 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'absolute',
                width: { xs: 280, md: 380 },
                height: { xs: 280, md: 380 },
                bgcolor: 'primary.main',
                opacity: 0.14,
                borderRadius: '42% 58% 65% 35% / 45% 45% 55% 55%',
                top: 10,
                right: 10,
              }}
            />

            <Box
              ref={photoRef}
              sx={{
                position: 'absolute',
                width: { xs: 200, md: 270 },
                height: { xs: 260, md: 350 },
                borderRadius: '24px',
                overflow: 'hidden',
                transform: 'rotate(-6deg)',
                top: 0,
                left: { xs: 0, md: 10 },
                boxShadow: '0 30px 60px rgba(27,27,24,0.18)',
              }}
            >
              <Box
                component="img"
                src={`${base}images/dedina.jpg`}
                alt=""
                sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(1) contrast(1.15)' }}
              />
              <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'primary.main', mixBlendMode: 'color', opacity: 0.85 }} />
            </Box>

            <Box
              ref={portraitRef}
              sx={{
                position: 'relative',
                width: { xs: 220, md: 290 },
                borderRadius: '20px',
                overflow: 'hidden',
                bgcolor: '#fff',
                p: 1,
                boxShadow: '0 30px 70px rgba(27,27,24,0.22)',
                transform: 'rotate(3deg)',
              }}
            >
              <Box
                component="img"
                src={`${base}images/eva-portrait.png`}
                alt="Eva Veselovská"
                sx={{ width: '100%', display: 'block', borderRadius: '16px' }}
              />
            </Box>

            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: -10, md: 10 },
                left: { xs: -6, md: -10 },
                bgcolor: '#fff',
                borderRadius: '18px',
                px: 2.5,
                py: 2,
                boxShadow: '0 20px 40px rgba(27,27,24,0.16)',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Typography sx={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: '2rem', fontWeight: 800, color: 'primary.main', lineHeight: 1 }}>
                30
              </Typography>
              <Typography sx={{ fontSize: '0.78rem', fontWeight: 600, color: 'text.secondary', maxWidth: 90, lineHeight: 1.3 }}>
                rokov praxe v samospráve
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
