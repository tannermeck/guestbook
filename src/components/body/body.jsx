import style from './body.css'

const Body = () => {
    return (
        <div className={style.inputField}>
            <form>
                <label>Guest Name</label>
                <input type='text' />
                <label>Guest Entry</label>
                <input type='text' />
            </form>
        </div>
    )
}
export default Body;