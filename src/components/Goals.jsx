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
      sx={{ py: { xs: 8, md: 10 }, bgcolor: alt ? '#f4ead9' : 'background.default' }}
    >
      <Container maxWidth="md">
        <Typography variant="overline" color="primary.main">
          {tag}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 4, color: 'primary.dark' }}>
          {title}
        </Typography>

        <Stack spacing={2}>
          {items.map((item, i) => (
            <Accordion
              key={item.title}
              disableGutters
              elevation={0}
              sx={{
                border: '1px solid rgba(122,31,43,0.12)',
                boxShadow: '0 2px 10px rgba(36,20,23,0.04)',
                '&.Mui-expanded': { boxShadow: '0 6px 20px rgba(36,20,23,0.08)' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                sx={{ px: 3, py: 1 }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Fraunces", serif',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'primary.dark',
                  }}
                >
                  <Box component="span" sx={{ color: 'secondary.dark', fontWeight: 800, mr: 1.5 }}>
                    {String(i + 1).padStart(2, '0')}
                  </Box>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Stack spacing={1.5}>
                  {item.text.map((p, j) => (
                    <Typography key={j} sx={{ color: 'text.secondary' }}>
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
