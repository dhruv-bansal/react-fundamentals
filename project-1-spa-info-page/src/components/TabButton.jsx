//de structure the props object into children and other custom property of props i.e. onSelect
export default function TabButton({children, isSelected, ...props}) {

    return <li><button className={isSelected ? "active" : undefined} {...props}>{children}</button></li> 
    //empty string is also valid apart from undefined

}