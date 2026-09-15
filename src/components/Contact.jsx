import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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
    <Box
      component="section"
      id="kontakt"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(160deg, #1c2333, #4f1119)',
        color: '#fff',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: 'secondary.main' }}>
          Kontakt
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 5, color: '#fff' }}>
          Ozvite sa mi
        </Typography>

        <Grid container spacing={2}>
          {CARDS.map(({ icon: Icon, label, value, href }) => (
            <Grid size={{ xs: 12, sm: 4 }} key={label}>
              <Paper
                component="a"
                href={href}
                elevation={0}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  py: 4,
                  px: 2,
                  textDecoration: 'none',
                  color: '#fff',
                  bgcolor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 4,
                  transition: 'background 0.2s, transform 0.2s',
                  '&:hover': {
                    bgcolor: 'rgba(201,162,75,0.18)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <Icon sx={{ fontSize: '1.8rem', color: 'secondary.main' }} />
                <Typography variant="body2">
                  {label}
                  <br />
                  <strong>{value}</strong>
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
