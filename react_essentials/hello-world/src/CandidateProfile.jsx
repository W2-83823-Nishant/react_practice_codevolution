export const CandidateProfile = () => {

    
    const name = "Peter Parker"
    const role = "Web developer"
    const yearsOfExpierience = 5
    const isAvailable = true

    return (
        <>
        <h2>{name}</h2>
        <p>
        {role} with {yearsOfExpierience} years of experience
        </p>
        <p>Started in {2025 - yearsOfExpierience}</p>
        <p>Status : {isAvailable ? "Available for hire" : "Not Available"}</p>
        </>
    );
}