/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import styles from './Popup.module.css';

const StyleButton = styled(Button)({
  backgroundColor: '#003DA5',
  borderColor: 'none',
  width: '229px',
  height: '54px',
  borderRadius:'30px',
  fontWeight: 'bold',
  color: '#ffffff',
  textTransform: 'none',
  fontSize: '18px'
});

const StyleTitle = styled(DialogTitle)({
color: '#4F758B',
textAlign: 'center'
});


export const Popup = ({children}) => {
  const [popupActive, setPopupActive] = useState(true);
  
  const handleClose = () => {
    setPopupActive(false);
  };

  return (
    <Dialog
      open={popupActive}
      onClose={() => {
        setPopupActive(false);
      }}
    >
      <StyleTitle>Aviso</StyleTitle>
      <DialogContent>
      <p>   {children}</p>
        <DialogActions>
     
          <StyleButton onClick={handleClose} className={styles.btnAccept}>Aceptar</StyleButton>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
