const Divider = (props) => {
    return (
        <div className={"divider--" + (props.isHorizontal ? "horizontal" : "vertical")} />
    );
}

export default Divider;