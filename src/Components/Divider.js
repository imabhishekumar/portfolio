import './divider.css'
export default function Divider(props){
    return(
        <>
            <div className="divider-wrapper">
                <div className='divider'>
                    <label className="skill-title">{props.title}</label>
                </div>
            </div>
        </>
    )
}