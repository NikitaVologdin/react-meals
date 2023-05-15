import styles from './OrderOrClose.module.css'
import Button from './Button'

export default function OrderOrClose(props) {
    const closeHandler = () => {
        props.onOpenCart(!props.isCartOpen)
    }

    const orderHandler = () => {
        props.onOpenCart(!props.isCartOpen);
    }
    return (
        <div className={styles.orderOrClose}>
            <div className={styles.orderOrClose__buttons}>
                <Button outlined short clickHandler={closeHandler}>Close</Button>
                <Button short clickHandler={orderHandler}>Order</Button>
            </div>
        </div>
    )
}