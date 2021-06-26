import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

//if you onClick delete anythink
export default function ResponsiveDialog({
    isShowConfirm = false,
    setIsShowConfirm,
    onDeleteProcessor,
    isDeleteAllProcessors,
    onClearAllProcessor,
    text
}) {
    const [open, setOpen] = React.useState(isShowConfirm);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const onDelete = () => {
        isDeleteAllProcessors ? onClearAllProcessor() : onDeleteProcessor();
        setOpen(false);
    };
    const handleClose = () => {
        setOpen(false);
        setIsShowConfirm(false);
    };

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle style={{ textAlign: 'center' }} id="responsive-dialog-title">
                    {text}
                </DialogTitle>
                <DialogContent
                    dividers={true}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <DialogContentText>You will can`t come back</DialogContentText>
                </DialogContent>
                <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={onDelete} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
