const Items = (props)=>{
    const {name, ispacked} = props;
    
    const Ticklist =()=>{
        if(ispacked)
        {
            return<ul><li key={name}>{name}<i className="fa fa-check-square"></i></li></ul>
        }
        return(
            <>
            <ul><li key={name}>{name}</li></ul>
            </>
        )
    }
    return (
        <>
        <Ticklist/>
        </>
    )    
}
export default Items;


 