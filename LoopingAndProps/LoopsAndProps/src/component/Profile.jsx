export const Profile=()=>{

    return(
        <>
            <h1> Profile Card Challenge</h1>
           <ProfileCard
           name="Alice"
           age={30}
           greeting={
            <div>
                <strong>Hi Alice, Good Morning!</strong>
            </div>
           }
           >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
        
        </ProfileCard>
           <ProfileCard
           name="Bob"
           age={45}
           greeting={
            <div>
                <strong>Hi Bob, Good Day!</strong>
            </div>
           }
           >
            <p>Hobbies: Painting, Photography</p>
            <button>Contact</button>
           </ProfileCard>

        </>
    )
}

/*function ProfileCard(props){
 return(
    <>
    <h2>Name: {props.name}</h2>
    <p>Age: {props.age}</p>
    <p>{props.greeting}</p>
    <div>{props.children}</div>
    </>
 );
}*/

//DE-STRUCTURED
function ProfileCard({name,age,greeting,children}){
    return(
       <>
       <h2>Name: {name}</h2>
       <p>Age: {age}</p>
       <p>{greeting}</p>
       <div>{children}</div>
       </>
    );
   }
export default Profile;

/**
 * 
 * age={24} : Numbers we can't pass as is. either in '' or {}
 */