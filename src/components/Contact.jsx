import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

const CARDS = [
  { icon: PhoneIcon, label: 'Telefón', value: 'doplniť číslo', href: 'tel:+421000000000' },
  { icon: EmailIcon, label: 'E-mail', value: 'doplniť e-mail', href: 'mailto:eva.veselovska@example.sk' },
  { icon: FacebookIcon, label: 'Facebook', value: 'doplniť odkaz', href: '#' },
];

export default function Contact() {
  return (
    <Box component="section" id="kontakt" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#171712' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'primary.light' }}>
          Kontakt
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.7rem', md: '2.25rem' }, mb: 5.5, mt: 1, color: '#fff' }}>
          Ozvite sa mi
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 3, md: 7 }, flexWrap: 'wrap' }}>
          {CARDS.map(({ icon: Icon, label, value, href }) => (
            <Box
              key={label}
              component="a"
              href={href}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.25,
                textDecoration: 'none',
                width: 120,
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-3px)' },
                }}
              >
                <Icon sx={{ color: '#fff', fontSize: '1.6rem' }} />
              </Box>
              <Typography sx={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>{label}</Typography>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>{value}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
