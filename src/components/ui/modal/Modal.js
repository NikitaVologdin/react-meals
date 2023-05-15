import styles from './Modal.module.css'
import ContentBox from '../containers/ContentBox'

export default function Modal(props) {
    return (
        <div className={styles.modal}>
                {props.children}
        </div>
    )
}