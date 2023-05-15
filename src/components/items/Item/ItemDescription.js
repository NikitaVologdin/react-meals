import styles from './ItemDescription.module.css'

export default function ItemDescription(props) {
    return (
      <div className={styles.description}>
        <h5>{props.name}</h5>
        <p>{props.description}</p>
        <span>${props.price}</span>
      </div>
    );
}