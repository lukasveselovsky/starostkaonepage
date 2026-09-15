import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Goals({ id, tag, title, items, alt }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 7, md: 9 }, bgcolor: alt ? '#eee7da' : 'background.default' }}
    >
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary.main">
          {tag}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.7rem', md: '2.25rem' }, mb: 4, mt: 1 }}>
          {title}
        </Typography>

        <Stack spacing={2}>
          {items.map((item, i) => (
            <Accordion
              key={item.title}
              disableGutters
              elevation={0}
              sx={{
                bgcolor: '#fff',
                boxShadow: '0 2px 14px rgba(27,27,24,0.05)',
                '&.Mui-expanded': { boxShadow: '0 8px 26px rgba(27,27,24,0.09)' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                sx={{ px: { xs: 2, md: 3.5 }, py: 1.5 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Bricolage Grotesque", sans-serif',
                      fontWeight: 800,
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      color: 'primary.main',
                      opacity: 0.35,
                      lineHeight: 1,
                      minWidth: { xs: 36, md: 46 },
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Bricolage Grotesque", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.15rem' },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3.5 }, pb: 3, pl: { xs: 2, md: '106px' } }}>
                <Stack spacing={1.5}>
                  {item.text.map((p, j) => (
                    <Typography key={j} sx={{ color: 'text.secondary', fontSize: '0.98rem', lineHeight: 1.7 }}>
                      {p}
                    </Typography>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
