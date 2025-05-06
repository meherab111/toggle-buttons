export const ToggleButton = () => {
    
    return (<>
    <section className="section-main flex">
        <div className="infos flex flex-column">
            <p>Dark Mode</p>
            <p>Notifications</p>
        </div>
        <div className="switches flex flex-column">
            <div className="switch-outer-box flex">
                <div className="switch"></div>
            </div>
            <div className="switch-outer-box flex">
                <div className="switch"></div>
            </div>
        </div>
    </section>
    </>)
}