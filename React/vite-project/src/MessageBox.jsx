function MessageBox({username, textcolor}){
    let textStyle = {color:textcolor};
    return (
        <p className="MessageBox" style={textStyle}>Hello {username}</p>
    );
}

export default MessageBox;