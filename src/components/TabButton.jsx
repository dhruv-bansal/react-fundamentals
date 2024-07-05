//de structure the props object into children and other custom property of props i.e. onSelect
export default function TabButton({children, onSelect, isSelected}) {

    return <li><button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button></li>

}