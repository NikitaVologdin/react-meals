import styles from './HorizontalLine.module.css'

export default function HorizontalLine(props) {
    const getColor = (color) => {
        if(color === 'red') {
            return styles.horizontalLine_red
        }

        return null
    }
    return <div className={`${styles.horizontalLine} ${getColor(props.color)}`}></div>
}