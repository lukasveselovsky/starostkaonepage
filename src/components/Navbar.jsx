import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

const LINKS = [
  { label: 'O mne', href: '#o-mne' },
  { label: 'Vízia', href: '#vizia' },
  { label: 'Program', href: '#program' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:800px)');

  const scrollTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'rgba(36, 20, 23, 0.85)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontFamily: '"Fraunces", serif', fontWeight: 700, letterSpacing: '0.01em' }}
        >
          Eva Veselovská
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={() => setOpen(true)} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <Box sx={{ width: 240, pt: 2, bgcolor: '#241417', height: '100%' }}>
                <List>
                  {LINKS.map((link) => (
                    <ListItemButton key={link.href} onClick={() => scrollTo(link.href)}>
                      <ListItemText
                        primary={link.label}
                        slotProps={{ primary: { sx: { color: '#f1e6d8', fontWeight: 600 } } }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 3 }}>
            {LINKS.map((link) => (
              <Button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                sx={{
                  color: '#f1e6d8',
                  fontSize: '0.9rem',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  '&:hover': { color: '#c9a24b', background: 'transparent' },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
