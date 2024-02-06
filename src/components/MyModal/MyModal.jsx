import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CollectionsIcon from '@mui/icons-material/Collections';
import './modal.css'
import { Data } from '../../data/data';
import {useNavigate} from 'react-router-dom'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 700,
    bgcolor: '#262626',
    border: '0,5px solid #000',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
};

export default function KeepMountedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [img_src , setImgSrc] = React.useState(undefined)
    const [isimg_loaded, setisimg_loaded] = React.useState(false)
    const navigate = useNavigate()
    function DisplayImg(img) {
        let img_url = URL.createObjectURL(img)
        console.log(img_url)
        setImgSrc(img_url)
        setisimg_loaded(true)
    }

    function Posting(params) {
        Data.unshift({
            id:1,
            video:img_src,
            channelName:"channel",
            likes:0,
            share:0,
            comment:0,
        },)
        setisimg_loaded(false)
        handleClose()
        navigate('/reels')
    }
    return (
        <div>
            <Button onClick={handleOpen}>Create</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography className='graphy2' id="keep-mounted-modal-title" variant="h6" component="h2">
                        создать публикации
                    </Typography>
                    {
                        img_src ? 
                        // <img className='post_img' src={img_src} alt="" />
                        <video controls style={{width:200,height:300}}>
                            <source src={img_src} />
                        </video>
                         :
                        <CollectionsIcon className='media_icon'/>
                    }
                    {
                        isimg_loaded ? <button className='post' onClick={Posting}>Post</button> : null
                    }
                    <Typography className='graphy' id="keep-mounted-modal-description" variant="h5" sx={{ mt: -29 }}>
                        Перетащите сюда фото и видео
                        <input onChange={(e)=>DisplayImg(e.target.files[0])} type="file" name="" id="modal_file" hidden />
                        <label htmlFor="modal_file" className='button2' >Выбрать на компьютере</label>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}