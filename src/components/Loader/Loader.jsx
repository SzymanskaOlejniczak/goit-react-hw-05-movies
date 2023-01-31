import { Grid } from  'react-loader-spinner'
import s from './Loader.module.css'

function Loader() {
    return (
        <Grid
            height="80"
            width="80"
            color="rgb(255,165,0)"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass={s.grid}
            visible={true}
        />
    )  
} 
export default Loader;