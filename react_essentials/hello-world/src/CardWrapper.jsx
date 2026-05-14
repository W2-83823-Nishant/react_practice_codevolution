// here the nested contnet is rendered and it should be named children as react considers element under it as children 

export const CardWrapper = ({title, children}) => {
 return (
    <div className = "card">
        <h2>{title}</h2>
        <div className = "card-content">
           {children}
        </div>
    </div>
 );

}