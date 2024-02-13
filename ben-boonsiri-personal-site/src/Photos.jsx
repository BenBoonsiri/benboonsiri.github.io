import React, { useState } from 'react';
import { Box, ImageList, ImageListItem, Dialog, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import './Photos.css';


function Photos() {
  const itemData = [
    {
      img: '/photos/ollie.jpg',
      title: 'ollie',
    },
    {
      img: '/photos/reading.jpg',
      title: 'reading',
    },
    {
      img: '/photos/oreo.jpg',
      title: 'oreo',
    },
    {
      img: '/photos/bear.jpg',
      title: 'bear',
    },
    {
      img: '/photos/bridge2.jpg',
      title: 'bridge2',
    },
    {
      img: '/photos/escarpment.jpg',
      title: 'escarpment',
    },
    {
      img: '/photos/hamilton.jpg',
      title: 'hamilton',
    },
    {
      img: '/photos/hike.jpg',
      title: 'hike',
    },
    {
      img: '/photos/bridge.jpg',
      title: 'bridge',
    },
    {
      img: '/photos/skateboard.jpg',
      title: 'skateboard',
    },
    {
      img: '/photos/garden.jpg',
      title: 'garden',
    },
    {
      img: '/photos/garden2.jpg',
      title: 'garden2',
    },
    {
      img: '/photos/walk.jpg',
      title: 'walk',
    },
    {
      img: '/photos/cn tower.jpg',
      title: 'cn tower',
    },
    {
      img: '/photos/lights.jpg',
      title: 'lights',
    },
    {
      img: '/photos/breakfast.jpg',
      title: 'breakfast',
    },
    {
      img: '/photos/skylon.jpg',
      title: 'skylon',
    },
    {
      img: '/photos/falls.jpg',
      title: 'falls',
    },
    {
      img: '/photos/tulip.jpg',
      title: 'tulip',
    },
    {
      img: '/photos/tulips.jpg',
      title: 'tulip',
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='photo-box'>
      {/* <Box sx={{ width: '50%', height: 750 }}> */}
      <Box sx={{ width: 700, height: '100%' , marginBottom: '70px'}}>
        <h2>Photography</h2>
        <p style={{fontSize:'20px', marginBottom: '50px', marginTop: '15px'}}>I also love taking photos. These are some of my favourites.</p>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} onClick={() => handleImageClick(item)}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Dialog open={open} onClose={handleClose}  maxWidth="lg" maxHeight="lg" PaperProps={{ style: { boxShadow: 'none', backgroundColor: 'transparent' } }}>
        <DialogContent style={{ overflow: 'hidden'  }}>
          {selectedImage && (
            <img src={selectedImage.img} alt={selectedImage.title} style={{  width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: "90vh", objectFit: 'contain' }} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Photos;