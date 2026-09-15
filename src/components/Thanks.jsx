import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Thanks() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#fff' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontFamily: '"Fraunces", serif',
            fontStyle: 'italic',
            fontSize: '1.4rem',
            color: 'primary.dark',
            mb: 4,
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
        <Typography sx={{ mt: 4, fontSize: '1.1rem' }}>
          Ďakujem Vám za váš hlas i dôveru.
          <br />
          <strong>Eva Veselovská</strong>
        </Typography>
      </Container>
    </Box>
  );
}
