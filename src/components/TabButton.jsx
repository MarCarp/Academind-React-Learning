export default function TabButton(props) {
    function handleClick () {
		console.log('triggered !');
	}
    return <li><button onClick={handleClick}>{props.children}</button></li>
}