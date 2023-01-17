import '../index.css'

export const Footer = () => {
    let date = new Date().getFullYear()
    return (
        <div className='footer'>
            <h6>copyrights© <span style={{ textDecoration: "line-through" }}>Musharaf Aijaz</span> - {date}</h6>
        </div>
    )
}