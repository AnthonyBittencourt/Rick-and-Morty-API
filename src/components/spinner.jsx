import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import s from './spinner.module.css'


export const Spinner = () => {
    return (
        <div className={s.wrapSpinner}>
            {/* <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }}  role="status">
                <span className="visually-hidden">Loading...</span>
            </div> */}
            <button className="btn btn-dark" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading...</span>
            </button>
        </div>
    )
}