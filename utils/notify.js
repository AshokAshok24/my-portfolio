import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = {
    success: (message) => {
        toast.success(
            <div style={{ width: '200px', textAlign: 'center' }}>
                {message}
            </div>,
            { autoClose: 1000, style: { width: '300px' } }
        );
    },
    error: (message) => {
        toast.error(
            <div style={{ width: '200px', textAlign: 'center' }}>
                {message}
            </div>,
            { autoClose: 1000, style: { width: '300px' } }
        );
    },
    info: (message) => {
        toast.info(
            <div style={{ width: '200px', textAlign: 'center' }}>
                {message}
            </div>,
            { autoClose: 1000, style: { width: '300px' } }
        );
    },
    warning: (message) => {
        toast.warning(
            <div style={{ width: '200px', textAlign: 'center' }}>
                {message}
            </div>,
            { autoClose: 1000, style: { width: '300px' } }
        );
    },
};

export default notify;
