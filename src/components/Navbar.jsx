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
        background: 'rgba(250, 248, 244, 0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(27,27,24,0.06)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, letterSpacing: '-0.01em', color: 'text.primary' }}
        >
          Eva Veselovská
        </Typography>

        {isMobile ? (
          <>
            <IconButton onClick={() => setOpen(true)} aria-label="menu" sx={{ color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <Box sx={{ width: 240, pt: 2, bgcolor: 'background.default', height: '100%' }}>
                <List>
                  {LINKS.map((link) => (
                    <ListItemButton key={link.href} onClick={() => scrollTo(link.href)}>
                      <ListItemText
                        primary={link.label}
                        slotProps={{ primary: { sx: { color: 'text.primary', fontWeight: 600 } } }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {LINKS.slice(0, 3).map((link) => (
              <Button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  p: 0,
                  minWidth: 0,
                  '&:hover': { color: 'text.primary', background: 'transparent' },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={() => scrollTo('#kontakt')}
              sx={{ px: 3, py: 1.1 }}
            >
              Kontakt
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
