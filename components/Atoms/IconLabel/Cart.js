import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function CartIconLabel({text, onClick, className}){
    return (
        <div className={className}>
            <ShoppingCartIcon/>
            <h3>{text}</h3>
        </div>
    )
}