import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const PARAGRAPHS = [
  'Rozhodla som sa kandidovať na starostku obce na obdobie rokov 2026 – 2030. Na našej obci a jej ďalšom rozvoji mi úprimne záleží. Svoju prácu v samospráve vykonávam s rešpektom k ľuďom a ich každodenným potrebám.',
  'Na obecnom úrade pracujem už 30 rokov, počas ktorých som prešla rôznymi pracovnými pozíciami. Veľmi podrobne poznám problematiku samosprávy, spôsob jej fungovania, potreby našej obce, ako aj problémy, ktoré trápia jej obyvateľov. Tridsať rokov praxe v samospráve mi prinieslo rozsiahle odborné znalosti, praktické skúsenosti a dôkladné poznanie fungovania obce.',
  'Počas troch desaťročí práce na obecnom úrade som mala možnosť sledovať, ako sa naša obec mení, akým problémom čelí a aké nové možnosti sa pred ňou postupne otvárajú. Poznám každodenné fungovanie obecného úradu, administratívne procesy, prípravu projektov aj praktické problémy, s ktorými sa občania obracajú na samosprávu.',
  'Svoje skúsenosti chcem využiť pri ďalšom rozvoji Liptovskej Lúžnej tak, aby obec dokázala riešiť nielen aktuálne problémy, ale zároveň sa systematicky pripravovala na svoju budúcnosť.',
];

export default function About() {
  return (
    <Box component="section" id="o-mne" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="overline" color="primary.main">
          O mne
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, mb: 4, color: 'primary.dark' }}>
          30 rokov v službách obce
        </Typography>

        <Stack spacing={2.5} sx={{ maxWidth: 760 }}>
          {PARAGRAPHS.map((p, i) => (
            <Typography key={i} sx={{ fontSize: '1.08rem', color: 'text.secondary' }}>
              {p}
            </Typography>
          ))}
        </Stack>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '2px solid',
            borderColor: 'secondary.main',
            display: 'flex',
            alignItems: 'baseline',
            gap: 2,
            width: 'fit-content',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Fraunces", serif',
              fontWeight: 800,
              fontSize: '3.5rem',
              color: 'primary.main',
              lineHeight: 1,
            }}
          >
            30
          </Typography>
          <Typography sx={{ fontWeight: 600, maxWidth: 180 }}>
            rokov praxe na obecnom úrade
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
