import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const PARAGRAPHS = [
  'Rozhodla som sa kandidovať na starostku obce na obdobie rokov 2026 – 2030. Na našej obci a jej ďalšom rozvoji mi úprimne záleží. Svoju prácu v samospráve vykonávam s rešpektom k ľuďom a ich každodenným potrebám.',
  'Na obecnom úrade pracujem už 30 rokov, počas ktorých som prešla rôznymi pracovnými pozíciami. Veľmi podrobne poznám problematiku samosprávy, spôsob jej fungovania, potreby našej obce, ako aj problémy, ktoré trápia jej obyvateľov.',
  'Počas troch desaťročí práce na obecnom úrade som mala možnosť sledovať, ako sa naša obec mení, akým problémom čelí a aké nové možnosti sa pred ňou postupne otvárajú.',
  'Svoje skúsenosti chcem využiť pri ďalšom rozvoji Liptovskej Lúžnej tak, aby obec dokázala riešiť nielen aktuálne problémy, ale zároveň sa systematicky pripravovala na svoju budúcnosť.',
];

export default function About() {
  const base = import.meta.env.BASE_URL;

  return (
    <Box component="section" id="o-mne" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              transform: { md: 'rotate(-2deg)' },
              boxShadow: '0 30px 60px rgba(27,27,24,0.15)',
            }}
          >
            <Box
              component="img"
              src={`${base}images/dedina.jpg`}
              alt="Liptovská Lúžna"
              sx={{ width: '100%', display: 'block', filter: 'grayscale(1) contrast(1.15)' }}
            />
            <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'primary.main', mixBlendMode: 'color', opacity: 0.8 }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="overline" color="primary.main">
              O mne
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.5rem' } }}>
              30 rokov v službách obce
            </Typography>

            <Stack spacing={1.75} sx={{ maxWidth: 620, mt: 0.5 }}>
              {PARAGRAPHS.map((p, i) => (
                <Typography key={i} sx={{ fontSize: '1rem', color: 'text.secondary', lineHeight: 1.7 }}>
                  {p}
                </Typography>
              ))}
            </Stack>

            <Box sx={{ display: 'flex', gap: 5, mt: 2, flexWrap: 'wrap' }}>
              {[
                { n: '30', l: 'rokov praxe' },
                { n: '2026', l: 'kandidatúra' },
                { n: '01', l: 'nezávislá kandidátka' },
              ].map((s) => (
                <Box key={s.l}>
                  <Typography sx={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: '2rem', fontWeight: 800, color: 'primary.main', lineHeight: 1 }}>
                    {s.n}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', fontWeight: 600, mt: 0.5 }}>
                    {s.l}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
