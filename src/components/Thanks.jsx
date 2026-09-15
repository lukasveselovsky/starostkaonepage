import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Thanks() {
  return (
    <Box component="section" sx={{ position: 'relative', py: { xs: 8, md: 10 }, bgcolor: '#fff', overflow: 'hidden' }}>
      <Typography
        aria-hidden
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: '"Bricolage Grotesque", sans-serif',
          fontSize: '11rem',
          fontWeight: 800,
          color: 'primary.main',
          opacity: 0.1,
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        "
      </Typography>
      <Container maxWidth="sm" sx={{ textAlign: 'center', position: 'relative' }}>
        <Typography
          sx={{
            fontFamily: '"Bricolage Grotesque", sans-serif',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: '1.3rem',
            color: 'text.primary',
            mb: 3.5,
            lineHeight: 1.5,
          }}
        >
          „Touto cestou by som sa chcela poďakovať doterajšiemu starostovi Ing. Albínovi
          Husarčíkovi za jeho 26-ročnú prácu na zveľaďovaní obce.“
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Realizácia uvedených zámerov si bude vyžadovať spoluprácu obecného zastupiteľstva,
          pracovníkov obecného úradu, miestnych organizácií, spolkov a samotných občanov.
          Verím, že spoločne budeme našu obec rozvíjať a zveľaďovať v prospech nás všetkých.
        </Typography>
        <Typography sx={{ mt: 3.5, fontSize: '1.05rem' }}>
          Ďakujem Vám za váš hlas i dôveru.
          <br />
          <strong>Eva Veselovská</strong>
        </Typography>
      </Container>
    </Box>
  );
}
