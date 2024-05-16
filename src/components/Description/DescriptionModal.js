import { Modal, Box, Typography, Button, Grid, Paper } from "@mui/material";

const DescriptionModal = ({ isOpen, handleClose, title, description, skills, image, demoLink }) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 1400,
          bgcolor: 'rgba(255, 255, 255)', // Transparent background
          boxShadow: 24,
          p: 4,
          transition: 'all 0.5s ease', // Smooth transition
          opacity: isOpen ? 1 : 0, // Fade effect
          borderRadius: 5,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <img src={image} alt="portfolio" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 8 }} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
                {title}
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
                Description
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif' }}>
                {description}
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', mt: 2 }}>
                Skills
              </Typography>
              <Grid container direction="row" spacing={1}>
                {skills.map((skill, index) => (
                  <Grid item key={index}>
                    <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                      {skill}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Button
                variant="contained"
                onClick={() => window.open(demoLink, '_blank')}
                sx={{ mt: 4 }}
              >
                Live Demo
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DescriptionModal;
