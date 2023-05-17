import styles from './TotalAmount.module.css'

export default function TotalAmount(props) {
    return (
        <div className={styles.totalAmount}>
            <div className={styles.totalAmount__heading}>
                <h4>Total Amount</h4>
            </div>
            <div className={styles.totalAmount__amount}>{props.total}</div>
        </div>
    )
}