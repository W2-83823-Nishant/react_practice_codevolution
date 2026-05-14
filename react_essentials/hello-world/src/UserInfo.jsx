export const UserInfo = ({name, age, city , email}) => {
return (
    <div>
        <h3> {name}</h3>
        <p>Age : {age}</p>
        <p>Email : {email}</p>
    </div>
);
}