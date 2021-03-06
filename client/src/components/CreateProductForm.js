import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function CreateProductForm({cards, description, nameProduct, setDescription, setName, handleCreate}) {
  const [open, setOpen] = React.useState(false);
 
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };  
  const handleCreateProduct = () => {
    handleCreate();
    setOpen(false)
    setName('')
    setDescription('')
  }
  return (
    <div className='product__create'>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Создать товар
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Создание товара</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите название товара и его описание
          </DialogContentText>
          {/* NAME */}
          <TextField
            autoFocus
            margin="dense"
            id="nameProduct"
            label="Название товара"
            type="text"
            fullWidth
            value={nameProduct}
            onChange={(event) => setName(event.target.value)}
          />
          {/* DESCRIPTION */}
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Описание товара"
            type="text"
            fullWidth
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Выйти
          </Button>
          <Button onClick={handleCreateProduct} color="primary">
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
